# OpenClaws Prompt - Conference Auto-Add

This file specifies the AI extraction step for the (planned) auto-add workflow. When a maintainer approves a submission issue, an automation fetches the conference URL and calls an LLM with the prompt below to turn the page into one structured conference record.

> **Status:** specification only. The GitHub Actions workflow and scripts that run this prompt are not built yet - see the "AI auto-add pipeline" note in the project README/spec. This file defines the contract so the automation can be added later without redesign.

## Model & settings

- Model: `gpt-4o-mini` (API key via the `OPENAI_API_KEY` repo secret).
- Temperature: `0`. Return **JSON only** - no prose, no code fences.
- All dates/times are interpreted in **Pacific Time**.

## System prompt

```
You extract structured data about a technology conference from the text of its
official web page. You return a single JSON object and nothing else. If a field
is unknown, use null (or an empty array for "access"). Never invent deadlines,
prices, or dates - prefer null or "Rolling"/"Check site" over a guess.
```

## User prompt

```
From the page text below, extract one conference as JSON matching this schema:

{
  "name":         string,   // official conference name, e.g. "Grace Hopper Celebration (GHC)"
  "focus":        string,   // short topic, e.g. "Women in computing", "Cloud native", "AI/ML"
  "datesLocation":string,   // e.g. "Sep 2026 · Orlando, FL + Virtual" (use a season/year if exact dates are not published; note "+ Virtual" if applicable)
  "access":       string[], // any of: "FREE", "SCHOLARSHIP", "PAID"
  "url":          string,   // the official conference URL
  "deadline":     string,   // scholarship/registration deadline, or "Rolling" / "Check site"
  "section":      string,   // one of the README sections (see below)
  "status":       string    // "OPEN" | "CLOSING_SOON" | "OPENS_SOON"
}

Section must be exactly one of (pick the field/major):
- "Tech & Computing"
- "Business & Finance"
- "Engineering"
- "Health & Medicine"
- "Sciences & Research"
- "Social Sciences & Policy"
- "Law & Government"
- "Arts, Humanities & Design"
- "Education"
- "Multidisciplinary / General"
- "Women in Their Field"
- "Black Professionals & Students"
- "Latinx Professionals & Students"
- "LGBTQ+ in Their Field"

Rules:
- "access" reflects how an undergrad can attend: FREE (free reg or free virtual
  track), SCHOLARSHIP (student scholarship/travel grant offered), PAID (ticket
  with a student/academic discount). Include every option that applies.
- Choose "section" by the conference's field/major. If it primarily centers an
  identity/community (women / Black / Latinx / LGBTQ+), use that community
  section; a maintainer may also cross-list it under its field.
- "status": OPEN if registration or scholarships are open now; CLOSING_SOON if a
  deadline is within ~2 weeks; OPENS_SOON if the next cycle is not open yet.

PAGE TEXT:
<<<
{page_text}
>>>
```

## Rendering to the list

The extracted record maps to one Markdown table row in the section named by `section`:

```
| {status_badge} | {name} | {focus} | {datesLocation} | {access_badges} | {apply_button} | {deadline} |
```

- `status_badge`: `✅ **[OPEN]**` / `🔥 **[CLOSING SOON]**` / `⏳ **[OPENS SOON]**`
- `access_badges`: join with ` · ` - `Free`, `Scholarship`, `Paid`
- `apply_button`: `<a href="{url}"><img src="https://img.shields.io/badge/Apply-blue?style=for-the-badge" alt="Apply"></a>` (use `Register` for open registration, `Find Event` for chapter/regional listings, `Join` for membership orgs)

## Safeguards

- Reject records with no `url` or no `name`.
- De-duplicate by normalized `url` and by `name` before appending.
- Never write a row with the wrong column count; validate the pipe count first.
- On any extraction or validation error, comment on the issue and do **not** commit.
