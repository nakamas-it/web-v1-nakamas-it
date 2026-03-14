# Nakamas IT — Personal Website

Personal site for [Gianfranco Cisneros](https://www.linkedin.com/in/gianfranco-cisneros-barreiro/), combining a professional profile with two knowledge libraries: **The School** (networking protocols) and **The Engine Room** (platform and service architecture).

**Live site**: https://nakamas-it.com

---

## What's Inside

### Home (`/` and `/es/`)
Bio, work experience, interests, and a contact form backed by Formspree. Available in English (`/`) and Spanish (`/es/`).

### The School (`/school/`)
A protocol library covering how networking actually works — from the physics of copper and fiber at Layer 1 up through TCP, RTP, and application-layer signalling. Each article walks through packet structure, protocol mechanics, and real-world behaviour. Articles use custom Astro components (`PacketDiagram`, `FlowDiagram`) to render packet field diagrams and message-sequence charts inline. Includes a live client-side search bar — press `/` to focus.

**Current coverage — 67 articles:**

| Layer | Articles |
|-------|----------|
| Layer 1 — Physical | Copper, Fiber, Wireless, Coaxial, Signaling & Encoding, Ethernet Standards, Cables & Connectors |
| Layer 2 — Data Link | Ethernet Frame, MAC Addressing, ARP, VLANs, STP, EtherChannel, CDP & LLDP, PPP, 802.11 MAC, WPA2/WPA3, VXLAN |
| Layer 3 — Network | IPv4, DHCP, Subnetting, DNS, ICMP, Static Routing, RIP, OSPF, BGP, NAT/PAT, IGMP, EIGRP, IPv6 Fundamentals, IPv6 Addressing, IPv6 Routing, FHRP, DSCP/DiffServ |
| Layer 4 — Transport | TCP, UDP, TCP vs UDP, Ports & Sockets, RTP |
| Application Layer | HTTP/HTTPS, TLS/SSL, FTP/SFTP/FTPS, SSH, SMTP, IMAP/POP3, SNMP, NTP, LDAP, RADIUS, Syslog, Telnet, TACACS+, Kerberos, NetBIOS, RTSP, iSCSI, rsync, MySQL, iperf, SIP, SMB, MSSQL, VPN, SSL VPN, IPsec VPN, DMVPN |

### The Engine Room (`/engine-room/`)
Vendor-focused platform coverage — what each vendor's technology stack is, why it exists, and how it works conceptually. Organised by vendor rather than function.

**Current coverage — 177 articles across 6 vendors:**

#### Microsoft (91 articles)

| Topic area | Articles |
|------------|----------|
| Active Directory & Identity | Active Directory, Domain Controllers, AD Sites & Replication, AD Trusts, GMSAs, Entra ID, Hybrid Identity, Entra Connect Cloud Sync, Entra Connect Health, Group Policy |
| Windows Server Management | Windows Admin Center, PowerShell Remoting & JEA, Azure Arc, Update Management, Defender for Cloud, Azure Automation & DSC, Intune, Endpoint Imaging |
| Hyper-V & Containers | Hyper-V, Hyper-V Networking, Hyper-V High Availability, Windows Containers |
| Networking Services | Windows DNS, Windows DHCP, IPAM, NPS/RADIUS, Remote Access/VPN, Web Application Proxy |
| Storage & File Services | Storage Spaces, Storage Replica, DFS, Azure File Sync, Data Deduplication, Exchange Online, M365 Tenant |
| Monitoring | Azure Monitor & Log Analytics |
| M365 Administration | M365 DNS & Domains, M365 Admin Roles, Privileged Identity Management, Administrative Units, Conditional Access, MFA & SSPR, Identity Protection, Entra Password Protection, Microsoft Defender XDR, Microsoft Purview |
| Modern Endpoint Management | Windows Autopilot, Windows Update for Business, Intune Enrollment, Intune Compliance, Intune App Deployment, Defender Antivirus, BitLocker, Windows Hello for Business, Defender for Endpoint, Endpoint Analytics |
| Azure Governance & Storage | Subscriptions & Governance, RBAC, Azure Policy, Storage Accounts, Blob Storage, Azure Files, Storage Security |
| Azure Compute | Virtual Machines, VM Scale Sets, Container Instances & ACR, App Service |
| Azure Networking | Virtual Networks, Network Security (NSGs & Firewall), Azure DNS, Load Balancing, VPN Gateway & ExpressRoute |
| Azure Monitoring & DR | Azure Monitor, Application Insights, Network Watcher, Azure Backup & Site Recovery |
| Windows Client Deployment | Windows Deployment & Activation, Windows Imaging & DISM, Local Accounts & UAC, Device Join Models, NTFS Permissions |
| Windows Client Security | EFS, Windows Networking, Wireless Networking, Remote Access & VPN, Windows Defender Firewall |
| Windows Client Management | Group Policy (Client), Windows Recovery Environment, Windows Update (Client), Performance Monitoring, AppLocker |

#### VMware (20 articles)

| Topic area | Articles |
|------------|----------|
| vSphere Core | vSphere Overview, vCenter Server, ESXi Host |
| Networking & Storage | vSphere Networking, vSphere Storage |
| Availability | vSAN, vSphere HA, DRS, vMotion & Storage vMotion, Fault Tolerance |
| Security | vSphere Security, VM Encryption |
| VM Management | Virtual Machines, Resource Management, Content Library |
| Operations | Lifecycle Manager, vCenter Backup & Restore, Monitoring & Alarms, Replication & SRM, VMware Cloud Foundation |

#### Linux — RHEL 9 (15 articles)

| Topic area | Articles |
|------------|----------|
| Foundations | RHEL Overview, Command Line, File System Hierarchy, Text Processing & Redirection, Users & Groups |
| System Administration | File Permissions, Processes, systemd, SSH, Logging |
| Networking & Storage | Networking Configuration, Archiving & Transfer, Package Management (DNF), Storage & Filesystems |
| Support | Cockpit & System Support |

#### Google Cloud Platform (18 articles)

| Topic area | Articles |
|------------|----------|
| Foundations | Resource Hierarchy, IAM |
| Compute | Compute Engine, GKE, Serverless |
| Storage & Data | Cloud Storage, Managed SQL, NoSQL & Big Data, BigQuery |
| Networking | VPC Networking, Load Balancing & CDN, Hybrid Connectivity |
| Security & Operations | Security & Compliance, Cloud Monitoring & Operations |
| Advanced | Data Analytics & Pipelines, Migration to GCP, Reliability & Cost Optimisation, Anthos & Hybrid Cloud |

#### Proxmox VE (15 articles)

| Topic area | Articles |
|------------|----------|
| Foundations | Overview, Installation, Clustering |
| Networking & Security | Networking, Firewall |
| Storage | Storage Backends, ZFS, Ceph |
| Virtualisation | KVM Virtual Machines, LXC Containers |
| Operations | High Availability, Backup & Restore, VM Advanced Features, Monitoring & Maintenance, Templates & Snapshots |

#### Cisco (18 articles)

| Topic area | Articles |
|------------|----------|
| IOS Foundations | IOS CLI, Switch Configuration, STP Configuration, Router Configuration, ROAS & L3 Switching, OSPF Configuration |
| Advanced Features | IPv6 Configuration, ACL Configuration, Switch Security, FHRP Configuration, Wireless & WLC, QoS Configuration |
| Platform & Security | Smart Licensing, FTD & FMC Overview, Firepower Policies, FTD VPN, SD-Access, Network Automation |

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

Valid `category` values: `identity`, `virtualization`, `storage`, `endpoint`, `email`, `monitoring`, `cisco`

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
