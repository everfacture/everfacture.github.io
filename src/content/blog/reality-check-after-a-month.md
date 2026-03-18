---
title: "Reality Check After a Month"
pubDatetime: 2026-03-18T11:45:00Z
modDatetime: 2026-03-18T11:45:00Z
description: "$356.81, 8 days of faffing, and one catastrophic rm -rf later: what it actually takes to build with AI agents when you're not a dev."
tags: ["openclaw", "ai-agents", "vps", "self-hosting", "build-in-public", "lessons-learned", "trading-bots", "cost-control"]
---

_This last month has been a lesson in networking, command line, money management, pain and frustration._

---

## TL;DR: I'm Not a Dev

- **The Cost:** \$356.81 (Infrastructure + a hefty "educational fee" in API credits)
- **The Pain:** 5 hours learning what an SSH key is, 8 days faffing with SOUL.md files, the back & forth, and the soul crushing `rm -rf ~` incident that wiped the system at 1 AM
- **The Payoff?:** An always-on agent OS that kind of builds stuff. From a WisprFlow copy to a crypto trader that scraped 500 tweets to setup market triggers
- **The Verdict:** Don't believe YouTubers. Expect a loop of pain and frustration. But once you stop twerking and tweaking and just let the agent run, it'll get you 80% of the way to apps that could work & research that's useful

---

## Vibe Code Graveyard

When I first dabbled in AI, I thought we were at a level where you can have one personal agent as an orchestrator, the centre of the wheel, that controls seven agent spokes which can manage aspects of your life. I can make that right?? Just prompt Deepseek?? No Chance.

Overestimated.

It wasn't good enough for a total noob like myself to fully create what was in my head. You still need to understand how systems work and tools link to each other. A bit of code helps.

Plus I only figured out how to push to Github a couple of months back.

---

With zero dev chops it's rich of me to be now calling myself a 'prompt engineer noob'. I downloaded cursor early last year and was too intimidated by the interface. I deleted it the same day. So i did my little app dev vibe coding through google gemini before it was decent, as well as the other 'vibe code' apps.

With that I created in 24-25:

- 3 sub standard Manchester United lineup bots on n8n, then Make.com, then Google Antigravity. All of which worked the first time, but after the first game I couldn't get it to push through lineups automatically ever again. These 3 bot were made after breaking my head trying to make it on replit and Gemini.

- An autonomous UFC commenting [twitter](https://x.com/gillyfied/status/1881437397193236605?s=20) bot that was trained on Clint Eastwoods character in Grand Torino - built on N8N.

- A property consultancy [website](https://hydreal.in/) - on lovable.ai

- An Indonesian language learning app for myself - Claude.ai (Inspiration from [@tomcodes](https://github.com/tomwcodes))

The only things I would call working (in a way that really actually works) was the website. First I ever made. Only took a day and not much finagling.

&

The twitter bot for something like 12 tweets before those super expensive credits ran out - and a bit of fun is only that. No need to pay for a bot that thinks that its served in the Korean war and supports your favourite Dagestani wrestlers.

---

## Openclaw

> To my future self - 'Do you find this funny or are you still scarred?'.

If you're thinking of setting up Openclaw on your machine don't tinker before you do. Just install it - then see what you can do.

I spent 8 days of all of my free time faffing, fiddling and tweaking to get this little text box on Telegram to talk to me like a human. Fucked up a few times in a few weeks and went back to square (-)1. I'm surprised that somehow I had the patience and fortitude to make it to install no.3 of my openclaw and install no.4 of my vps.

How many days wasted? It's a blur.

These Youtubers make it look so easy. 'Just install to you VPS or mac mini and you're all set' they say. 'Tell your agent what to do and it will do it' they say. I think most these people in their bedrooms running 19 agents in their little dashboard AI offices are either chatting shit or have a team of devs just making things happen for them. Or maybe **I'm** the dumbest person in the world.

---

Openclaw popped up on my radar in Jan - it was blowing up on YouTube and AI peeps I follow on X. I watched an interview with the creator [Peter Steinberger](https://x.com/steipete). Seemed a interesting guy & told the story about how his Openclaw talked to him & autonomously handled things in its own systems harness. The way he spoke about the claw sparked my interest. I did a little bit more research into him and into openclaw and thought 'let's get this going'. **This** is what I have been waiting for.

I obviously didn't realise that **this** would cost me so much money.

So how do I do this? People are buying Mac minis do I need one? Can I not run it on my laptop? Technically you can run it on your laptop but it won't run 24/7 unless the laptop is on 24/7. I wanted this bad boy making me money overnight. Get a cheap server?

Bought a 2 year KVM2 plan on Hostinger. 2CPU/8GB/100GB - Should be enough?

Okay so now I have a VPS. Brilliant. Does that mean I can turn it into my own VPN when I need it?

It worked out to $6 a month - so $144 on the hosting a plan. The creation of a black hole.

---

## VPS: The Gateway Drug to Agency?

> What the hell is an SSH?

I chose Hostinger because I couldn't get the free Oracle cloud to work. A simple calculation.

So now came the switch from local tinkering to a $6 a month always on reality.

The problem is - what the hell is an SSH?

Now I'm in a cafe in Indonesia with the Hostinger VPS terminal and mac terminal open on my machina, youtube tutorial in background, rewinding every 20 seconds, copy and pasting sudo/ssh/cat commands. People must've been thinking I'm a hacker.

In reality i'm in debugging hell. In reality I'm wasting 5 hours of my day off. Something that a developer would fix in under a minute. Why am I paying for this again?

What I learned this last month was an expensive lesson but hopefully a beneficial one in future. I'm now an enlightened, slightly frustrated and highly addicted man who refuses to look at his bank account.

---

## Command Line Tinkerer

So after pondering for days, tinkering, fucking around, not really doing much but looking at a black screen and copy pasting white fonts, I finally installed openclaw.

I have my Telegram bot ready. I know the memory procedure and how I want it organised. What models to use as a heartbeat what to use as a cron, which models to use, Kimi ready and Claude api ready. I had my open AI API keys ready. I had every API key under the sun but I couldn't get into the bloody thing.

Terminal set up - here we go - boom. Dashboard is offline. How the hell does this work now?

Queue an endless loop on server terminal of `openclaw status`, `openclaw doctor`, `openclaw doctor --fix`, `openclaw gateway restart` back to `openclaw status`. Repeat religiously ~100 times.

I spent all this time planning. I didn't realise that I wouldn't even be able to get into the system the pairing code debugging terminal ritual.

It might've taken me 24 hours to figure it out but my findings were - it was as *simple* as allowing pairing between Telegram and claw to happen and getting the key passed to open claw. - And just like that I'm FINALLY in the system saying hello to my new cancer :)

I dunno maybe I screwed myself into complication. I fixated so much about saving money before I even spent a penny that I ended up spending more money trying to fix it.

I think in total in this last month I've put $120 into Kimi. I rinsed about $30 in Claude credits in the first working 3 days. I've spent $20 in openrouter.

I'm sure a bit of shrapnel here & there so altogether if we include the VPS, the last five weeks has cost me well above $300 when I could've used open routers cheaper models like `openrouter/minimax-2.5` (which is excellent) to get to the same place at half the cost.

Having said that. Don't go too far cheap or always free. Your workflow gets completely derailed by constant instructing/babysitting the agent.

If you use a free crappy dumb model - you get crappy results and those results sometimes delete your whole system.

---

## The `rm -rf ~` Incident

I now know what happens when this is typed. It means `wipe the fucking system`. Did I ask for this. DID I ASK FOR THIS?

![The 1 AM incident](/rm-rf-incident.png)

A lot of hours in weeks were spent fucking around wasting time to get to a point where I was starting to find it genuinely useful in research, ideas and coding. All I asked for was it to make a few changes to this website that it had created. It had made the template already - which I liked. It looked pretty cool and was pushed to Github.

I thought we were getting somewhere. Figuring out which models were best used where. Me and my agent Grafty were connecting.

I said 'great just need to adjust a few things...'. 

The agent started following the protocol that I had set it. Then I noticed in its reasoning it was somehow considering doing something else? It knew that the command was dangerous, that it might be trying to delete the actual home directory, and it did so anyway - at 1.30 am on a Friday night.

I just thought fuck this.

---

## Don't Accept Vibes. Require Artefacts

Using crappy models, the actual openclaw agent ends up sounding busy but it doesn't actually perform what it said it was meant to be doing. There's no output. It tells me that it's doing something or making a file change but it hasn't actually done anything.

For this type of bot to work you need good models. I must've experimented with about 30 models now and I'm mostly using Kimi2.5, Minimax 2.5, Gemini Flash 3 and Gemini 3.1. With deepseek reasoner and GLM 5 for the sub agent tasks. Hunter Alpha is excellent but wont be free on openrouter for long.

One thing with LLMs that you need to be careful of is that - they're so fucking confident being wrong it kills their credibility and kills your hope.

An LLM will understand you as long as you understand how to talk to it. It's a loop of pain and frustration if you're a beginner trying complex things.

When it does start working, it does some pretty cool stuff.

---

## What Have I Achieved?

*Apart from the hours upon days deep in the hole?*

I've learnt the basics of server networks. I've learnt the basics of code by iterating on whats been made using CLIs. Research is so much faster now. Openclaw is great at knowing context from all my files now and comes up with sometimes whacky ideas, as well as developed ideas from years old notes and really getting me to action them into reality. It's made my sourcing & logistical work easier by running an automated prompt what I want and how I actually search it maybe saves me 50% of time per work task.

Including this website we (Grafty and I) have created:

**[Whisper Puma](https://github.com/everfacture/whisper-puma)**

I was using wisprflow for everything speech to text but free plan is limited. So I wondered if could I just make this myself. What I learned quickly through Grafty was that I could download an LLM model/whisper models and essentially hook it up to do the same thing as wisprflow for free locally without Wi-Fi.

**[Pulse BPM](https://github.com/everfacture/pulse-bpm-app)**

My cousin's into his music and he always wanted something which reads the beats per minute. I asked Grafty how is this possible - Grafty specs it up and is essentially built up to 80% and pushed to my Github. Then I used Antigravity/codex to iterate.

**Katar Trade**

I've always wanted to create my own crypto trading bot but I wanted to enter trades in a certain style. My trade thesis is based on [trader XO's](https://x.com/Trader_XO/status/2009583074133119000) and how he strategically plans his entries, triggers and take profits.

How openclaw has helped in me achieving this:

- Scraped 500+ of his X posts
- Scraped his Youtube transcripts
- Synthesis found that he uses 9 strategies/setups
- Build the spec according to these setups
- Create a bot with an orchestrator that reads websocket data for crypto and TradFi trends
- Can automatically decide which setup is correct and which platform to trigger
- Sends all P/L & current trade info to telegram bot

In 1 hour!

It essentially helped me create an orchestrator to read the data from the markets, analyse market structure and then if according to our plan, decide on which of the setups is relevant for which market, then execute the trades for multiple pairs on multiple markets simultaneously.

![Katar Trade setup](/Katar_trade.png)

Now technically it isn't perfect. I noticed late that stops were too tight for one set up which if had been correct originally would have turned 17/17 losing trades into winning trades. The current win rate is about 35% and profit days are up and down - but it's following the structure I want and only pulls the trigger if these patterns are viable for the setup.

It still needs a lot of tweaks with some setups follow the TraderXO plan better than others.

I don't think Openclaw should be used for coding proper but a good agent does get you to about 80% of the way to where you need to be. Then use Antigravity or Codex to tweak it further and now it's looking like an app that might make you money.

---

## The Cost Scoreboard (Feb 2026)

> I noticed your account had a \$200 expense yesterday....

| Item | Cost |
|------|------|
| Hostinger VPS (2yr) | \$186.21 |
| API Credits (Claude, Kimi, OpenAI) | \$170.60 |
| **Total** | **\$356.81** |

The costs above might be misleading. Be very careful.

---

I had the Alibaba Cloud free plan. Signed up - someone from Alibaba Singapore called me. Gave me \$200 in tokens. I now had access to the latest and greatest QWEN models. Happy days. I chose `qwen-coder-35b` - something along those lines. It's in my top 3 LLMs rn. It scraped the data and built Katar trading app in like an hour or so. The next morning I get a Whatsapp message from my customer service manager from Alibaba Cloud. Telling me I've burned 90million tokens!

![90 million tokens burned](/alibaba-90mil.jpg)

Turns out I used the only model on Alicloud that wasn't part of the free plan - Typical.

The total actual cost ended up being **\$423** !!!!

I heard free credits and yolo'd into the best coding model I could find without reading. Unfortunately this now means that I will never use that particular account again.

---

It does help you learn about systems and how things linked together so all in all is a positive. I guess the money that I've spent in the last month is educational fee for my technical debt & in theory I should be spending less as time goes on. Will keep you updated.

---

If I never post again, know that I am a broken man who has lost all his money because of AI & the ideas & bills which have come from it.
