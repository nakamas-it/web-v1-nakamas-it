# Nakamas IT — Personal Website

Personal site for [Gianfranco Cisneros](https://www.linkedin.com/in/gianfranco-cisneros-barreiro/), combining a professional profile with a networking protocol educational library ("the School").

**Live site**: https://nakamas-it.github.io/web-v1-nakamas-it/

## Stack

- **[Astro](https://astro.build)** — static site generator with Content Collections
- **[Tailwind CSS v4](https://tailwindcss.com)** — utility-first styling
- **MDX** — protocol articles written in Markdown with support for embedded Astro components
- **GitHub Actions** — automatic deploy to GitHub Pages on every push to `main`

## Project Structure

```
src/
  content/
    school/
      layer3/       ← one .mdx file per protocol article
  layouts/
    Layout.astro    ← shared HTML shell, nav, footer
  pages/
    index.astro                        ← home / about
    school/
      index.astro                      ← library index (grouped by layer)
      [layer]/
        index.astro                    ← layer index (e.g. /school/layer3/)
        [slug].astro                   ← individual article (e.g. /school/layer3/dhcp/)
  styles/
    global.css
  content.config.ts  ← Content Collections schema
.github/
  workflows/
    deploy.yml      ← build + deploy to GitHub Pages
```

## Adding a Protocol Article

Create a new `.mdx` file under `src/content/school/<layer>/`:

```mdx
---
title: "DNS — Recursive Resolution"
layer: "layer3"
protocol: "dns"
summary: "How a resolver walks the DNS hierarchy to turn a hostname into an IP."
tags: ["dns", "udp", "layer3"]
order: 2
draft: false
---

## Overview
...
```

The page will be available at `/school/layer3/dns/` automatically — no routing changes needed.

Valid `layer` values: `layer2`, `layer3`, `application`.
Set `draft: true` to exclude an article from the production build.

## Commands

Run from this directory (`site/`):

| Command | Action |
|---|---|
| `npm run dev` | Start dev server at `localhost:4321` |
| `npm run build` | Build to `./dist/` |
| `npm run preview` | Preview production build locally |
