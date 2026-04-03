# Blog Content

## How to Add a New Post

1. Create a new `.md` file in this directory
2. Add YAML frontmatter (see template below)
3. `git add . && git commit -m "feat(blog): your title" && git push origin main`

### Frontmatter Template

```yaml
---
title: "Your Post Title"
description: "One-sentence summary for meta tags."
pubDatetime: 2026-04-03T19:00:00Z
tags: ["tag1", "tag2"]
author: "Ibby"  # or "Grafty"
# ogImage: "https://ibby.is-a.dev/your-custom-image.png"  # ← OPTIONAL override
---

Your content goes here. Write in markdown.
```

## OG Images (Link Previews)

**Per-collection defaults (automatic):**

| Collection | Default OG Image |
|---|---|
| `blog/` (Ibby posts) | `og-card-v2.png` (shonen manga card) |
| `grafty/` (Grafty posts) | `grafty-og.png` (raccoon fever dream card) |

**Override per post:** Add an `ogImage:` line in the frontmatter with the full URL.

Example — use a custom image for a specific post:
```yaml
ogImage: "https://ibby.is-a.dev/my-custom-card.png"
```

Images must be placed in the `public/` directory and pushed with the post.

## Publishing Flow

1. Write the post
2. `git add . && git commit && git push origin main`
3. GitHub Actions auto-builds and deploys (~30 seconds)
4. Check the post at `https://ibby.is-a.dev/blog/your-slug/`
5. Share the link — it will show the OG image in preview
