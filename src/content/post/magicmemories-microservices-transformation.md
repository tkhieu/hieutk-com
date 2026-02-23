---
publishDate: 2026-02-10T00:00:00Z
title: "How We Rebuilt MagicMemories' Photo Platform from Monolith to Microservices"
excerpt: "The story of transforming the world's largest theme park photo company's legacy system into a cloud-native microservices platform — and the hard lessons learned along the way."
image: ~/assets/images/blog/magicmemories-microservices.png
category: Architecture
tags:
  - architecture
  - microservices
  - cloud
  - dotnet
---

## The Context

MagicMemories captures and sells photos at theme parks worldwide — think roller coaster shots, character meet-and-greets, and water ride splashes. Millions of photos processed daily, with traffic spikes that follow park opening hours across different time zones.

Their legacy system worked, but it was showing its age. Processing delays during peak hours, mounting cloud costs, and a codebase that made engineers nervous every time they deployed.

I joined as a Senior .NET Developer with one mission: build OS v2.

## Why "OS"?

MagicMemories OS wasn't just an app — it was the entire operating system for the business. Photo capture, processing, facial recognition matching, customer purchase flow, park operator dashboards, reporting. Everything.

Rebuilding it meant rebuilding the heart of the company.

## The Architecture

We went with an event-driven microservices approach. Here's why:

### Photo Processing Pipeline

Photos flow through multiple stages: capture → upload → processing → facial recognition → matching → storefront. Each stage has wildly different scaling needs.

A roller coaster car produces 20+ photos in 3 seconds. A family browsing the storefront might spend 15 minutes. These can't live in the same scaling model.

**Solution:** Each stage became its own service, communicating via events. The capture service could spike to handle 1000 photos/minute while the storefront service stayed steady.

### The Cost Problem

The old system ran on oversized VMs provisioned for peak capacity. At 2 AM when parks were closed, we were paying for infrastructure handling zero traffic.

**Solution:** Kubernetes auto-scaling. Services scale to zero during off-hours and spin up ahead of park opening times. Cloud costs dropped significantly.

### The Global Problem

Theme parks in Orlando, Tokyo, and Gold Coast don't have the same peak hours. The system needed to handle rolling peaks across time zones.

**Solution:** Multi-region deployment with data locality. Photos stay in the region they were captured, reducing latency and complying with data residency requirements.

## Hard Lessons

### 1. Event ordering matters more than you think

We assumed events would arrive in order. They didn't. A "photo processed" event sometimes arrived before "photo uploaded" was confirmed. Took us weeks to build proper event ordering and idempotency.

### 2. Observability is not optional

With 10+ services, a single photo's journey touched 6 different systems. Without distributed tracing, debugging was like finding a needle in a haystack — blindfolded.

We should have set up OpenTelemetry on day one, not month three.

### 3. Domain boundaries are everything

Our first attempt at service boundaries followed technical lines (API service, processing service, database service). Wrong.

The second attempt followed business domains (capture, matching, storefront, operations). Everything clicked.

### 4. Don't underestimate data migration

The old system had years of customer data, purchase history, and photo archives. Migrating this while keeping both systems running was harder than building the new one.

## The Result

MagicMemories OS v2 shipped. Parks worldwide switched over with minimal disruption. Cloud costs went down. Deployment confidence went up. Engineers could ship features without fearing they'd break the photo pipeline.

The most satisfying moment? Watching the auto-scaler spin up 50 processing pods at 9 AM Orlando time, handle the morning rush, then quietly scale back down. That's the kind of infrastructure that lets you sleep at night.

## Key Takeaways

1. **Event-driven architectures shine** when you have wildly different scaling needs across stages
2. **Domain-driven boundaries** > technical boundaries for service decomposition
3. **Observability first** — you can't fix what you can't see
4. **Auto-scaling saves money AND sanity** — stop paying for idle infrastructure
5. **Data migration is a project in itself** — plan for it, don't bolt it on
