/* ============================================================
   YOUR CONTENT LIVES HERE
   ============================================================
   This is the ONLY file you need to edit to personalise the site.

   You can add or remove items from any list and the page will
   adjust automatically.

   The `type` blocks below describe the shape of the data so
   TypeScript can warn you if you mistype or forget a field name.
   ============================================================ */

/* ---------- Shapes (you rarely need to change these) ---------- */

export type NavLink = {
  /** Must match the `id` given to the matching section component. */
  id: string
  label: string
}

export type SocialLink = {
  label: string
  href: string
  /** Shown next to the link on the contact card. */
  handle: string
}

export type Stat = {
  value: string
  label: string
}

export type SkillGroup = {
  title: string
  description: string
  skills: string[]
}

export type Project = {
  title: string
  /** One-line summary shown under the title. */
  summary: string
  /** Two or three sentences of detail. */
  description: string
  /** Technologies shown as pills at the bottom of the card. */
  tech: string[]
  year: string
  /**
   * Optional links. These are used directly as the link address, so they
   * must be real URLs starting with https:// - delete the line entirely
   * to hide that button instead of writing a note in it.
   */
  liveUrl?: string
  repoUrl?: string
  /** Set true for the one project you most want people to read first. */
  featured?: boolean
}

export type EducationEntry = {
  institution: string
  qualification: string
  period: string
  location: string
  /** Optional grade / GPA line. Delete to hide it. */
  result?: string
  /** Bullet points: modules, achievements, societies. */
  highlights: string[]
}

/* ============================================================
   1. PROFILE  - used by the navbar, hero and footer
   ============================================================ */

export const profile = {
  /** Your full name. */
  name: 'Paavki Mahajan',

  /** Your initials - shown as the logo in the navbar. */
  initials: 'PM',

  /** Your title, e.g. "Computer Science Student". */
  role: 'Computer Science and Statistics Student',

  /**
   * The big hero headline - just your name.
   * Text wrapped in {curly braces} would render in the accent serif font.
   * There are no braces here, so this shows as plain text.
   */
  headline: 'Paavki Mahajan',

  /** The subtitle shown directly underneath the headline. */
  intro: 'Computer Science & Statistics Student',

  /** City, Country. */
  location: 'Mississauga, Canada',

  /** Short availability note shown as a badge in the hero. */
  availability: 'Looking for 2027 internships',

  /** Your email address. */
  email: 'p@gmail.com',

  /**
   * Your CV. Undefined for now, so the "Download CV" button is hidden
   * and there is no broken link.
   * To switch it back on: put a file called `resume.pdf` in the
   * `public/` folder and change this line to `resumeUrl: 'resume.pdf',`
   */
  resumeUrl: undefined,
} as const

/* ============================================================
   2. SOCIAL LINKS  - shown in the hero, contact section and footer
   ------------------------------------------------------------
   Every entry needs a real `href`. To add LinkedIn back, copy the
   GitHub block and use your profile URL, for example:
     { label: 'LinkedIn',
       href: 'https://www.linkedin.com/in/your-profile',
       handle: 'Paavki Mahajan' },
   ============================================================ */

export const socialLinks: SocialLink[] = [
  {
    label: 'GitHub',
    href: 'https://github.com/PaavkiM',
    handle: '@PaavkiM',
  },
  {
    label: 'Email',
    href: `mailto:${profile.email}`,
    handle: profile.email,
  },
]

/* ============================================================
   3. NAVIGATION
   ------------------------------------------------------------
   Each `id` must match the id passed to a section in App.tsx.
   Remove a line here to hide it from the menu.
   ============================================================ */

export const navLinks: NavLink[] = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
]

/* ============================================================
   4. ABOUT ME
   ============================================================ */

export const about = {
  /** Each string becomes its own paragraph. */
  paragraphs: [
    'I am a computer science student who enjoys learning about data analysis and artificial intelligence.',
    'My current focus is on artificial intelligence and learning how it works on the backend.',
    'Outside of university, I play badminton, work on small creative projects, and travel.',
  ],

  /** Small facts shown in a list beside the text. */
  facts: [
    { label: 'Focus', value: 'Artificial Intelligence' },
    { label: 'Languages', value: 'English, Hindi' },
  ],

  /** Numbers shown in the hero. Keep these honest. */
  stats: [
    { value: '2nd', label: 'Year of study' },
    { value: '1', label: 'Project built' },
    { value: '3', label: 'Languages used' },
  ] satisfies Stat[],
}

/* ============================================================
   5. SKILLS
   ------------------------------------------------------------
   Add or remove groups freely - the grid re-flows on its own.
   ============================================================ */

export const skillGroups: SkillGroup[] = [
  {
    title: 'Languages',
    description: 'The coding languages I know.',
    skills: ['JavaScript', 'HTML', 'Python'],
  },
]

/* ============================================================
   6. PROJECTS
   ------------------------------------------------------------
   Two or three strong projects beat six weak ones. Delete the
   `liveUrl` or `repoUrl` line if a project does not have one.
   ============================================================ */

export const projects: Project[] = [
  {
    title: 'Spending Tracker',
    summary: 'Tracks expenses in different categories.',
    description:
      'My family needed a way to keep track of all monthly expenses but something that was custom to the things we spend money on every month. I built this tracker so that we could keep track of our expenses in every category.',
    tech: ['Flask', 'HTML', 'Python'],
    year: '2026',
    // No links yet. When the project is ready, add real URLs here:
    //   liveUrl: 'https://...',
    //   repoUrl: 'https://github.com/PaavkiM/...',
    featured: true,
  },
]

/* ============================================================
   7. EDUCATION
   ============================================================ */

export const education: EducationEntry[] = [
  {
    institution: 'University of Toronto',
    qualification: 'Bachelor of Computer Science and Statistics',
    period: '2025 — present',
    location: 'Mississauga, Ontario',
    // Add a grade line when you have one, for example:
    //   result: 'GPA: 3.8',
    highlights: [
      'Member of the Desi Student Association, UofT AI, UTM Society of Math, CS and Statistics and UTM Volunteam',
    ],
  },
]

/* ============================================================
   8. CONTACT
   ============================================================ */

export const contact = {
  /** The {braces} part is styled in the accent serif font. */
  heading: 'Lets {connect}',
  blurb:
    'I am currently looking for a AI/Data Analysis internships.',
  /** Text shown on the main button. */
  ctaLabel: 'Send me an email',
}

/* ============================================================
   9. FOOTER
   ============================================================ */

export const footer = {
  /** A short sign-off line. */
  note: 'Designed and built from scratch with React, TypeScript and CSS.',
}
