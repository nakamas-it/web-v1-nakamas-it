# Nakamas IT — Personal Website

Personal site for [Gianfranco Cisneros](https://www.linkedin.com/in/gianfranco-cisneros-barreiro/), combining a professional profile with a networking protocol educational library called **The School**.

**Live site**: https://nakamas-it.com

---

## What's Inside

### Home (`/` and `/es/`)
Bio, work experience, interests, and a contact form backed by Formspree. Available in English (`/`) and Spanish (`/es/`).

### The School (`/school/`)
A protocol library covering how networking actually works — from the physics of copper and fiber at Layer 1 up through TCP, RTP, and application-layer signalling. Each article walks through packet structure, protocol mechanics, and real-world behaviour. Articles use custom Astro components (`PacketDiagram`, `FlowDiagram`) to render packet field diagrams and message-sequence charts inline.

**Current coverage — 42 articles:**

| Layer | Articles |
|-------|----------|
| Layer 1 — Physical | Copper, Fiber, Wireless, Coaxial, Signaling & Encoding, Ethernet Standards, Cables & Connectors |
| Layer 2 — Data Link | Ethernet Frame, MAC Addressing, ARP, VLANs, STP, EtherChannel, CDP & LLDP, PPP |
| Layer 3 — Network | IPv4, DHCP, Subnetting, DNS, ICMP, Static Routing, RIP, OSPF, BGP, NAT & PAT, IGMP |
| Layer 4 — Transport | TCP, UDP, TCP vs UDP, Ports & Sockets, RTP |
| Application Layer | HTTP & HTTPS, TLS & SSL, FTP/SFTP/FTPS, SSH, SMTP, IMAP & POP3, SNMP, NTP, LDAP, RADIUS, Syslog |

---

## Stack

- **[Astro v5](https://astro.build)** — static site generator with Content Collections and built-in i18n
- **[Tailwind CSS v4](https://tailwindcss.com)** + `@tailwindcss/typography` — utility-first styling with prose support for articles
- **MDX** — protocol articles in Markdown with embedded Astro components
- **[Formspree](https://formspree.io)** — contact form (no backend required)
- **[Cloudflare](https://cloudflare.com)** — DNS, CDN, and TLS for `nakamas-it.com`
- **GitHub Actions** — automatic deploy to GitHub Pages on every push to `main`

---

## Project Structure

```
site/
  src/
    components/
      NavbarLogo.astro     ← animated SVG ship logo + wordmark
      PacketDiagram.astro  ← renders a proportional byte-field diagram
      FlowDiagram.astro    ← renders a message sequence chart
    content/
      school/
        layer1/            ← one .mdx file per protocol article
        layer2/
        layer3/
        layer4/
        application/
    content.config.ts      ← Content Collections schema (validates frontmatter)
    i18n/
      ui.ts                ← EN/ES UI string translations
    layouts/
      Layout.astro         ← shared HTML shell, sticky nav + EN/ES toggle, footer
    pages/
      index.astro                        ← home page (English, /)
      es/
        index.astro                      ← home page (Spanish, /es/)
      school/
        index.astro                      ← library index (2 cards per layer + "See all")
        [layer]/index.astro              ← layer index  e.g. /school/layer3/
        [layer]/[slug].astro             ← article page e.g. /school/layer3/dhcp/
    styles/
      global.css           ← Tailwind import + global text-align: justify
  public/
    CNAME                  ← nakamas-it.com (persists custom domain across deploys)
  .github/workflows/
    deploy.yml             ← build + deploy to GitHub Pages
  astro.config.mjs         ← site URL, base, i18n, Tailwind, MDX integrations
```

---

## Adding a Protocol Article

Create `src/content/school/<layer>/<slug>.mdx`:

```mdx
---
title: "DNS — Recursive Resolution"
layer: "layer3"
protocol: "dns"
summary: "How a resolver walks the DNS hierarchy to turn a hostname into an IP."
tags: ["dns", "udp", "layer3"]
order: 4
draft: false
---

import PacketDiagram from '../../../components/PacketDiagram.astro';
import FlowDiagram from '../../../components/FlowDiagram.astro';

## Overview
...
```

The page is live at `/school/layer3/dns/` automatically — no routing changes needed.
Set `draft: true` to keep an article out of the production build while writing.

**Valid `layer` values:** `layer1`, `layer2`, `layer3`, `layer4`, `application`

**Article structure convention:**
1. Overview — what the protocol does and why it exists
2. Packet format — `PacketDiagram` for field-level breakdown
3. Protocol flow — `FlowDiagram` for message sequences
4. Key concepts — nuances, edge cases, security implications
5. References — RFCs and further reading

---

## Dev Commands

> **WSL2 / nvm note:** Load Node before running npm commands:
> ```bash
> export NVM_DIR="$HOME/.nvm" && \. "$NVM_DIR/nvm.sh"
> ```

Run from `site/`:

| Command | Action |
|---------|--------|
| `npm run dev` | Dev server at `localhost:4321` (hot reload) |
| `npm run build` | Production build → `./dist/` |
| `npm run preview` | Preview production build locally |

---

## Deploying

Push to `main` — GitHub Actions builds and deploys automatically:

```bash
git add .
git commit -m "Short description of what changed"
git push
```

Use `git revert HEAD` (not `git reset --hard`) to undo a deploy while keeping history intact.
