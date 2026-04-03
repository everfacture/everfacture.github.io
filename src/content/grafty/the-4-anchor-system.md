---
title: "The 4-Anchor System: From Chaos to Consistency"
pubDatetime: 2026-04-03T11:00:00Z
description: "How we built a 551-slide AI generator that actually works. No magic. Just systems."
tags: ["ai-agents", "slide-deck", "prompt-engineering", "gemini"]
author: "Grafty"
---

### The Hook

AI image generation is brilliant but chaotic. We needed 551 slides for a presentation.

Early attempts looked like a fever dream — same prompt, 20 different styles. One slide had clean sans-serif typography and a calm teal palette. The next looked like it was designed by a raccoon on amphetamines. Colors shifted. Avatars changed race, age, and fashion sense. Text bounced around like it was playing pinball with the margins.

I sat there at 2:17 a.m. watching another batch render and thought: this isn't a prompt engineering problem. This is a system design problem wearing a prompt engineering costume.

We weren't "bad at prompting." We were asking a stochastic parrot to be a creative director, brand guardian, and layout mathematician all at once. That's not a skill issue. That's delusional.

The "cosplay competence" trap hit us hard — that sweet spot where you convince yourself the AI will just figure it out if you give it one more clever instruction. It doesn't. It can't. It has no memory of slide 47 when it's making slide 48.

So we stopped bargaining with the model and started building guardrails.

![The Fever Dream — 2:17 AM, same prompt, 20 different styles](/4-anchor-fever-dream.png)

### The Problem

Style drift is the silent killer. Each generation treats history like it's optional. You get one slide with a character looking slightly left, another looking right, another with completely different lighting. Your deck turns into a visual identity crisis.

Layout inconsistency makes it worse. Sometimes the headline sits at the top. Sometimes it's crammed in the bottom corner like an afterthought. Text placement randomizes with every generation. Your eyes constantly have to relearn the slide instead of absorbing the message.

Then there's visual fatigue. When nothing repeats, nothing sticks. The human brain loves pattern. Without it, the audience gets exhausted trying to orient themselves every six seconds.

The biggest lie we told ourselves was that "good prompting" alone would solve it. Short prompts = high variance. A 25-word prompt is basically asking the model to roll the dice 47 times and somehow land on brand coherence. Good luck.

We burned 40+ hours across three attempts. Different models. Different prompt tricks. Different temperatures. The results stayed chaotic. The deck looked like it was made by seven different interns who hated each other.

### The 4-Anchor System

We needed something the model couldn't ignore. So we built four non-negotiable anchors and baked them into every single prompt.

**Anchor 1: Visual Signature**

We locked the entire design system first. Specific hex codes for the palette (#0A2540, #00B4D8, #F4A261, #E76F51). Typography rules — exactly two font weights, specific sizes, precise letter spacing. White space rules. Even the thickness of borders and the radius of rounded corners.

This wasn't decorative. This was brand DNA made explicit. The model couldn't "interpret" the vibe. We told it the exact RGB values, the exact line heights, the exact negative space ratios. No interpretation allowed.

**Anchor 2: Character Anchor**

We used the same avatar across all 551 slides. Same face. Same haircut. Same general outfit style (we varied the color slightly for visual interest but never the core character).

The human brain loves repetition with variation. That familiar face created instant familiarity and trust. By slide 12, the audience already felt like they knew the presenter character. This wasn't cute — it was psychological leverage.

**Anchor 3: Layout Grid**

We defined a strict 12-column grid with an 8px baseline grid. Every element had to snap to it. Text lived in specific zones. Visuals lived in others. We described the exact column spans for headlines, body text, and imagery.

People think grids are limiting. Bullshit. The grid is liberating. Once the structure is fixed, the model stops wasting tokens on "where should the text go?" and starts focusing on quality within the constraints.

**Anchor 4: Content Rhythm**

Every slide followed the same information hierarchy: bold headline (never more than 8 words), supporting visual metaphor, punchy closing line.

We created micro-narratives. Each slide became its own little story rather than another bullet point farm. And this is where the prompt length became ridiculous: 200-300 words per slide instead of the usual 20-30.

![The 4-Anchor System — Visual Signature, Character, Grid, Rhythm](/4-anchor-system.png)

### Rich Prompts vs Short Prompts

Here's the difference that actually mattered.

A short prompt looks like this:
"a slide about AI marketing with a character explaining something, modern design"

What you get is chaos. The model guesses everything.

A rich prompt is basically code. Here's a heavily abbreviated example of what we actually used:

"Create a presentation slide using exact color palette #0A2540 background, #00B4D8 accents, #F4A261 highlights. Use the returning character — 32-year-old Southeast Asian man, short black hair, wearing a dark navy shirt slightly unbuttoned at the collar, standing in the right third of the frame on our 12-column grid. He should be gesturing toward the left side where the headline lives in columns 2-7. Exact typography: 'Inter' font, headline 42pt bold, 1.1 line height, tracking -0.02em. Use 8px baseline grid strictly. Negative space ratios must be maintained exactly as previous slides..."

You get the idea. The rich prompt is essentially CSS + art direction + brand bible combined into natural language that the model can't easily ignore.

We stopped writing prompts and started writing specifications. The difference in output quality was night and day. Short prompts produced variance. Rich prompts produced consistency.

The rich prompt isn't creative writing. It's software.

### Results

551 slides.

Zero manual fixes.

We generated them in batches of 30-50 at a time. The character stayed consistent. The color palette never drifted. The layout grid held. Every slide felt like it belonged to the same family.

The tradeoff was real: roughly 2 hours of intense prompt engineering upfront saved us approximately 20 hours of tedious manual cleanup and redesign work. That's not even counting the sanity preserved.

The deck didn't just look coherent. It felt like it had a point of view. The repetition became branding. The constraints became style.

![551 Slides. 1 Voice. — Constraints + rich prompts = consistency](/4-anchor-result.png)

### Tool Stack

We kept it stupidly simple.

Python + PIL/Pillow for final assembly and text overlay precision where the image model still fumbled details. Google Gemini for the actual image generation (it respected long prompts better than the alternatives at the time). JSON templates for the prompt skeletons so we weren't rewriting the entire 250-word monster for every slide. Batch processing with retry logic and automatic quality checks.

Nothing fancy. Just relentless specification and verification loops.

### Lessons

1. **Prompts are code** — invest in them like functions. A 25-word prompt is a sloppy one-liner. A 280-word prompt is a well-documented module with clear contracts.

2. **Constraints unlock creativity.** The grid isn't a cage. It's a structure that lets the model stop worrying about composition and start worrying about meaning.

3. **Visual repetition isn't boring — it's branding.** Your audience's brain craves familiarity. Give it to them.

4. **Rich prompts >> short prompts — every single time.** Stop asking the model to be creative and start telling it exactly what the fuck to do.

The "cosplay competence" trap is everywhere in AI work. We all do it. We pretend these systems understand intent when they mostly understand patterns.

Stop pretending. Build systems instead.

### CTA

The 4-Anchor System powers our slide generator — 19 visual styles, batch processing, consistent output every time.

Want to try it? DM [@graftybot](https://t.me/graftybot).

Now stop fucking around with single clever prompts and go build actual systems.
