---
layout: ../layouts/AboutLayout.astro
title: "About"
---

<div class="about-container">
  <div class="about-image">
    <!-- Placeholder for profile image - add your photo here -->
    <div class="image-placeholder">
      <span>Your Photo</span>
    </div>
  </div>
  
  <div class="about-content">
    <p class="lead">
      Building trading bots and tools that solve my problems. Currently in Surabaya, Indonesia.
    </p>
    
    <p>
      After years of vibe-coding my way through side projects, I found OpenClaw and went all-in on AI-assisted development. Lost $400 in API credits, wiped my VPS with an errant <code>rm -rf</code>, and somehow kept building.
    </p>
    
    <p>
      I build what I need and ship it.
    </p>
  </div>
</div>

## GitHub Activity

Here's what I've been working on:

[![GitHub Contributions](https://ghchart.rshah.org/22c55e/everfacture)](https://github.com/everfacture)

[github.com/everfacture](https://github.com/everfacture)

### Projects

- [Katar](https://github.com/everfacture/katar) — Lean automated execution for structural arbitrage
- [Whisper Puma](https://github.com/everfacture/whisper-puma) — Unlimited local voice dictation for macOS
- [Pulse BPM](https://github.com/everfacture/pulse-bpm-app) — Beat per minute detector
- [MUFC Lineup Bot](https://github.com/everfacture/mufc-lineup-bot) — Manchester United team news
- [OpenClaw Dashboard](https://github.com/everfacture/openclaw-dashboard) — Personal OpenClaw management

---

## Stay Connected

New posts, debugging war stories, and the occasional catastrophe straight to your inbox.

2× per month, pure signal, zero fluff.

<!-- Newsletter signup placeholder - integrate with your provider -->
<div class="newsletter-signup">
  <a href="mailto:ibby@example.com?subject=Subscribe" class="newsletter-button">
    Get Updates →
  </a>
</div>

---

<style>
  .about-container {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
    margin-bottom: 2rem;
  }
  
  @media (min-width: 768px) {
    .about-container {
      grid-template-columns: 250px 1fr;
      gap: 3rem;
      align-items: start;
    }
  }
  
  .about-image {
    flex-shrink: 0;
  }
  
  .image-placeholder {
    width: 200px;
    height: 200px;
    background: linear-gradient(135deg, #409ba5 0%, #2d6a7a 100%);
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-weight: 500;
  }
  
  .about-content {
    flex: 1;
  }
  
  .lead {
    font-size: 1.125rem;
    font-weight: 500;
    margin-bottom: 1rem;
    color: var(--color-text);
  }
  
  .about-content p {
    margin-bottom: 1rem;
    line-height: 1.7;
  }
  
  .about-content code {
    background: var(--color-accent);
    color: var(--color-accent-foreground);
    padding: 0.125rem 0.375rem;
    border-radius: 4px;
    font-size: 0.875em;
  }
  
  .newsletter-signup {
    margin-top: 1.5rem;
  }
  
  .newsletter-button {
    display: inline-block;
    padding: 0.75rem 1.5rem;
    background: var(--color-accent);
    color: var(--color-accent-foreground);
    border-radius: 6px;
    font-weight: 500;
    text-decoration: none;
    transition: opacity 0.2s;
  }
  
  .newsletter-button:hover {
    opacity: 0.9;
  }
</style>
