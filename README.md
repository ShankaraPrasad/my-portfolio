# Shankara Prasad Gudem — Portfolio

A premium, animated personal portfolio built with React, Vite, Tailwind CSS, and Framer Motion.

## Stack

- React 18 + Vite
- Tailwind CSS (custom design tokens — indigo `#4F46E5` primary, soft-white surfaces)
- Framer Motion (scroll reveals, hover interactions, page-load sequence)
- React Icons + Lucide React
- React Scroll (smooth in-page navigation)
- Live GitHub API integration for the open-source section

## Getting started

```bash
npm install
npm run dev
```

Then open the printed local URL (usually `http://localhost:5173`).

To create a production build:

```bash
npm run build
npm run preview
```

## Project structure

```
src/
  components/     UI building blocks, one per section/feature
  context/        Theme (dark/light) context
  data/           All copy and content lives in data/profile.js
  hooks/          useActiveSection (scroll spy), useCountUp (animated stats)
  App.jsx         Composes all sections
  main.jsx        React entry point
  index.css       Tailwind layers + design system utility classes
```

## Customizing content

Almost all text, links, skills, projects, education, and certifications live in
**`src/data/profile.js`** — edit that single file to update the site's content.

## Adding your resume

Drop a `resume.pdf` file into the `public/` folder. The "Download Resume" buttons
already point to `/resume.pdf`.

## GitHub stats

The "GitHub activity" section calls the public GitHub REST API
(`api.github.com/users/<username>`) directly from the browser — no token or
backend required. It automatically shows a loading state, and a graceful
fallback if the API is unreachable or rate-limited.

## Dark mode

Toggle in the navbar. Preference is stored in `localStorage` and respects the
visitor's OS preference on first visit.
