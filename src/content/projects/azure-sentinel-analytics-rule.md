---
title: "Sentinel Analytics Rule & Automated Response"
category: "Azure"
description: "Detection logic converted into a live Sentinel analytics rule with entity mapping and MITRE ATT&CK technique mapping"
tags: ["Microsoft Sentinel", "Detection Engineering", "MITRE ATT&CK", "KQL"]
status: "Verified"
pubDate: 2026-06-25
custom_link: "https://github.com/FarmProtector/azure-detection-portfolio/tree/main/03-sentinel-analytics-rule"
---

## Introducing This Project

Building on the risk-tiered geo-map, I converted the "Critical" risk tier into a live, scheduled Sentinel analytics rule with entity mapping (so Sentinel correctly identifies the accounts and IPs involved) and MITRE ATT&CK technique tagging for each triggered alert.

### Tools and Concepts

Microsoft Sentinel analytics rules, entity mapping, MITRE ATT&CK technique tagging, detection engineering lifecycle (from workbook to live rule).

### Project Reflection

This project took my detection logic from a passive visualization into an active, alerting control — the natural next step in a real detection engineering workflow. I also documented a finding where the shared cyber-range environment blocked a safe IAM test action, which became a useful lesson in testing detections within constrained lab environments.

[View full write-up on GitHub →](https://github.com/FarmProtector/azure-detection-portfolio/tree/main/03-sentinel-analytics-rule)