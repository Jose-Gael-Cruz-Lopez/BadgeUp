// Data model for the BadgeUp undergrad conference list.
//
// This is the single source of truth for the web app. The README.md at the repo
// root is the canonical human-facing list; this file mirrors a representative
// subset so the scaffold renders something real. Expand it to cover every row in
// README.md (or generate it from the README) as the app grows.

export type Status = "OPEN" | "CLOSING_SOON" | "OPENS_SOON";

/** How an undergrad can afford to attend. A conference may qualify under several. */
export type Access = "FREE" | "SCHOLARSHIP" | "PAID";

/** Field/major sections, plus cross-cutting community sections. */
export type Section =
  | "Tech & Computing"
  | "Business & Finance"
  | "Engineering"
  | "Health & Medicine"
  | "Sciences & Research"
  | "Social Sciences & Policy"
  | "Law & Government"
  | "Arts, Humanities & Design"
  | "Education"
  | "Multidisciplinary / General"
  | "Women in Their Field"
  | "Black Professionals & Students"
  | "Latinx Professionals & Students"
  | "LGBTQ+ in Their Field";

export interface Conference {
  status: Status;
  name: string;
  focus: string;
  datesLocation: string;
  access: Access[];
  url: string;
  /** Scholarship / registration deadline, or "Rolling" / "Check site". */
  deadline: string;
  section: Section;
}

export const STATUS_LABEL: Record<Status, string> = {
  OPEN: "✅ Open",
  CLOSING_SOON: "🔥 Closing Soon",
  OPENS_SOON: "⏳ Opens Soon",
};

export const ACCESS_LABEL: Record<Access, string> = {
  FREE: "💚 Free",
  SCHOLARSHIP: "🎓 Scholarship",
  PAID: "💵 Paid",
};

export const SECTIONS: Section[] = [
  "Tech & Computing",
  "Business & Finance",
  "Engineering",
  "Health & Medicine",
  "Sciences & Research",
  "Social Sciences & Policy",
  "Law & Government",
  "Arts, Humanities & Design",
  "Education",
  "Multidisciplinary / General",
  "Women in Their Field",
  "Black Professionals & Students",
  "Latinx Professionals & Students",
  "LGBTQ+ in Their Field",
];

// Representative subset - see README.md for the full, canonical list.
export const conferences: Conference[] = [
  {
    status: "OPEN",
    name: "GitHub Universe",
    focus: "Dev tools, AI, open source",
    datesLocation: "Oct 2026 · San Francisco, CA + Virtual",
    access: ["FREE"],
    url: "https://githubuniverse.com/",
    deadline: "Rolling",
    section: "Tech & Computing",
  },
  {
    status: "OPEN",
    name: "Grace Hopper Celebration (GHC)",
    focus: "Women in computing",
    datesLocation: "Sep 2026 · Orlando, FL + Virtual",
    access: ["SCHOLARSHIP", "PAID"],
    url: "https://ghc.anitab.org/",
    deadline: "Student scholarships: check site",
    section: "Tech & Computing",
  },
  {
    status: "OPEN",
    name: "National Black MBA Association Conference",
    focus: "Business, careers",
    datesLocation: "Sep 2026 · Location TBA",
    access: ["SCHOLARSHIP", "PAID"],
    url: "https://nbmbaa.org/",
    deadline: "Summer 2026",
    section: "Business & Finance",
  },
  {
    status: "OPEN",
    name: "SHPE National Convention",
    focus: "Hispanic engineers",
    datesLocation: "Oct-Nov 2026 · Location TBA",
    access: ["SCHOLARSHIP", "PAID"],
    url: "https://www.shpe.org/",
    deadline: "Travel awards: Summer 2026",
    section: "Engineering",
  },
  {
    status: "OPEN",
    name: "SACNAS - The National Diversity in STEM Conference",
    focus: "Diversity in STEM research",
    datesLocation: "Oct 2026 · Location TBA",
    access: ["SCHOLARSHIP"],
    url: "https://www.sacnas.org/conference",
    deadline: "Summer 2026",
    section: "Sciences & Research",
  },
  {
    status: "OPENS_SOON",
    name: "SNMA Annual Medical Education Conference (AMEC)",
    focus: "Underrepresented in medicine",
    datesLocation: "Apr 2027 · Location TBA",
    access: ["SCHOLARSHIP", "PAID"],
    url: "https://snma.org/",
    deadline: "Early 2027",
    section: "Health & Medicine",
  },
  {
    status: "OPEN",
    name: "AfroTech Conference",
    focus: "Black technologists & founders",
    datesLocation: "Nov 2026 · Houston, TX",
    access: ["SCHOLARSHIP", "PAID"],
    url: "https://afrotech.com/afrotech-conference",
    deadline: "Scholarships: Fall 2026",
    section: "Black Professionals & Students",
  },
  {
    status: "OPEN",
    name: "oSTEM (Out in STEM) Annual Conference",
    focus: "LGBTQ+ in STEM (student-focused)",
    datesLocation: "Nov 2026 · Location TBA",
    access: ["SCHOLARSHIP", "PAID"],
    url: "https://ostem.org/page/conference",
    deadline: "Fall 2026",
    section: "LGBTQ+ in Their Field",
  },
];

export function conferencesBySection(section: Section): Conference[] {
  return conferences.filter((c) => c.section === section);
}
