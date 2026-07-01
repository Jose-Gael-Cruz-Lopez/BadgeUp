# Undergrad Tech Conferences - Design

**Date:** 2026-07-01
**Status:** Implemented (list + web scaffold); AI auto-add pipeline deferred.

## Purpose

A curated, community-driven list of tech conferences an undergraduate (any year) can realistically attend - the ones that are **free**, the ones that offer **student scholarships / travel grants**, and the **paid** ones with a real student discount. Most conference roundups assume a travel budget and a company badge; this one is built for students who have neither.

Structure and layout mirror [underclassmen-opportunities](https://github.com/Jose-Gael-Cruz-Lopez/underclassmen-opportunities) and [hackhq](https://github.com/Jose-Gael-Cruz-Lopez/hackhq).

## Repository layout

```
conferences/
├── README.md              # canonical, human-facing list
├── ARCHIVE.md             # past/closed conferences
├── CONTRIBUTING.md        # 60-second submission guide
├── OPENCLAWS_PROMPT.md    # AI extraction contract for the (planned) auto-add pipeline
├── .gitignore
├── .github/ISSUE_TEMPLATE/
│   ├── add-conference.yml # structured submission form
│   ├── gallery_photo.yaml # gallery photo submission form
│   └── config.yml
├── assets/                # self-hosted banner, gallery title, contributor + gallery photos
│   ├── banner.png
│   ├── gallery-title.svg
│   ├── contributors/
│   └── gallery/
├── docs/superpowers/specs/  # design specs (this file)
└── web/                   # Next.js + TS + Tailwind scaffold that renders the list
```

## Content model

**Sections** (by cost + affinity):
Free to Attend · Scholarships & Travel Grants · Paid (Student Discounts) · Women / Black / Latinx / LGBTQ+ in Tech Conferences · Resources for Attendees.

**Table columns:** `Status | Conference | Focus | Dates & Location | Access | Register/Apply | Deadline`.

**Status:** ✅ OPEN · 🔥 CLOSING SOON · ⏳ OPENS SOON.
**Access:** 💚 Free · 🎓 Scholarship · 💵 Paid (a conference may carry several).

**Data model** (mirrored in `web/lib/conferences.ts`): `{ status, name, focus, datesLocation, access[], url, deadline, section }`.

## Data integrity policy

- Link to the **official conference site**, never an aggregator.
- **Do not invent** exact dates, prices, or deadlines. Use a season ("Fall 2026"), "Rolling", or "Check site" when unsure, and surface a prominent "verify on the official site" warning.
- Affinity conferences live in their affinity section and may also appear under a cost section when they genuinely fit.

## Web app

Intentional stub: Next.js App Router, Server Components by default, TypeScript strict, Tailwind v4. `web/lib/conferences.ts` is the app's source of truth (a representative subset today); to be expanded to mirror every README row, ideally generated from the README so the two never drift.

## Deferred: AI auto-add pipeline

`hackhq` auto-generates its README from a `listings.json`, populated by a GitHub Actions workflow that runs on an approved submission issue: fetch the URL, extract structured data via OpenAI (see `OPENCLAWS_PROMPT.md`), validate, de-dupe, append, regenerate the README, and open a PR. Adopting it here would convert this repo from hand-maintained Markdown to data-driven generation and requires an `OPENAI_API_KEY` secret. Deferred until the list is established; the extraction contract is already specified in `OPENCLAWS_PROMPT.md` so it can be added without redesign.

## Out of scope (YAGNI)

- Full automation pipeline (deferred, above).
- Real contributor/gallery photos (placeholders + submission templates in place).
- A generated `Contributor_Guide.pdf`.
