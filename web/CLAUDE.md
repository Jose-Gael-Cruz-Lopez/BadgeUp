# CLAUDE.md - web/

Guidance for AI assistants working in this Next.js app.

## What this is

A scaffold front-end for the Undergrad Tech Conferences list. The **repo-root `README.md` is the canonical human-facing list.** This app mirrors that data for a browsable UI.

## Conventions

- **Next.js App Router** (`app/`), **Server Components by default** - add `"use client"` only where interactivity (filtering, search) actually requires it.
- **TypeScript strict** - no `any`. The conference shape lives in `lib/conferences.ts`; extend the types there, don't inline shapes.
- **Tailwind CSS v4** - utility classes in JSX; the single CSS entry is `app/globals.css` (`@import "tailwindcss";`).
- Keep components small and focused; one responsibility each (see `components/ConferenceTable.tsx`).

## Source of truth

`lib/conferences.ts` is the source of truth **for the app**. When adding a conference to the site, mirror the corresponding row in the root `README.md`. Ideally, generate `conferences.ts` from the README so they never drift - if you build that generator, document it here.

## Before claiming done

Run and confirm output:

```bash
npm run lint
npm run build
```
