# Contributing to Undergrad Tech Conferences

Thanks for helping build the most useful conference list for undergrads. **The whole process takes about 60 seconds.**

## The 60-second process

1. **[Open a new issue](https://github.com/Jose-Gael-Cruz-Lopez/BadgeUp/issues/new/choose)** using the **Add a Conference** template.
2. Paste the **official conference URL** and fill in what you know (a maintainer will fill any gaps).
3. A maintainer reviews and approves it - then it's added to [README.md](README.md).

You don't need to open a pull request. An issue is enough. If you'd rather submit a PR directly, that works too - see [Submitting a pull request](#submitting-a-pull-request) below.

## What belongs on this list

A conference qualifies if an **undergraduate** (any year) can realistically attend it. That means at least one of:

- 💚 **Free** to attend - free registration or a free virtual/livestream track.
- 🎓 **Scholarship / travel grant** - the conference (or a partner org) funds students to attend.
- 💵 **Paid with student pricing** - a real student, academic, or early-bird discount that undergrads can use.

**Any major welcome** - tech, business, engineering, health & medicine, sciences, social sciences, law, arts & humanities, education, and more. Each conference goes in its field/major section. Identity/community conferences (women, Black, Latinx, LGBTQ+ in any field) also go in their dedicated community sections.

**Not a fit:** graduate-only or invite-only events with no student pathway, or anything with no way for an undergraduate to get in.

## Row format

Each conference is one table row. Copy this template:

```markdown
| ✅ **[OPEN]** | Conference Name | Focus area | Month Year · City, ST + Virtual | 💚 Free / 🎓 Scholarship / 💵 Paid | <a href="https://OFFICIAL-URL/"><img src="https://img.shields.io/badge/Apply-blue?style=for-the-badge" alt="Apply"></a> | Deadline or "Rolling" |
```

**Status** (first column):

| Badge | Use when |
| ----- | -------- |
| `✅ **[OPEN]**` | Registration and/or scholarship applications are open now |
| `🔥 **[CLOSING SOON]**` | A deadline is within ~2 weeks |
| `⏳ **[OPENS SOON]**` | Next cycle not open yet |

**Access** (fifth column): use 💚 Free, 🎓 Scholarship, or 💵 Paid - combine with `·` when more than one applies (e.g. `🎓 Scholarship · 💵 Paid`).

**Button label:** use `Apply` for scholarship/registration applications, `Register` for open registration, `Find Event` for chapter/regional listings, or `Join` for membership orgs.

## Guidelines

- **Link to the official site**, not a blog post or aggregator.
- **Don't invent dates or deadlines.** If you're unsure, use "Rolling", "Check site", or a season like "Fall 2026" - accuracy over precision.
- **Sort by field/major first.** Identity/community conferences (Women / Black / Latinx / LGBTQ+ in Their Field) go in their community section, and can also be cross-listed under their field if it genuinely fits.
- **Keep it alphabetical-ish by status** - OPEN and CLOSING SOON rows near the top of each table.
- **One conference per row.** Recurring regional events (DevFest, WiDS, Techqueria) can be a single row that links to the chapter finder.

## Submitting a pull request

If you edit [README.md](README.md) directly:

1. Fork the repo and create a branch.
2. Add or edit the single table row.
3. Confirm the table still renders (no broken `|` columns) and the link works.
4. Open the PR with the conference name in the title.

## Keeping the list fresh

- Deadline passed or cycle ended? Move the row to [ARCHIVE.md](ARCHIVE.md).
- Reopened for a new cycle? Move it back with an updated status and dates.

Thank you for contributing. 🎟️
