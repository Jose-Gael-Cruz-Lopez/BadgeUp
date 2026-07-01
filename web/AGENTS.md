# AGENTS.md - web/

See [`CLAUDE.md`](CLAUDE.md) for the full guidance - it applies to all AI agents working in this directory.

## Quick reference

- **Stack:** Next.js (App Router) · TypeScript (strict) · Tailwind CSS v4.
- **Data:** `lib/conferences.ts` is the app's source of truth; keep it in sync with the repo-root `README.md`.
- **Server Components by default.** Add `"use client"` only for interactivity.
- **Verify before done:** `npm run lint && npm run build`.
