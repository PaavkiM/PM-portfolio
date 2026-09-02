# Personal Portfolio

A personal portfolio website built with React, TypeScript and Vite, deployed to
GitHub Pages.

**Live site:** https://paavkim.github.io/PM-portfolio/

---

## Tech stack

| Thing            | Choice                | Why                                          |
| ---------------- | --------------------- | -------------------------------------------- |
| Framework        | React 19              | Component-based UI                           |
| Language         | TypeScript 5.9        | Catches mistakes before the site is built    |
| Build tool       | Vite 7                | Fast dev server, simple config               |
| Styling          | Plain CSS             | No framework to learn, one CSS file per component |
| Hosting          | GitHub Pages          | Free, and deploys itself via GitHub Actions  |

There is no backend, no database and no CSS or animation library. The only
dependencies are React and the Vite build tooling.

---

## Running it on your computer

You need [Node.js](https://nodejs.org) version 20.19 or newer.

```bash
npm install      # once, to download the dependencies
npm run dev      # start the dev server
```

Then open the URL it prints (something like
`http://localhost:5173/PM-portfolio/`). Saving a file updates the browser
instantly.

### All the commands

| Command             | What it does                                            |
| ------------------- | ------------------------------------------------------- |
| `npm run dev`       | Development server with instant reloading               |
| `npm run build`     | Type-checks, then builds the site into `dist/`           |
| `npm run preview`   | Serves the built `dist/` folder, to check it before deploying |
| `npm run typecheck` | Only checks the TypeScript, without building            |

---

## Making it yours

### The one file that matters

**`src/data/portfolio.ts`** holds all of the site's content: your name, the
hero headline, your about text, skills, projects, education and links.

Edit that one file and the whole site updates. You do not need to touch any
component code to change what the site says.

A few useful details:

- **Adding or removing items.** Every list (`projects`, `skillGroups`,
  `education`, `socialLinks`) can have items added or deleted. The layouts
  re-flow on their own.
- **Emphasised words.** In `profile.headline` and `contact.heading`, text
  inside `{curly braces}` is displayed in the accent serif font. So
  `'I build {thoughtful} software.'` renders "thoughtful" in orange italics.
- **Optional fields.** Delete a project's `liveUrl` or `repoUrl` line and that
  button disappears. Same for an education entry's `result`.

### Adding your CV

Put a file named `resume.pdf` into the `public/` folder. The "Download CV"
button in the hero then works automatically, both locally and once deployed.
To hide the button instead, set `resumeUrl: undefined` in
`src/data/portfolio.ts`.

### Changing the colours and fonts

**`src/styles/variables.css`** defines every colour, font size and spacing
value as a CSS variable. Change one value there and it updates across the
entire site. For example, to change the accent colour from orange to blue,
change this single line:

```css
--color-accent: #ffb347;   /*  ->  #7dd3fc  */
```

The fonts are loaded from Google Fonts in `index.html`.

---

## How the project is organised

```
portfolio/
├── .github/workflows/deploy.yml   Deploys to GitHub Pages on every push
├── public/                        Files copied as-is (favicon, resume.pdf)
├── index.html                     The page shell, loads fonts and main.tsx
├── vite.config.ts                 Build config, contains the Pages `base` path
├── tsconfig.json                  TypeScript settings
└── src/
    ├── main.tsx                   Starts React, imports the global CSS
    ├── App.tsx                    Lists the sections in page order
    ├── data/
    │   └── portfolio.ts           >>> ALL YOUR CONTENT GOES HERE <<<
    ├── styles/
    │   ├── variables.css          Colours, fonts, spacing (design tokens)
    │   └── global.css             Reset, base typography, shared classes
    ├── hooks/
    │   └── useScrollReveal.ts     Fades elements in as you scroll
    └── components/
        ├── layout/                Navbar (incl. mobile menu), Footer
        ├── sections/              Hero, About, Skills, Projects, Education, Contact
        └── ui/                    Reusable pieces: Section, Card, Button,
                                   TagList, Highlight
```

Each component has its own CSS file next to it, so `Hero.tsx` and `Hero.css`
always live together.

### Reordering or removing a section

1. Move or delete its line inside `<main>` in `src/App.tsx`.
2. Delete its matching entry from `navLinks` in `src/data/portfolio.ts` so it
   also disappears from the menu.

---

## Responsive design

The CSS is written **mobile-first**: the default rules are the phone layout,
and `@media (min-width: ...)` blocks add the wider layouts on top.

| Breakpoint | What changes                                                  |
| ---------- | ------------------------------------------------------------- |
| 360px      | The name appears next to the logo                             |
| ~700px     | Education dates move beside the titles; footer becomes 2 columns |
| ~730px     | Skills and Projects become two columns                        |
| 780px      | About becomes text + facts panel side by side                 |
| 860px      | Hamburger menu is replaced by the full desktop navigation     |

Text sizes use CSS `clamp()`, so they scale smoothly with the screen width
rather than jumping at each breakpoint.

Accessibility bits that are already handled: a skip-to-content link, visible
keyboard focus rings, `aria-expanded` on the menu button, Escape to close the
mobile menu, and all animations disabled when the visitor's system asks for
reduced motion.

---

## Deploying to GitHub Pages

This is already set up. You only need to do the one-time steps once.

### One-time setup

1. Create a GitHub repository named **`PM-portfolio`**.
2. Push this project to it (see the commands below).
3. In the repository, go to **Settings -> Pages**, and under
   **Build and deployment**, set **Source** to **GitHub Actions**.

```bash
git remote add origin https://github.com/PaavkiM/PM-portfolio.git
git branch -M main
git push -u origin main
```

### After that

Every push to `main` rebuilds and redeploys the site automatically. You can
watch the progress in the repository's **Actions** tab. It takes about a
minute.

```bash
git add .
git commit -m "Update project descriptions"
git push
```

### Important: the `base` path

`vite.config.ts` contains:

```ts
base: '/PM-portfolio/',
```

This **must** match your repository name, because GitHub Pages serves the site
from a sub-folder. If the two do not match, the deployed page loads as a blank
white screen.

- Renamed the repo? Update this to `'/your-new-name/'`.
- Renamed it to `PaavkiM.github.io` (a user site served at the root)? Use `'/'`.

### If the deployed site is blank

Almost always the `base` path above. Open the browser console on the live
site: 404 errors on the `.js` and `.css` files confirm it. Fix `base`, commit
and push.
