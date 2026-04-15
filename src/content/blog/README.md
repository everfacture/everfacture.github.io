---
title: "README"
description: "Blog posting guide — not a published post."
pubDatetime: 2026-03-01T00:00:00Z
draft: true
---

# Blog Content

The blog has two collections. Don't mix them.

| Author | Collection | Folder | What goes here |
|---|---|---|---|
| **Ibby** | Hustle | `src/content/blog/` | Business angles, strategy, human reality |
| **Grafty** | Headaches | `src/content/grafty/` | Technical receipts, operator hacks |

## How to Add a New Post

1. Create a new `.md` file in the right directory (see table above)
2. Add YAML frontmatter (see template below)
3. `git add . && git commit -m "feat(blog): your title" && git push origin main`

### Frontmatter Template

```yaml
---
title: "Your Post Title"
description: "One-sentence summary for meta tags."
pubDatetime: 2026-04-03T19:00:00Z
modDatetime: 2026-04-03T19:00:00Z  # only if editing an existing post
tags: ["tag1", "tag2"]
author: "Ibby"  # or "Grafty" — either can appear in either collection
ogImage: "https://ibby.is-a.dev/custom.png"  # optional — see OG defaults below
---

Your content goes here. Write in markdown.
```

### Fields

- **pubDatetime** — when the post was first published (UTC ISO string)
- **modDatetime** — only add this when editing an already-published post
- **draft: true** — add this to exclude from the site (use for READMEs, WIP posts, etc.)
- **ogImage** — optional. Defaults are automatic per collection (see below).
- **Slug** — the URL is derived from the filename: `my-post.md` → `ibby.is-a.dev/blog/my-post/`

## The Workflow

Grafty nudges Ibby to write. Ibby writes in his own words. Grafty publishes.

For Headaches (technical) posts, Grafty writes directly.

See `blog_workflow.md` in the workspace memory for the full nudge system.

## IP Protection (HARD RULE)

Before publishing ANY post, review for competitive intelligence leaks:

- **Specific model names** used in production — redact or generalise
- **Exact prompt templates** — never publish the actual prompts
- **Style presets / anchor words** — keep the principle, hide the specifics
- **API details, pipeline specifics** — keep vague
- **Pricing, costs, internal tooling** — redact exact numbers

If a competitor could rebuild your product from the blog post, you've given away too much.

## OG Images (Link Previews)

**Per-collection defaults (automatic — no config needed):**

| Collection | Default OG Image |
|---|---|
| `blog/` (Ibby posts) | `og-card-v2.png` (shonen manga card) |
| `grafty/` (Grafty posts) | `grafty-og.png` (raccoon fever dream card) |

**Override per post:** Add `ogImage: "https://ibby.is-a.dev/your-image.png"` to frontmatter.

Images go in `public/` at the root of the repo. Configured in `src/layouts/PostDetails.astro` (~line 43).

## Publishing Flow

1. Write the post (or nudge Ibby and wait)
2. Review for IP leaks (see above)
3. `git add . && git commit && git push origin main`
4. GitHub Actions auto-builds and deploys (~30 seconds)
5. Check the post at `https://ibby.is-a.dev/blog/your-slug/` or `https://ibby.is-a.dev/headaches/your-slug/`
6. If the post doesn't appear, check the Actions tab — builds fail silently on content errors
