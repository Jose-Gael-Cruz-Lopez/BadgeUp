# web/ - Undergrad Tech Conferences front-end (scaffold)

A minimal [Next.js](https://nextjs.org) (App Router) + TypeScript + Tailwind CSS v4 app that renders the conference list. This is an intentional **stub** - the canonical, full list lives in the repo-root [`README.md`](../README.md). Right now the app renders a representative subset from [`lib/conferences.ts`](lib/conferences.ts).

## Getting started

```bash
cd web
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Structure

```
web/
├── app/
│   ├── layout.tsx      # root layout + metadata
│   ├── page.tsx        # home page: renders each section
│   └── globals.css     # Tailwind entry
├── components/
│   └── ConferenceTable.tsx   # one section's table
├── lib/
│   └── conferences.ts  # data model + conference data (source of truth for the app)
├── public/             # static assets (banner, favicon)
├── next.config.ts
├── tsconfig.json
├── eslint.config.mjs
└── postcss.config.mjs
```

## To fill in later

- Expand `lib/conferences.ts` to cover **every** row in the root `README.md` (or generate it from the README so the two never drift).
- Add client-side **filtering** by access type (Free / Scholarship / Paid) and by status.
- Add search and a "deadline soon" sort.
- Add the banner image and favicon under `public/`.
