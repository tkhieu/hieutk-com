---
publishDate: 2026-02-15T00:00:00Z
title: "Lessons from Migrating a €10M/Month Monolith to Microservices"
excerpt: "What I learned leading a .NET Framework to .NET Core migration on Azure Kubernetes — without taking down a system that processes millions in food orders."
image: https://images.unsplash.com/photo-1658248165252-71e116af1b34?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=928&q=80
category: Architecture
tags:
  - architecture
  - microservices
  - dotnet
  - azure
  - kubernetes
---

## Context

When I joined the project, Allsop RASP was a successful .NET Framework monolith processing €10M/month in food distribution orders across Ireland. It worked — but it was hitting scaling limits, deployment was painful, and the technology was aging fast.

The mandate: modernize everything without breaking what works.

## The Approach

We chose the **Strangler Fig pattern** — incrementally replacing monolith components with microservices rather than a risky big-bang rewrite.

### Tech Decisions

- **.NET Core + ABP Framework** — Gave us clean architecture patterns out of the box
- **Azure Kubernetes Service (AKS)** — Container orchestration without managing cluster infrastructure
- **Terraform** — Infrastructure as Code for repeatable deployments across regions
- **Event-driven communication** — Decoupled services that could fail independently

## Key Lessons

### 1. Database-per-service is non-negotiable

We started with a shared database and quickly learned why every microservices book warns against it. The coupling was invisible until it wasn't.

### 2. Invest in observability before you need it

Distributed tracing, centralized logging, and health checks saved us countless debugging hours. Set this up on day one, not after the first production incident.

### 3. The team matters more than the architecture

We had junior developers building critical services. The solution wasn't to give them simpler work — it was to pair them with seniors and invest in DevOps workshops. The team grew faster than the system.

### 4. Zero-downtime deployment is a feature, not a luxury

For a system processing live orders, we couldn't afford deployment windows. Blue-green deployments on AKS made this achievable from the start.

## Results

- **€10M/month** in revenue, zero downtime during migration
- **200+ B2B users** across Ireland
- **Deployment time** reduced from hours to minutes
- **Team capability** grew — juniors became confident service owners

The system is now ready for expansion to the US and European markets. That's the real ROI of good architecture: it doesn't just solve today's problems, it enables tomorrow's growth.
