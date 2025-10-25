# Repository Guidelines

## Project Structure & Module Organization

- src/ — Main application code
  - src/app — Next.js App Router pages, layout, styles, SEO (robots/sitemap), and feature folders (about, contact, work)
  - src/components — Reusable React components (AppLayout, Header, Footer, etc.)
  - src/types — Shared TypeScript types
  - src/instrumentation*.ts — Sentry initialization (client and server)
  - src/proxy.ts — Middleware-style path handling rules
- utils/ — Test utilities (test-utils.tsx)
- public/ — Static assets (images/, icons)
- Configuration & tooling: next.config.ts, tsconfig.json, jest.config.ts, jest.setup.ts, .eslintrc.json, .prettierrc, .editorconfig, vercel.json, Dockerfile, docker-compose.yaml
- CI: .github/workflows/

## Build, Test, and Development Commands

```bash
# Start dev server (http://localhost:3000)
pnpm dev

# Debug mode
docker compose up --build   # or: pnpm run dev:debug in local Node

# Build production assets
pnpm build

# Start production server
pnpm start

# Lint and TypeScript checks
pnpm lint
pnpm tsc

# Run tests (Jest)
pnpm test
pnpm run test:watch
pnpm run test:ci
pnpm run test:update
```

## Coding Style & Naming Conventions

- Indentation: spaces, width 2 (.editorconfig, .prettierrc)
- File naming: TypeScript/TSX in camelCase or PascalCase as in repo (e.g., src/app/layout.tsx, src/components/AppLayout/index.tsx)
- Functions/variables: camelCase; React components PascalCase
- Linting/formatting: ESLint (extends next/core-web-vitals) with prettier plugin; run with `pnpm lint`. Prettier settings in .prettierrc

## Testing Guidelines

- Framework: Jest + Testing Library (jsdom). Snapshot serializer for @emotion/jest
- Test files: `*.test.ts`/`*.test.tsx` located alongside sources (e.g., src/app/page.test.tsx)
- Running tests: `pnpm test` (CI: `pnpm run test:ci`, watch: `pnpm run test:watch`)
- Coverage: enabled; output to coverage/; collected from src/**/*.{ts,tsx}

## Commit & Pull Request Guidelines

- Commit messages: free-form in history (e.g., "workflow changes", "test setup", "tweaks"). Prefer clear, imperative titles and scoped changes
- PRs: ensure lint, tests, and type checks pass; include context and screenshots for UI changes when applicable
- Branches: no enforced convention found; use short, descriptive names (e.g., feature/sentry-setup, fix/header-spacing)

---

# Repository Tour

## 🎯 What This Repository Does

zen-site-next is a personal portfolio website for Nichole Frey built with Next.js, React, TypeScript, and MUI.

Key responsibilities:
- Serve a performant portfolio with About, Contact, and Work pages
- Provide SEO endpoints (sitemap, robots) and error handling
- Capture observability with Sentry and support CI/CD and testing

---

## 🏗️ Architecture Overview

### System Context
```
[Browser User] → [Next.js App Router (this repo)] → [External CDNs (Cloudinary images), Vercel/Node runtime]
                              ↓
                         [Sentry (error, tracing, replay)]
```

### Key Components
- Next.js App Router (src/app): Layout, routes, pages, styles, SEO utilities
- UI Components (src/components): AppLayout, Header, Footer, shared UI primitives
- Observability (src/instrumentation*.ts, sentry.*.config.ts): Sentry init for client/server, tracing, logging, replay
- Build/Runtime config (next.config.ts, vercel.json, Dockerfile): images, logging, Sentry webpack plugin, deploy config
- Testing (jest.config.ts, jest.setup.ts, utils/test-utils.tsx): Jest + Testing Library, emotion snapshots, jsdom

### Data Flow
1. Browser requests route handled by Next.js App Router under src/app
2. Root layout sets up theming (MUI), AppLayout, and Sentry tracing context
3. Pages render components; images may load via next/image from Cloudinary
4. Errors/events/logs flow to Sentry via instrumentation

---

## 📁 Project Structure [Partial Directory Tree]

```
./
├── src/
│  ├── app/
│  │  ├── layout.tsx                # Root layout, theming, Sentry context
│  │  ├── page.tsx                  # Home page + tests
│  │  ├── about/                    # About page + components/tests
│  │  ├── contact/                  # Contact page + tests
│  │  ├── work/                     # Work page + constants/tests
│  │  ├── lib/                      # Routing, base URL, feature flags
│  │  ├── styles/                   # Theme, global styles, CSS utils
│  │  ├── robots.ts, sitemap.ts     # SEO endpoints
│  │  └── global-error.jsx          # Error boundary with Sentry capture
│  ├── components/                  # Reusable UI (AppLayout, Header, Footer, etc.)
│  ├── instrumentation*.ts          # Sentry client/server initialization
│  ├── proxy.ts                     # Middleware-style route exclusion pattern
│  └── types/                       # Shared types
├── utils/test-utils.tsx            # Render helpers for tests
├── public/                         # Static assets
├── jest.config.ts, jest.setup.ts   # Jest configuration
├── next.config.ts                  # Next + Sentry plugin, image settings
├── tsconfig.json                   # TS paths ("@/*" and "test-utils")
├── Dockerfile, docker-compose.yaml # Local dev (debug ports) via Docker
└── vercel.json                     # Build settings for Vercel
```

### Key Files to Know

| File | Purpose | When You'd Touch It |
|------|---------|---------------------|
| src/app/layout.tsx | Root layout, theme, Sentry tracing | Update global UI, providers, or tracing context |
| src/app/page.tsx | Home page | Modify landing content |
| src/app/robots.ts, src/app/sitemap.ts | SEO endpoints | Adjust robots or sitemap generation |
| src/components/AppLayout/index.tsx | App shell (header/footer, main area) | Change global layout and structure |
| src/instrumentation.ts, src/instrumentation-client.ts | Sentry init | Tuning tracing, replay, logging |
| next.config.ts | Next/Sentry config, image domains | Image hosting, logging, Sentry upload options |
| jest.config.ts, jest.setup.ts | Testing setup | Add serializers, reporters, or setup libs |
| tsconfig.json | Path aliases and TS rules | Add aliases or tweak strictness |
| Dockerfile, docker-compose.yaml | Local dev via Docker | Debug, port mapping, env files |

---

## 🔧 Technology Stack

### Core Technologies
- Language: TypeScript (5.x config), JavaScript
- Framework: Next.js 16 (App Router)
- UI: React 19, MUI 7, Emotion 11
- Hosting/CI: Vercel (vercel.json), GitHub Actions (.github/workflows)

### Key Libraries
- @sentry/nextjs — Error monitoring, tracing, replay, console logging integration
- next-cloudinary — Optimized Cloudinary image delivery
- @mui/material, @emotion/react — Design system and styling
- @testing-library/react, jest — Unit/integration tests

### Development Tools
- ESLint (next/core-web-vitals) with prettier plugin
- Prettier (2-space, single quotes, width 80)
- Jest with jest-junit reporter (outputs to ./junit)
- Docker for local debug (Node 22-alpine)

---

## 🌐 External Dependencies

- Cloudinary (res.cloudinary.com) for remote image hosting (configured in next.config.ts)
- Sentry (org: nicholeuf, project: javascript-nextjs) for error reporting and performance

### Environment Variables (observed in code/config)

- NEXT_PUBLIC_SENTRY_DSN (client)
- Sentry plugin uses .env files via Next/Jest setup; .env.local is present for local dev

---

## 🔄 Common Workflows

- Local development
  - pnpm install
  - pnpm dev (or Docker: docker compose up --build)
- Run tests and coverage
  - pnpm test (coverage output to coverage/)
- Lint and format
  - pnpm lint; Prettier config in .prettierrc
- Deploy
  - Vercel uses installCommand and buildCommand from vercel.json

---

## 📈 Performance & Scale

- Image optimization via next/image with remotePatterns (Cloudinary)
- Source maps enabled (productionBrowserSourceMaps: true) for better debugging

## 🚨 Things to Be Careful About

- Sentry tunnelRoute (/monitoring) must not conflict with middleware/routes
- Keep path aliases in tsconfig.json ("@/*", "test-utils") in sync with imports
- Tests rely on Emotion snapshot serializer and Testing Library; update jest.setup.ts if adding matchers


Update to last commit: 65b2cd63a25bac5be989ee41a682a6e35d038991
