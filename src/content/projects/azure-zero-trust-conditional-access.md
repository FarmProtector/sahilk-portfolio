---
title: "Zero Trust / Conditional Access Policy Design"
category: "Azure"
description: "Five Conditional Access policies and an Intune compliance policy, validated with Entra's What If tool and exported via Microsoft Graph PowerShell"
tags: ["Microsoft Entra", "Conditional Access", "Zero Trust", "Intune", "PowerShell"]
status: "Verified"
pubDate: 2026-07-01
custom_link: "https://github.com/FarmProtector/azure-detection-portfolio/tree/main/04-zero-trust-conditional-access"
---

## Introducing This Project

I designed five Conditional Access policies in Microsoft Entra ID covering MFA enforcement, legacy authentication blocking, admin device compliance, sign-in risk, and sign-in frequency with an Intune device compliance policy. All five were built in Report-only mode first, reflecting a real-world phased rollout approach: monitor for false positives before moving to enforced. I validated the policy set using Entra's What If simulation tool and exported the full configuration using Microsoft Graph PowerShell with read-only scopes.

### Tools and Concepts

Microsoft Entra ID, Conditional Access, Zero Trust architecture, Intune device compliance, Microsoft Graph PowerShell SDK, phased security rollout strategy.

### Project Reflection

This project reinforced why phased rollouts matter in production security work — moving straight to "Enforced" without a monitoring period risks locking out legitimate users. I also documented a real gap I found: with no devices enrolled in Intune, the compliance policy has nothing to evaluate against yet, which is an honest, realistic limitation of a lab environment rather than a finished production system.

[View full write-up and PowerShell export on GitHub →](https://github.com/FarmProtector/azure-detection-portfolio/tree/main/04-zero-trust-conditional-access)