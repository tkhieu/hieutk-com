---
publishDate: 2026-02-22T00:00:00Z
title: "I Built an AI Assistant in a Weekend That Monitors My Entire Information Diet"
excerpt: "How I used OpenClaw, Node.js, and Python to create a self-hosted AI that tracks Telegram, X, Reddit, and performs daily stock analysis — for $0/month."
image: https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=928&q=80
category: Engineering
tags:
  - ai
  - automation
  - self-hosted
  - engineering
---

## The Problem

As an engineer, I follow too many information sources: 14 Telegram channels for crypto signals, my X timeline for tech news, 11 Reddit subreddits for industry insights, plus daily stock market analysis. Manually checking all of these was eating 2+ hours of my day.

## The Solution

Over a weekend, I built a self-hosted AI assistant that:

- **Monitors 14 Telegram channels** and summarizes key signals, breaking news, and whale movements every hour
- **Tracks my X timeline** and extracts trending topics and notable tweets
- **Scrapes 11 Reddit subreddits** and categorizes hot posts by topic (crypto, tech, jobs, AI)
- **Performs daily technical analysis** on US stocks and crypto (RSI, MACD, Bollinger Bands, support/resistance)
- **Delivers everything** as concise summaries directly to my Telegram — with clickable links

## The Stack

- **OpenClaw** — AI agent framework for orchestration
- **Node.js** — Telegram monitoring (gramJS), X API, Reddit scraping
- **Python** — yfinance + ta for stock/crypto technical analysis
- **Self-hosted** on a $5/month VPS in Singapore

Total monthly cost for the AI features: **$0**. The LLM runs through my existing API access, and all data sources are free.

## What I Learned

1. **API-first beats scraping** — X and Reddit both have free APIs that are more reliable than browser automation
2. **Summarization is the killer app** — Raw data is useless; AI-generated summaries with links save real time
3. **Self-hosted > SaaS** — For personal tools, owning your data and infrastructure matters
4. **Weekend projects compound** — This started as "let me check some stocks" and became my daily intelligence system

The entire system runs on a single VPS and wakes me up every morning with a market briefing. That's the kind of leverage that makes engineering fun.
