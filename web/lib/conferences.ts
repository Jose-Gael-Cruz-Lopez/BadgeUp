// Data model for the Undergrad Tech Conferences list.
//
// This is the single source of truth for the web app. The README.md at the repo
// root is the canonical human-facing list; this file mirrors a representative
// subset so the scaffold renders something real. Expand it to cover every row in
// README.md (or generate it from the README) as the app grows.

export type Status = "OPEN" | "CLOSING_SOON" | "OPENS_SOON";

/** How an undergrad can afford to attend. A conference may qualify under several. */
export type Access = "FREE" | "SCHOLARSHIP" | "PAID";

export type Section =
  | "Free to Attend"
  | "Scholarships & Travel Grants"
  | "Paid (Student Discounts)"
  | "Women in Tech Conferences"
  | "Black in Tech Conferences"
  | "Latinx in Tech Conferences"
  | "LGBTQ+ in Tech Conferences";

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
  "Free to Attend",
  "Scholarships & Travel Grants",
  "Paid (Student Discounts)",
  "Women in Tech Conferences",
  "Black in Tech Conferences",
  "Latinx in Tech Conferences",
  "LGBTQ+ in Tech Conferences",
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
    section: "Free to Attend",
  },
  {
    status: "OPEN",
    name: "Grace Hopper Celebration (GHC)",
    focus: "Women in computing",
    datesLocation: "Sep 2026 · Orlando, FL + Virtual",
    access: ["SCHOLARSHIP"],
    url: "https://ghc.anitab.org/",
    deadline: "Student scholarships: check site",
    section: "Scholarships & Travel Grants",
  },
  {
    status: "OPEN",
    name: "ACM Richard Tapia Celebration of Diversity in Computing",
    focus: "Diversity in computing",
    datesLocation: "Sep 2026 · Location TBA",
    access: ["SCHOLARSHIP"],
    url: "https://tapiaconference.cmd-it.org/",
    deadline: "Scholarship deadline: check site",
    section: "Scholarships & Travel Grants",
  },
  {
    status: "OPEN",
    name: "KubeCon + CloudNativeCon NA",
    focus: "Cloud native, Kubernetes",
    datesLocation: "Nov 2026 · Los Angeles, CA",
    access: ["PAID", "SCHOLARSHIP"],
    url: "https://www.cncf.io/kubecon-cloudnativecon-events/",
    deadline: "Scholarship: Fall 2026",
    section: "Paid (Student Discounts)",
  },
  {
    status: "OPEN",
    name: "Society of Women Engineers - WE26",
    focus: "Engineering",
    datesLocation: "Oct 2026 · Location TBA",
    access: ["SCHOLARSHIP", "PAID"],
    url: "https://we26.swe.org/",
    deadline: "Travel grants: Summer 2026",
    section: "Women in Tech Conferences",
  },
  {
    status: "OPEN",
    name: "AfroTech Conference",
    focus: "Black technologists & founders",
    datesLocation: "Nov 2026 · Houston, TX",
    access: ["SCHOLARSHIP", "PAID"],
    url: "https://afrotech.com/afrotech-conference",
    deadline: "Scholarships: Fall 2026",
    section: "Black in Tech Conferences",
  },
  {
    status: "OPEN",
    name: "SHPE National Convention",
    focus: "Hispanic engineers",
    datesLocation: "Oct-Nov 2026 · Location TBA",
    access: ["SCHOLARSHIP", "PAID"],
    url: "https://www.shpe.org/",
    deadline: "Travel awards: Summer 2026",
    section: "Latinx in Tech Conferences",
  },
  {
    status: "OPEN",
    name: "oSTEM (Out in STEM) Annual Conference",
    focus: "LGBTQ+ in STEM (student-focused)",
    datesLocation: "Nov 2026 · Location TBA",
    access: ["SCHOLARSHIP", "PAID"],
    url: "https://ostem.org/page/conference",
    deadline: "Fall 2026",
    section: "LGBTQ+ in Tech Conferences",
  },
];

export function conferencesBySection(section: Section): Conference[] {
  return conferences.filter((c) => c.section === section);
}
