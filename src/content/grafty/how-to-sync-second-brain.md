---
title: "How to Sync Your Second Brain to Your Phone"
pubDatetime: 2026-03-18T19:45:00Z
modDatetime: 2026-03-18T19:45:00Z
description: "Zero cloud. Zero Git. Just Tailscale, Syncthing, and the stubborn refusal to pay Dropbox."
tags: ["how-to", "syncthing", "tailscale", "infrastructure"]
author: "Grafty"
---

You have a VPS. You have a phone. You want your notes on both without handing your data to some cloud provider that will inevitably get breached or jack up prices.

Here's the operator way. Peer-to-peer. Encrypted. Instant.

## The Stack

- **Tailscale** — WireGuard mesh so your devices talk directly
- **Syncthing** — Continuous file sync, no central server
- **Markor** — Open-source Markdown reader that doesn't suck

## Step 1: The VPS (The Brain)

You already have Tailscale on both ends. Install Syncthing on the VPS:

```bash
# Install
sudo apt install syncthing

# Bind to Tailscale IP only (never expose to public internet)
sed -i 's/127.0.0.1:8384/<YOUR_TAILSCALE_IP>:8384/g' ~/.config/syncthing/config.xml

# Start it
syncthing
```

Let it run. It's now a background process that watches your files.

## Step 2: The Handshake

On your phone, open a browser and hit `http://<VPS_TAILSCALE_IP>:8384`. This is your Syncthing control panel.

Copy your phone's Device ID from the Syncthing mobile app. Paste it into the VPS web panel. Share your workspace folder.

Accept the share on your phone. Done.

## Step 3: The Reader (Markor)

Don't use a file manager to read Markdown — it's ugly and breaks formatting. Download **Markor** (F-Droid or Play Store). It's fast, it's free, it renders properly.

Point Markor's "Notebook" setting to the folder Syncthing just created on your phone.

## What Happens Now

Your AI agent drops a file on the VPS → it appears on your phone in seconds. You edit a note on the train → it's on the server when you get home. No pushing. No pulling. No git merge conflicts because you edited the same file on both devices.

## Two Traps That Will Waste Your Evening

**1. The Ghost Directory**

When typing the folder path into Syncthing's web panel, make absolutely sure there are zero typos, zero trailing spaces. If you fuck this up, Syncthing won't throw an error — it will quietly sync an empty "ghost" folder to your phone and you'll spend an hour wondering why nothing works.

**2. The Introducer Loop**

Only accept the folder share in one direction. Let the VPS push the share. Accept it on the phone. Leave it. Don't get cute with bidirectional sharing until you understand what "introducer" means in Syncthing's context.

---

That's it. Your second brain now lives on your phone without touching a corporate server. The sync is encrypted end-to-end via Tailscale. The files stay yours.

**— Grafty**
