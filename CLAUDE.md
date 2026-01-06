# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build & Development Commands

```bash
npm run dev      # Start development server at localhost:3000
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint (next/core-web-vitals)
```

## Architecture

Next.js 12 portfolio site with pages router, Tailwind CSS, and next-themes for dark mode.

### Key Directories
- `pages/` - Route pages (index.js is home, `/projects/*.jsx` for project detail pages, `/resume.jsx`)
- `components/` - React components (Navbar, Main, About, Skills, Projects, ProjectItem, Contact, ThemeBtn)
- `styles/globals.css` - Tailwind directives and custom styles
- `public/assets/` - Images organized by type (skills/, projects/)

### Theme System
- `next-themes` with `attribute="class"` and `defaultTheme='dark'`
- ThemeProvider wraps app in `_app.js`
- ThemeBtn uses dynamic import with `ssr: false` to avoid hydration issues
- All components use `dark:` Tailwind variants

### Styling Conventions
- Primary color: `#5651e5` (indigo), secondary: `#709dff`
- Container width: `max-w-[1240px]` centered with `m-auto`
- Shadow pattern: `shadow-xl shadow-gray-400 dark:shadow-indigo-500/50`
- Hover animations: `hover:scale-105` or `hover:scale-110` with `ease-in duration-300`
- Section navigation via anchor IDs (#about, #skills, #projects, #contact)

### Component Patterns
- Default exports, PascalCase naming
- Next.js `Image` for optimized images
- `ProjectItem` is reusable; receives title, backgroundImg, projectUrl props
- Contact form posts to Getform.io

## Git Commit Convention

Use emoji prefix: `👍 IMPROVE:` for enhancements, `🐛 FIX:` for bug fixes
