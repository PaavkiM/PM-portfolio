/* ============================================================
   YOUR CONTENT LIVES HERE
   ============================================================
   This is the ONLY file you need to edit to personalise the site.

   Everything marked [PLACEHOLDER] is fake sample text - replace it
   with your real details. You can add or remove items from any list
   and the page will adjust automatically.

   The `type` blocks above each section just describe the shape of
   the data so TypeScript can warn you if you mistype a field name.
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
  /** Optional links. Delete a line to hide that button. */
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
  /** [PLACEHOLDER] Your full name. */
  name: 'Your Name',

  /** [PLACEHOLDER] Your initials - shown as the logo in the navbar. */
  initials: 'PM',

  /** [PLACEHOLDER] Your title, e.g. "Computer Science Student". */
  role: 'Computer Science Student',

  /**
   * [PLACEHOLDER] The big hero headline.
   * The text you wrap in {curly braces} is styled in the accent serif
   * font, so pick one or two words to emphasise.
   */
  headline: 'I build {thoughtful} software for the web.',

  /** [PLACEHOLDER] One or two sentences under the headline. */
  intro:
    'Final-year computer science student focused on front-end engineering and clean, accessible interfaces. Currently looking for a software development internship where I can learn from an experienced team and ship real features.',

  /** [PLACEHOLDER] City, Country. */
  location: 'Your City, Country',

  /** [PLACEHOLDER] Short availability note shown as a badge in the hero. */
  availability: 'Available for 2026 internships',

  /** [PLACEHOLDER] Your email address. */
  email: 'your.email@example.com',

  /**
   * [PLACEHOLDER] Your CV.
   * Put a file called `resume.pdf` in the `public/` folder, then this
   * link will work both locally and once deployed.
   * Set to undefined to hide the "Download CV" button.
   */
  resumeUrl: 'resume.pdf',
} as const

/* ============================================================
   2. SOCIAL LINKS  - shown in the hero, contact section and footer
   ============================================================ */

export const socialLinks: SocialLink[] = [
  {
    label: 'GitHub',
    // [PLACEHOLDER] Replace with your GitHub profile URL.
    href: 'https://github.com/your-username',
    handle: '@your-username',
  },
  {
    label: 'LinkedIn',
    // [PLACEHOLDER] Replace with your LinkedIn profile URL.
    href: 'https://www.linkedin.com/in/your-profile',
    handle: '/in/your-profile',
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
  /** [PLACEHOLDER] Each string becomes its own paragraph. */
  paragraphs: [
    'I am a computer science student who enjoys the part of software where design and engineering meet: turning a rough idea into an interface that feels obvious to use. Most of what I know comes from building small projects end to end and rewriting them until they feel right.',
    'My current focus is modern front-end development with React and TypeScript, alongside the fundamentals my degree covers - data structures, databases and version control. I care about readable code, sensible naming and interfaces that still work on a five-year-old phone.',
    'Outside of coursework I am usually working through a side project, reading about accessibility, or helping classmates debug their assignments, which has taught me more about explaining technical ideas than any module has.',
  ],

  /** [PLACEHOLDER] Small facts shown in a list beside the text. */
  facts: [
    { label: 'Focus', value: 'Front-end engineering' },
    { label: 'Learning', value: 'Testing & CI/CD' },
    { label: 'Languages', value: 'English, [Other]' },
    { label: 'Open to', value: 'Internships, placements' },
  ],

  /** [PLACEHOLDER] Numbers shown in the hero. Keep these honest. */
  stats: [
    { value: '3rd', label: 'Year of study' },
    { value: '6+', label: 'Projects built' },
    { value: '5', label: 'Languages used' },
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
    description: 'The core languages I write day to day.',
    skills: ['TypeScript', 'JavaScript', 'HTML', 'CSS', 'Python', 'SQL'],
  },
  {
    title: 'Front-end',
    description: 'Building interfaces that are responsive and accessible.',
    skills: ['React', 'Vite', 'Responsive design', 'Flexbox & Grid', 'Accessibility (WCAG)'],
  },
  {
    title: 'Tools & workflow',
    description: 'How I build, version and ship my work.',
    skills: ['Git & GitHub', 'VS Code', 'npm', 'GitHub Actions', 'Figma'],
  },
  {
    title: 'Foundations',
    description: 'Concepts from my degree that I apply in projects.',
    skills: ['Data structures', 'Algorithms', 'OOP', 'Relational databases', 'REST APIs'],
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
    title: '[PLACEHOLDER] Project One',
    summary: 'A short, concrete one-liner about what this project does.',
    description:
      'Explain the problem you set out to solve, the approach you took and one thing that was genuinely difficult. Two or three sentences is plenty - recruiters skim. Finish with a result if you have one, such as a performance improvement or a number of users.',
    tech: ['React', 'TypeScript', 'CSS'],
    year: '2025',
    liveUrl: 'https://example.com',
    repoUrl: 'https://github.com/your-username/project-one',
    featured: true,
  },
  {
    title: '[PLACEHOLDER] Project Two',
    summary: 'What it does, in plain language and without buzzwords.',
    description:
      'Describe the scope and what you personally built, especially if it was a group assignment. Mentioning a trade-off you made shows judgement, which is what an interviewer is actually looking for.',
    tech: ['Python', 'SQLite', 'Tkinter'],
    year: '2025',
    repoUrl: 'https://github.com/your-username/project-two',
  },
  {
    title: '[PLACEHOLDER] Project Three',
    summary: 'A smaller project or a university coursework piece.',
    description:
      'Even a coursework project is worth listing if you can say what you learned from it. Note the grade only if it was strong, and say which parts of the code were yours.',
    tech: ['JavaScript', 'HTML', 'CSS'],
    year: '2024',
    liveUrl: 'https://example.com',
  },
]

/* ============================================================
   7. EDUCATION
   ============================================================ */

export const education: EducationEntry[] = [
  {
    institution: '[PLACEHOLDER] University Name',
    qualification: 'BSc (Hons) Computer Science',
    period: '2023 — 2026',
    location: 'Your City, Country',
    result: 'Predicted: [Your grade]',
    highlights: [
      'Relevant modules: Software Engineering, Web Development, Databases, Algorithms.',
      'Final-year project: [PLACEHOLDER] one line on your dissertation or capstone.',
      'Member of [PLACEHOLDER] society / coding club / hackathon team.',
    ],
  },
  {
    institution: '[PLACEHOLDER] School or College Name',
    qualification: 'A-Levels / High School Diploma',
    period: '2021 — 2023',
    location: 'Your City, Country',
    result: 'Grades: [Your grades]',
    highlights: [
      'Subjects: Mathematics, Computer Science, Physics.',
      '[PLACEHOLDER] An award, prize or leadership role worth mentioning.',
    ],
  },
]

/* ============================================================
   8. CONTACT
   ============================================================ */

export const contact = {
  /** The {braces} part is styled in the accent serif font. */
  heading: 'Let us build {something} together.',
  blurb:
    'I am currently looking for a software development internship or placement. If you think I could be useful to your team, or you just want to talk about a project, my inbox is open.',
  /** [PLACEHOLDER] Text shown on the main button. */
  ctaLabel: 'Send me an email',
}

/* ============================================================
   9. FOOTER
   ============================================================ */

export const footer = {
  /** [PLACEHOLDER] A short sign-off line. */
  note: 'Designed and built from scratch with React, TypeScript and CSS.',
}
