# ChainSys India — Corporate Website

A multi-page marketing site for Chain-Sys India Pvt Ltd, styled to match chainsys.ai (corporate blue/white enterprise SaaS look), with a working enquiry form backed by Lovable Cloud.

## Pages

- **Home (`/`)** — hero ("Unlock value from your data"), the six value pillars (Enterprise Data Management, Integration & Migration, Data Quality & Governance, Catalog & Lineage for Compliance, Data Archival, AI/ML-powered Insights), a Smart Data Platform overview, partner strip (Oracle, SAP, Salesforce), and a CTA to Contact.
- **Solutions (`/solutions`)** — each of the six capability areas expanded into a section with outcomes and use cases.
- **Products (`/products`)** — Smart Data Platform intro plus three product cards: dataZap (migration, integration, reconciliation), dataZen (MDM, data quality governance), dataZense (analytics, visualization, cataloging).
- **About (`/about`)** — founded 1998, HQ Rocklin California, global offices (Michigan, Chennai), partnership ecosystem, India presence.
- **Contact (`/contact`)** — enquiry form, phone 044 3054 4100, full Chennai address, embedded Google Map of the Ayanambakkam office, link to chainsys.ai.

Shared header with nav + footer (address, phone, links) in the root layout. Mobile nav included.

## Enquiry form

Fields: name, work email, company, phone (optional), interest (dropdown of the six areas), message. Submissions are stored in Lovable Cloud so you can review them later; the user sees a success confirmation. Validation on both the form and the server (required fields, valid email, length limits). Spam-resistant: no public read access to submissions.

## Design

Corporate enterprise look aligned with chainsys.ai: deep corporate blue primary with a lighter accent, white/very light neutral backgrounds, generous whitespace, clean sans-serif type, subtle card shadows, restrained motion. All colors defined as design tokens (light + dark safe) rather than hardcoded classes.

Imagery: generated abstract data/enterprise visuals for the hero and product sections.

## Technical notes

- TanStack Start file routes: `index.tsx`, `solutions.tsx`, `products.tsx`, `about.tsx`, `contact.tsx`; header/footer chrome in `__root.tsx`.
- Per-page `head()` metadata (unique title, description, og/twitter tags) plus LocalBusiness JSON-LD on Contact for local SEO.
- Lovable Cloud enabled for the form: `contact_submissions` table with RLS + grants (insert-only for public, no public reads), written through a validated server function using Zod.
- Map embedded via an iframe of the office address; no API key needed.
