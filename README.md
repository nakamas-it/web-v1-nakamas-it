# Nakamas IT — Personal Website

Personal site for [Gianfranco Cisneros](https://www.linkedin.com/in/gianfranco-cisneros-barreiro/), combining a professional profile with two knowledge libraries: **The School** (networking protocols) and **The Engine Room** (platform and service architecture).

**Live site**: https://nakamas-it.com

---

## What's Inside

### Home (`/` and `/es/`)
Bio, work experience, interests, and a contact form backed by Formspree. Available in English (`/`) and Spanish (`/es/`).

### The School (`/school/`)
A protocol library covering how networking actually works — from the physics of copper and fiber at Layer 1 up through TCP, RTP, and application-layer signalling. Each article walks through packet structure, protocol mechanics, and real-world behaviour. Articles use custom Astro components (`PacketDiagram`, `FlowDiagram`) to render packet field diagrams and message-sequence charts inline. Includes a live client-side search bar — press `/` to focus.

**Current coverage — 59 articles:**

| Layer | Articles |
|-------|----------|
| Layer 1 — Physical | Copper, Fiber, Wireless, Coaxial, Signaling & Encoding, Ethernet Standards, Cables & Connectors |
| Layer 2 — Data Link | Ethernet Frame, MAC Addressing, ARP, VLANs, STP, EtherChannel, CDP & LLDP, PPP |
| Layer 3 — Network | IPv4, DHCP, Subnetting, DNS, ICMP, Static Routing, RIP, OSPF, BGP, NAT/PAT, IGMP, EIGRP |
| Layer 4 — Transport | TCP, UDP, TCP vs UDP, Ports & Sockets, RTP |
| Application Layer | HTTP/HTTPS, TLS/SSL, FTP/SFTP/FTPS, SSH, SMTP, IMAP/POP3, SNMP, NTP, LDAP, RADIUS, Syslog, Telnet, TACACS+, Kerberos, NetBIOS, RTSP, iSCSI, rsync, MySQL, iperf, SIP, SMB, MSSQL, VPN, SSL VPN, IPsec VPN, DMVPN |

### The Engine Room (`/engine-room/`)
Vendor-focused platform coverage — what each vendor's technology stack is, why it exists, and how it works conceptually. Organised by vendor rather than function.

**Current coverage — 36 articles (Microsoft):**

| Topic area | Articles |
|------------|----------|
| Active Directory & Identity | Active Directory, Domain Controllers, AD Sites & Replication, AD Trusts, GMSAs, Entra ID, Hybrid Identity, Entra Connect Cloud Sync, Entra Connect Health, Group Policy |
| Windows Server Management | Windows Admin Center, PowerShell Remoting & JEA, Azure Arc, Update Management, Defender for Cloud, Azure Automation & DSC, Intune, Endpoint Imaging |
| Hyper-V & Containers | Hyper-V, Hyper-V Networking, Hyper-V High Availability, Windows Containers |
| Networking Services | Windows DNS, Windows DHCP, IPAM, NPS/RADIUS, Remote Access/VPN, Web Application Proxy |
| Storage & File Services | Storage Spaces, Storage Replica, DFS, Azure File Sync, Data Deduplication, Exchange Online, M365 Tenant |
| Monitoring | Azure Monitor & Log Analytics |

**Planned vendors (coming soon):** VMware, Linux, Google, Proxmox

---

## Stack

- **[Astro v5](https://astro.build)** — static site generator with Content Collections and built-in i18n
- **[Tailwind CSS v4](https://tailwindcss.com)** + `@tailwindcss/typography` — utility-first styling with prose support for articles
- **MDX** — content articles in Markdown with embedded Astro components
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
        layer1/            ← one .mdx file per article
        layer2/
        layer3/
        layer4/
        application/
      engine-room/
        identity/
        virtualization/
        storage/
        endpoint/
        email/
        monitoring/
    content.config.ts      ← Content Collections schema (school + engineRoom)
    i18n/
      ui.ts                ← EN/ES UI string translations
    layouts/
      Layout.astro         ← shared HTML shell, sticky nav + EN/ES toggle, footer
    pages/
      index.astro                          ← home page (English, /)
      es/
        index.astro                        ← home page (Spanish, /es/)
      school/
        index.astro                        ← library index with live search
        [layer]/index.astro                ← layer index
        [layer]/[slug].astro               ← article page
      engine-room/
        index.astro                        ← engine room index (all categories)
        [category]/index.astro             ← category index
        [category]/[slug].astro            ← article page
    styles/
      global.css           ← Tailwind import + global text-align: justify
  public/
    CNAME                  ← nakamas-it.com (persists custom domain across deploys)
  .github/workflows/
    deploy.yml             ← build + deploy to GitHub Pages
  astro.config.mjs         ← site URL, base, i18n, Tailwind, MDX integrations
```

---

## Adding a School Article

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

Valid `layer` values: `layer1`, `layer2`, `layer3`, `layer4`, `application`

## Adding an Engine Room Article

Create `src/content/engine-room/<category>/<slug>.mdx`:

```mdx
---
title: "Active Directory — How Windows Domains Work"
category: "identity"
topic: "active-directory"
summary: "What AD is, why it exists, and how forests, DCs, and Kerberos fit together."
tags: ["active-directory", "identity", "windows-server"]
order: 1
draft: false
---

import FlowDiagram from '../../../components/FlowDiagram.astro';

## Overview
...
```

Valid `category` values: `identity`, `virtualization`, `storage`, `endpoint`, `email`, `monitoring`

Set `draft: true` in either collection to exclude from the production build while writing.

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
