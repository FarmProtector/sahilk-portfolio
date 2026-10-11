---
title: "Sentinel Risk-Tiered Geo Map"
category: "Azure"
description: "Microsoft Sentinel workbook that geolocates and risk-scores Azure control-plane changes by caller IP"
tags: ["Microsoft Sentinel", "KQL", "Data Visualization", "Azure"]
status: "Verified"
pubDate: 2026-06-20
custom_link: "https://github.com/FarmProtector/azure-detection-portfolio/tree/main/02-sentinel-geomap"
---

## Introducing This Project

I built a Microsoft Sentinel workbook that visualizes Azure control-plane activity on a geographic map, risk-scoring each change based on the caller IP's location and behavior pattern. This gives a security team an at a glance view of where administrative changes are originating from, surfacing anomalies that a text-based log view would bury.

### Tools and Concepts

Microsoft Sentinel, KQL, AzureActivity log analysis, risk-tiered data classification, workbook visualization design.

### Project Reflection

This project taught me how to turn raw log data into an operationally useful visualization — the kind of tool a SOC analyst would actually use during a shift, not just a technical exercise.

[View full write-up on GitHub →](https://github.com/FarmProtector/azure-detection-portfolio/tree/main/02-sentinel-geomap)