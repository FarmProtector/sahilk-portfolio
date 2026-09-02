---
title: "Basic Secret Management with Secrets Manager and Lambda"
category: "AWS"
description: "A hands-on project retrieving a database secret in a Lambda function using AWS Secrets Manager and the Parameters and Secrets Lambda Extension, with local caching"
tags: ["AWS", "Lambda", "IAM", "Cloud Security"]
status: "Verified"
pubDate: 2026-09-01
---

## Intro

In this project, I built a Lambda function that retrieves a database
secret from AWS Secrets Manager at runtime instead of hardcoding it
anywhere in code or environment variables. I followed a project from
[cloudprojects.dev](https://cloudprojects.dev/) that walks 
through this pattern end to end using the AWS CLI.

### Tools and concepts

Services I used include AWS Secrets Manager, Lambda, IAM, and
CloudWatch Logs. Key concepts I learned include IAM trust policies vs.
permissions policies, least-privilege resource scoping, the AWS
Parameters and Secrets Lambda Extension, and how to tell a Lambda cold
start apart from a warm one using CloudWatch's REPORT log line.

### Project reflection

This project took me about an hour including debugging — the CLI
commands themselves took maybe 25 minutes, but I ran into a few real
issues along the way that took longer to work through than the steps
did. I chose to do this project to get more hands-on with Lambda and
Secrets Manager together, since I'd used each service on its own before
but never wired them together with the caching extension.

---

## Building the Secret and the IAM Role

I created an IAM role for Lambda with two separate policies attached:
the AWS-managed `AWSLambdaBasicExecutionRole` for CloudWatch Logs, and a
custom policy scoped to the exact ARN of one secret rather than a
wildcard resource. That distinction mattered to me because if this role's
credentials ever leaked, the blast radius is one secret, not every
secret in the account.

I then created a sample secret in Secrets Manager holding fake database
connection info as a JSON blob.

## Writing the Lambda Function

The function doesn't call the Secrets Manager SDK directly. Instead it
makes an HTTP request to `localhost:2773`, where the AWS Parameters and
Secrets Lambda Extension runs as a sidecar process inside the execution
environment. The extension handles the actual Secrets Manager API call
and caches the result in memory, which cuts down on latency and API
costs for a function invoked frequently.

## Debugging Deployment Issues

This is where most of my actual time went, and it was the most useful
part of the project:

- `zip` wasn't installed on my machine, so the packaging step silently
  failed — the script's own success message printed anyway, since
  nothing checked whether the command before it actually worked. I
  caught it by checking the file size directly instead of trusting the
  checkmark.
- Right after creating the Lambda function, the next command tried to
  modify it immediately and failed with a `ResourceConflictException`,
  because Lambda hadn't finished provisioning yet. Fixed with
  `aws lambda wait function-active` instead of a blind `sleep`, which
  polls until the function is actually ready.
- Even after the function was active, a second async issue showed up:
  attaching the extension layer needs its own separate wait
  (`aws lambda wait function-updated`), since Lambda tracks whether a
  function *exists* and whether its *most recent config change* has
  finished propagating as two different things.

## Testing the Caching

I invoked the function three times in a row and pulled the CloudWatch
logs to see what was actually happening. The first call was a cold
start (355ms, with an `Init Duration` showing the environment being
provisioned). The next few were warm, and one completed in 2.34
milliseconds, which is fast enough that I know for certain it wasn't a real
network call to Secrets Manager. That's the actual proof the extension's
cache was working, not just Lambda being warm.

## Cleaning Up

Total cost for the exercise was under $0.10. I tore everything down
afterward the Lambda function, both IAM policies, the role, the secret
(using `--force-delete-without-recovery` since it was just demo data),
and the CloudWatch log group, which the original project's own cleanup
steps had actually missed.