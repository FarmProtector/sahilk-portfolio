---
title: "Threat Hunt & Incident Report — NPT-WS01"
category: "Azure"
description: "Full intrusion investigation in Microsoft Defender Advanced Hunting using KQL, documented as a NIST SP 800-61 incident report with MITRE ATT&CK mapping and containment plan"
tags: ["Microsoft Defender", "KQL", "Incident Response", "MITRE ATT&CK"]
status: "Verified"
pubDate: 2026-06-15
custom_link: "https://github.com/FarmProtector/azure-detection-portfolio/tree/main/01-threat-hunt-ir"
---

## Introducing This Project

This project simulates a real-world security investigation. Working from a compromised host (NPT-WS01), I used Microsoft Defender Advanced Hunting to trace attacker activity across the endpoint, writing KQL queries to uncover 11 distinct indicators of compromise. The investigation was documented as a formal incident report aligned to NIST SP 800-61, mapping each finding to the MITRE ATT&CK framework and closing with a containment plan.

### Tools and Concepts

Microsoft Defender Advanced Hunting, KQL (Kusto Query Language), MITRE ATT&CK framework, NIST SP 800-61 incident response lifecycle.

### Project Reflection

This project deepened my ability to write investigative KQL queries under a realistic time-pressured scenario, and to translate raw endpoint telemetry into a structured, audience-ready incident report, a skill directly relevant to SOC and incident response roles.

[View full write-up and KQL queries on GitHub →](https://github.com/FarmProtector/azure-detection-portfolio/tree/main/01-threat-hunt-ir)