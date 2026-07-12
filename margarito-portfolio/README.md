# Margarito Trujillo — AI Annotation Specialist Portfolio

A dark, professional portfolio site built with React, Tailwind CSS, and Framer Motion.
Design concept: every section is framed like a region on an annotation canvas — bounding-box
corner brackets, class-label tags, and confidence scores are used throughout as the site's
recurring visual signature, tying the design language directly to the annotation/CV work itself.

## Tech stack

- **React 18** + **Vite** — app shell and dev server
- **Tailwind CSS** — styling, with a custom dark palette (`ink`/`mist`/`truth`/`pred` tokens)
- **Framer Motion** — scroll reveals, hero entrance sequence, hover/tap interactions
- **lucide-react** — icon set

## File structure

```
margarito-portfolio/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── src/
│   ├── main.jsx
│   ├── App.jsx
│   ├── index.css
│   └── components/
│       ├── Navbar.jsx
│       ├── Hero.jsx                 (headline, typing animation, mock annotation canvas)
│       ├── About.jsx                (bio + animated stat counters)
│       ├── Skills.jsx               (6 categorized skill-badge groups)
│       ├── Experience.jsx           (timeline: Lumen Technology + freelance)
│       ├── Projects.jsx             (filterable project gallery, 5 projects)
│       ├── Education.jsx
│       ├── Certifications.jsx
│       ├── AIEvaluation.jsx         (evaluation console visual)
│       ├── Contact.jsx              (contact channels + form UI)
│       ├── Footer.jsx
│       ├── ThemeToggle.jsx          (dark / high-contrast "review mode")
│       ├── SectionHeading.jsx       (shared section header w/ tag + confidence)
│       └── AnimatedCounter.jsx      (shared counter used in About)
└── README.md
```

## Setup instructions

Requires Node.js 18+.

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server (http://localhost:5173)
npm run dev

# 3. Build for production (outputs to /dist)
npm run build

# 4. Preview the production build locally
npm run preview
```

## Editing content

All copy and data live directly in each component file as plain arrays/objects near the top
(e.g. `PROJECTS` in `Projects.jsx`, `ROLES` in `Experience.jsx`, `CERTS` in `Certifications.jsx`),
so updating text, links, or adding a project/role/cert doesn't require touching layout code.

The contact form in `Contact.jsx` currently only simulates submission client-side. To make it
functional, wire the `handleSubmit` function to a form backend such as Formspree, Resend, or a
custom API route.

## Deployment (Vercel)

**Option A — Vercel CLI**

```bash
npm install -g vercel
vercel login
vercel        # first deploy, follow the prompts (framework preset: Vite)
vercel --prod # promote to production
```

**Option B — Git-based deploy**

1. Push this project to a GitHub/GitLab/Bitbucket repository.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repository.
3. Vercel auto-detects the Vite preset:
   - Build command: `vite build`
   - Output directory: `dist`
4. Click **Deploy**. Every push to the connected branch redeploys automatically.

No environment variables are required for the base site. If you connect a real form backend,
add its API key/endpoint as an environment variable in the Vercel project settings and reference
it from `Contact.jsx`.

## Notes

- Respects `prefers-reduced-motion`.
- All interactive elements have visible keyboard focus states.
- Responsive from ~360px mobile widths up through desktop.
