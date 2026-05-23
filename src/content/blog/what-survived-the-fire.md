---
title: What Survived the Fire
pubDatetime: 2026-05-23T13:31:13Z
description: $264 in API credits. The usual broken config. One product built. Two months of agent chaos, survived.
tags:
  - ai-agents
  - openclaw
  - self-hosting
  - build-in-public
  - lessons-learned
  - slayde
  - trading-bots
author: Ibby
---
_2 months later. Tuition fees paid._

---

## TL;DR:

- Spent $102 in March, $162 in April. May is down to $70 on Codex & Alibaba's [coding plan](https://help.aliyun.com/zh/model-studio/coding-plan?spm=a2c4g.11186623.0.i2).
- The systems work now because I stopped letting agents near my config unsupervised. 
- Herman builds, Grafty runs ops, Spectre digs. Each has a lane. They still swerve.
- Free model on OpenRouter built the first version of [Slayde](https://slayde.app/) in 15 hours. S(l)ide project became real overnight.
- TradFi bot prints, Crypto bot bleeds. Still paper trading (if paper was $2.5 a pop).
- **Not a broken man**. _Zen_. Feel like a new man.
---
# Tuition Fees

The first months bill was steep and can't say the second or third was much better for the wallet. I know more about servers, LLMs, agentic engineering, architecture and systems now than I did 2 months ago. The flow of data is clearer. Processes that were once alien have become natural. This round I have been smarter about it.  What didn't kill me (financially, emotionally) was a floor raiser.

| Item                           | Mar     | Apr     |
| ------------------------------ | ------- | ------- |
| Various API Credits            | $92.35  | $95.10  |
| Alibaba Coding Plan            | —       | $50.00  |
| Cloudflare (slayde.app domain) | —       | $16.76  |
| Total                          | $102.35 | $161.86 |

The whole `rm -rf` debacle was one of many system sparring sessions. Kickboxed with context. Fucked around and found out about giving agents that level of access to my nose. 

---

>You're right. I identified it, documented it, and did nothing. Classic agent masturbation — find the thing, talk about the thing, don't fix the thing. ~ _Grafty_

Since publishing the last messy post about my freestyle agent a few months back I now have guardrails in place:

- Automated back ups
- Agent sandboxed
- Cost alerts w/spending caps
- Few other boring things

A bit more discipline with the lads in month 3.
  
Alibaba coding plan for $50 a month which gives me access to `qwen3.6-plus`, does the job for most the agentic work, coding and management needed. The plans so generous that my crons jobs are now powered by Zai's `GLM-5` (overkill but feeling opulent). I use `gpt-5.5` for anything I want done intricately. Mainly a detailed plan then switch to Qwen then back to GPT for the last 10% of the journey.

It helps that these models are now only a few points lower than the big boys for agentic work and sometimes score higher on the benchmarks. For whatever thats worth. In the real world it works for me.

Every week something state of the art is released. Which as of now is [Gemini](https://x.com/altryne/status/2056793526755840187?s=20) apparently - by the time I post this something new and shinier will be on the scene. 

Sad part is us peasants will never touch the bleeding edge that controls the herd.. 

---

# Katar Update & Split

My trading bots are essentially python loops. I split the monolithic beast that was Katar into 2 trading bots with the same setup triggers.

Annoyingly the TradFi bot makes money whilst the crypto bot loses. So were still essentially paper trading until I'm confident enough to extend the leash.

Architecture works. Setups Signal layer needs work. Confidence not there yet. 6/10.

We move and we tweak. Data signal layer is the bottleneck preventing me from deploying real capital. Tweakers be tweaking.

---

# Stumbling upon an Idea

The hit to the income stream due to this war was like a knee square to the nuts. Shipping from China has been affected meaning a couple of my big earners are blocked for the time being. This gave me time to pivot & work on a few local things here in Indonesia, attend more language classes in and tinker some more with agents and LLMs.

Referencing for academia in the English language kills me. In Indonesian tidak bagus. I fired up Grafty and told him membantu with the presentation. 

![agarwood_format_graft](/agarwood_format_graft.png)

---

I was running this openclaw instance on a free openrouter stealth model called `hunter-alpha` (later revealed as `xiaomi/mimo-v2-pro`). Word on the street was that it was the latest and greatest DeepSeek model. I used it for a month before the great reveal and it was surprisingly better at agentic tasks then anything else I had experienced. I still had a paid `kimi-k2.5` model which I would use for subagent tasks to research and build a few tools for me as back up. 

I asked a simple question:

>Can you make slides?

_we iterated for a few hours_

![realisation](/realisation.png)

Lovely. Beautiful slides. Consistent and easy on the eye. Pipeline workable. Seed planted. 


scripts/slides-generator/

├── generate.py    # The working script

└── README.md      # System docs + prompt formula

---

We worked on a system that `grok4.2beta` eloquently [posted](https://ibby.is-a.dev/grafty/the-4-anchor-system/) about.  I had to get it to redact a lot of the juice as he was giving away the tricks of the trade.

>Delete what Kimi built this current system looks much better.

We got to work. Got the first iteration of [Slayde](https://slayde.app/) up and running in 15hrs of work and a couple of weeks thanks to an eclectic mix of Claude, Codex, Qwen and Hermes.

Side project becomes a real project overnight. Now to stop bleeding money and [market it](https://trustmrr.com/startup/slayde).

---
# Subagent dream team 


>Team of agents. Working for you 24/7. Making you millions while you sleep. -_Keep telling yourself thats the next logical step_...

I was back and forth deciding on whether the agent should delegate, have a few workspaces, threads or a new Telegram group with a bunch of agents? I chose the latter. tbh this has been more straightforward than my first month of escapades.

Openclaw [docs](https://docs.openclaw.ai) recommend separate workspaces as the best method but I liked [Shubam's method](https://x.com/Saboo_Shubham_/status/2022014147450614038) more. A team of friends characters sounded fun.

I had grand plans: Xavi as an orchestrator, Pogba as comms, Riquelme as the surgeon. That didn't quite come into fruition. Long story short - took me about 2 hours to set up the group and figure out that the claw docs were ultimately correct. 

I have since figured out the topics.

Needed to learn how to crawl first.

---
# Disbanding of the Beatles

....so it started to look like something.

`kimi-k2.5` handled the day to day the others had their own context windows/topics. `deepseek-r1` the researcher, `gemini-3.0-flash` the travel expert, the unhinged `grok4.2beta` as the 'creative' and steady `stepfun3.5` as the builder.

In hour no 12 one of these agents broke the config trying to find it's search tool.

For the 72nd time in our short history. Openclaw was broken. 

All the seperate threads moving at the same time was clogging up the system on my measly VPS. This was around the the time openclaw updates were giving a lot of issues so probably a culmination of all of that and bad luck. 

It was also around the time [Peter](https://x.com/steipete/status/2036023183351161136?s=20) was burning $15k/month of his own dime maintaining the greatest OSS to come out since Linux & very likely finalising a deal with OpenAI worth "[well under $1 billion](https://www.entrepreneur.com/business-news/coders-weekend-ai-project-sparks-a-bidding-war/502786)". Don't blame him. Now Steinberger's team is burning **$1.3 million per month in OpenAI API tokens** running ~100 Codex agents. All part of the package baby.

---
# Hermes

One thing no one tells you (common theme here) is the feeling of starting from scratch and the background tweaking needed to get these new agents with their own topics to function like how your main agent does. From what I did read it should've take about 90 days (bs). I stopped well before that after I downloaded Hermes by Nous research. The next great hope. 

**Herman** swooped into my life and took no getting used to. 

Openclaw was the best mate you shoot the shit with on weekends, mad 2am ideas, a bit of chaos, creativity **but** forget about the important dates in life. 

Hermes was Mr. Dependable with the notepad and a nice organised summery in the morning. Both are great for what they do but Hermes far easier to setup (the claw experience probably helped).

 I fed it different things. Pieter Levels and Peter Steinberger' blogs, code and transcripts pumped into Herman to hopefully boost creativity and coding with that engineer mindsets. Solid fundamentals and code-craft. - _Hermengineer_. 
 
*Doesn't mean anything unless you understand the flow of the data and clean architecture.*
 
---

# The Stack

![the_crew](/the_crew.png)

  Grafty - Organise, quick spec, day to day, Cardiff Geezer
  Herman - Builder, scripts and skills
  Spectre - Research & Comparison

The claw researcher (Spectre). I wanted a mix between curiosity Anthony Bourdain and investigative Sherlock homes with the bigger picture thinking of Professor Jiang. - More recently I've tweaked it into a forensic investigator.

Thats the stack at my fingertips. `qwen3.6-plus, mimo-v2.5pro, gpt-5.5 & deepseekv4`.

---
# Grok

When I ask Grafty to write the [Headaches](https://ibby.is-a.dev/headaches/) side of the blog I tell him to spin up a `grok4.2beta` sub-agent to do the write up. What then ensues is absolute recklessness and no house manners. You can tell its training has derived from the cesspit of X. A child raised by comment sections. Kind of functional but doesn't know when to shut up and picks fights with everyone. A coke addict investment banker. 

Although the writing was more creative than the others the execution on simple technical tasks (like pushing its own blog post live) was terrible. Unusable. It would fuck up so bad I'd end up with a blank webpage with a dark line running down it. Like it purposely did it. Leaving it's muddy shoes on and trampling all over the new rug.

![grok42](/grok42.png)

Cheeky bastard captures the dark side of the SOUL.md. 

I look forward to testing `grok4.3`.

---
# What actually changed?

Discipline. Trust boundaries. Knowledge.

The interest has always been there. Now so is the time to really burrow through the layers. Which has been fun. I haven't even started on the local experiments with distilled models and my new harness addiction.

The hobbies taking over.
