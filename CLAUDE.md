# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

There is no test suite configured in this repo.

## Git

Do **not** commit changes. Leave all changes in the working tree and only commit when the user explicitly asks you to.

## Overview

`manaopili` is the marketing + lead-generation website for Mana'o Pili, LLC (digital transformation / ServiceNow consulting). It is a **Next.js 15 App Router** app written in **JavaScript (JSX, not TypeScript)** and styled with **Tailwind CSS**. It is presentation-heavy: most routes are marketing pages, plus a ServiceNow maturity **survey** flow and a CMS-driven **microsites** system. There is no backend in this repo — dynamic data comes from external services over `axios`.

## Architecture

### Routing
All routes live under `src/app` (App Router). Most pages are Client Components (`'use client'`) that fetch data in `useEffect` rather than using server-side data fetching. The root `src/app/layout.js` wraps every page with the shared `Header`, `FooterPage`, `FloaterCTA`, `SocialCTA`, Geist local fonts, and Google Analytics. Path alias `@/*` maps to `src/*` (see `jsconfig.json`).

Dynamic route segments:
- `services/[service]` — service detail pages, driven by an in-file `services` config object keyed by slug.
- `careers/[id]` — job detail pages (job list in `careers/jobData.js`, also fetches from the backend).
- `microsites/[microsite]` — see below.

### Component locations (important distinction)
- `src/components/ui/*` — shadcn/Radix UI primitives (button, card, dialog, select, tabs, etc.). Use `cn()` from `src/lib/utils.js` for class merging.
- `src/app/components/*` — app-specific shared components (header, footer, charts, form widgets, CTAs).
- `src/app/<route>/components/*` — components scoped to one route (e.g. `ai-launchpad/components`, `microsites/components`).

### Survey flow (a core feature)
The survey lets users self-assess ServiceNow product maturity and get a scored result with charts/PDF.

- **Survey definitions** live in `src/app/config/data.js` as the `configs` object, keyed by service slug (`technology-workflows`, `customer-workflows`, `it-operations-management`, `strategic-portfolio-management`). Each config has `name` (ITSM/CSM/ITOM/SPM), `types` (the category tiers, e.g. Standard/Pro/Enterprise), and `categories[].modules[]` (each module rated on **people / process / technology**). `fallbackConfig` and `modulesComingSoon` in the same file gate which modules are live vs. "Coming Soon".
- **Scoring/transform helpers** are in `src/lib/utils.js`: `parseResults` → per-category averages, `parseToGraph` → recharts-ready data, plus `findSum`, `getLengthFromModules`, `getNumberOfZeros`. These assume the `ratings` shape `{ people, process, technology }`.
- **Pages**: `survey-list` (module picker) → `survey` / `new-survey` (the form) → `survey-results`. Results render with `recharts` charts (`src/app/components/charts/*`) and can be exported to PDF via `react-to-pdf` / `html2canvas` (`pdf-components/`, `htmlToBase64.js`).
- `activateServer()` (called from `survey-list`) pings the backend to wake a cold-started service before the user submits.

### Microsites (CMS-driven pages)
`microsites/[microsite]/page.js` fetches a page definition by slug from the Nest backend, then renders it by mapping each block's `type` to a React component via the `COMPONENTS` registry in `microsites/components/constants.js`. To add a new microsite block type, add a renderer to that registry. Props are flattened (objects with a `.value` are unwrapped) before being passed to components.

### External services (env vars)
The app talks to two separate backends plus some embeds. All are `NEXT_PUBLIC_*` (client-side):
- `NEXT_PUBLIC_BACKEND_URL` — primary backend: survey submission, contact/email forms, careers data, server warm-up.
- `NEXT_PUBLIC_NEST_BACKEND_URL` — Nest "microsite-generator" backend that serves microsite page definitions.
- `NEXT_PUBLIC_OUTLOOK_BOOKING_LINK` — Outlook booking URL used by every "book a call" CTA.
- `NEXT_PUBLIC_GA_ID` — Google Analytics ID.

These are read inline as `process.env.NEXT_PUBLIC_*`; define them in `.env`.

## Conventions
- Components are `.js`/`.jsx` with default exports; pages are default-exported from `page.js`.
- Tailwind is the styling system; the brand accent color is `#deff00` (lime) on a dark `#141414` background — reuse these rather than introducing new palette values.
- Data that drives a page (service lists, job listings, survey modules, nav items) is typically defined as a plain object/array at the top of the file rather than fetched — check there before adding new config plumbing.
