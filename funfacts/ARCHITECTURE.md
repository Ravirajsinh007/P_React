# FunFacts — Project Architecture

**Date:** 2026-02-21

## Project Overview

FunFacts is a small Vite + React + TypeScript single-page application. It is organized to keep UI, assets, and configuration separate and easy to navigate.

## Tech Stack

- **Frontend:** React, TypeScript
- **Bundler / Dev server:** Vite
- **Styling:** CSS (global files in `src`) — adaptable to CSS Modules or Tailwind
- **Testing (suggested):** Vitest + React Testing Library

## High-level Architecture

- Single-page app (client-side rendering)
- Entry: `src/main.tsx` — mounts the React tree
- Root component: `src/App.tsx` — sets up routing, global providers, and layout

## Recommended Folder Structure

```
funfacts/
├─ public/
├─ src/
│  ├─ assets/        # images, fonts
│  ├─ components/    # reusable components
│  ├─ pages/         # route-level components / views
│  ├─ hooks/         # custom React hooks
│  ├─ styles/        # global and modular styles
│  ├─ App.tsx
│  ├─ main.tsx
│  ├─ index.css
│  └─ vite-env.d.ts
├─ index.html
├─ package.json
├─ vite.config.ts
└─ tsconfig.json
```

## Key Files

- `index.html` — app shell used by Vite
- `src/main.tsx` — app entry and provider setup
- `src/App.tsx` — router and layout
- `vite.config.ts` — build/dev config

## Component Organization Guidelines

- Keep components small and focused (single responsibility).
- Use `components/` for generic UI (buttons, inputs) and `pages/` for screens.
- Prefer props-driven components; lift state up when multiple children need it.

## State & Data Flow

- Use local component state for UI concerns.
- Use React Context or lightweight state libraries for shared/global state.
- Fetch data in pages or custom hooks (`hooks/useFetchSomething.ts`).

## Routing

- Place route components in `src/pages/` and configure routes in `App.tsx`.

## Build & Deploy

- Build: `npm run build` (Vite produces `dist/`)
- Deploy to static hosts (Netlify, Vercel, GitHub Pages) or a CDN.

## Testing

- Add unit and component tests under `src/__tests__/` or alongside files with `.test.tsx`.

## Conventions

- Files: `PascalCase` for React components, `camelCase` for hooks and helpers.
- Types: keep shared types in `src/types/` or `src/types.ts`.
- Imports: use absolute/TS path aliases if configured in `tsconfig.json`.

## Next Steps (optional additions)

- Add a component map (diagram) showing major UI pieces.
- Add a state map showing where data originates and is stored.
- Add CI pipeline and linting rules to enforce conventions.

---

If you want, I can add a component diagram SVG, a more detailed state map, or adapt the doc to match an existing folder layout.
