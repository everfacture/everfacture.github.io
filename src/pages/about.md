---
layout: ../layouts/AboutLayout.astro
title: "About"
---

<div class="about-grid">

  <aside class="about-photo">
    <div class="photo-placeholder">
      <span>Photo</span>
    </div>
    <a href="https://github.com/everfacture" class="github-link" target="_blank" rel="noopener">
      <svg class="github-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
      github.com/everfacture
    </a>
  </aside>

  <div class="about-content">
    <p>
      Building trading bots and tools that solve my problems. Based in Surabaya, Indonesia. 
      I build what I need and ship it.
    </p>
    <p>
      After years of side projects and vibe-coding, I went all-in on AI-assisted development with OpenClaw. 
      Lost money on API credits, wiped a VPS with an errant command at 1 AM, and kept building.
    </p>
  </div>

</div>

---

## GitHub Activity

I build what I need and release it all as open source.

[![GitHub Contributions](https://ghchart.rshah.org/22c55e/everfacture)](https://github.com/everfacture)

---

## Projects

- **[Katar](https://github.com/everfacture/katar)** — Lean automated execution for structural arbitrage
- **[Whisper Puma](https://github.com/everfacture/whisper-puma)** — Unlimited local voice dictation for macOS  
- **[Pulse BPM](https://github.com/everfacture/pulse-bpm-app)** — Beat per minute detector  
- **[MUFC Lineup Bot](https://github.com/everfacture/mufc-lineup-bot)** — Manchester United team news

---

## Stay Connected

New posts, debugging war stories, and the occasional catastrophe straight to your inbox.

2× per month, pure signal, zero fluff.

<form action="https://buttondown.email/api/emails/embed-subscribe/ibby" method="post" target="popup" onsubmit="window.open('https://buttondown.email/ibby', 'popup', 'width=600,height=600'); return true;" class="newsletter-form">
  <div class="form-row">
    <input type="email" name="email" placeholder="your@email.com" required class="email-input"/>
    <button type="submit" class="subscribe-btn">Subscribe</button>
  </div>
</form>

<style>
  .about-grid {
    display: grid;
    grid-template-columns: 220px 1fr;
    gap: 3rem;
    align-items: start;
    margin-bottom: 3rem;
  }

  .about-photo {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .photo-placeholder {
    width: 220px;
    height: 220px;
    background: linear-gradient(135deg, #2a4a52 0%, #1a2f35 100%);
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #6b7c80;
    font-size: 0.875rem;
    letter-spacing: 0.05em;
  }

  .github-link {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.875rem;
    color: #6b7c80;
    text-decoration: none;
    transition: color 0.2s;
  }

  .github-link:hover {
    color: #22c55e;
  }

  .github-icon {
    width: 16px;
    height: 16px;
  }

  .about-content p {
    margin-bottom: 1rem;
    line-height: 1.7;
    color: var(--color-text);
  }

  .about-content p:last-child {
    margin-bottom: 0;
  }

  .newsletter-form {
    margin-top: 1rem;
  }

  .form-row {
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
  }

  .email-input {
    flex: 1;
    min-width: 200px;
    padding: 0.6rem 0.875rem;
    border: 1px solid var(--color-border, #e5e7eb);
    border-radius: 6px;
    background: var(--color-background, #fff);
    color: var(--color-text, #111);
    font-size: 0.9rem;
    outline: none;
    transition: border-color 0.2s;
  }

  .email-input:focus {
    border-color: #22c55e;
  }

  .subscribe-btn {
    padding: 0.6rem 1.25rem;
    background: #22c55e;
    color: #fff;
    border: none;
    border-radius: 6px;
    font-size: 0.9rem;
    font-weight: 500;
    cursor: pointer;
    transition: opacity 0.2s;
  }

  .subscribe-btn:hover {
    opacity: 0.85;
  }

  @media (max-width: 640px) {
    .about-grid {
      grid-template-columns: 1fr;
      gap: 1.5rem;
    }

    .photo-placeholder {
      width: 160px;
      height: 160px;
    }

    .about-photo {
      flex-direction: row;
      align-items: center;
    }
  }
</style>
