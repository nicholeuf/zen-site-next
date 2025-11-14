![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![MUI](https://img.shields.io/badge/MUI-%230081CB.svg?style=for-the-badge&logo=mui&logoColor=white)
![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)
![Vitest](https://img.shields.io/badge/-vitest-%2349C5B6?style=for-the-badge&logo=vitest&logoColor=white)
![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)

[![github actions](https://github.com/nicholeuf/zen-site-next/actions/workflows/workflow.yaml/badge.svg)](https://github.com/nicholeuf/zen-site-next/actions/workflows/workflow.yaml)
[![Deploy Storybook](https://github.com/nicholeuf/zen-site-next/actions/workflows/deploy-storybook.yml/badge.svg)](https://github.com/nicholeuf/zen-site-next/actions/workflows/deploy-storybook.yml)
[![codecov](https://codecov.io/gh/nicholeuf/zen-site-next/graph/badge.svg?token=DVTFETZP3V)](https://codecov.io/gh/nicholeuf/zen-site-next)
[![Storybook](https://img.shields.io/badge/Storybook-%23FF4785?style=for-the-badge&logo=storybook&logoColor=white)](https://nicholeuf.github.io/zen-site-next)

This is a personal portfolio website for Nichole Frey, a Full-Stack Developer. Built with [Next.js](https://nextjs.org/) and bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Storybook

This project includes a Storybook setup for visual component development and documentation. It is pre-configured to work with MUI (Emotion) and to pick up local TypeScript module augmentations.

See `.storybook/README.md` for details, validation commands, and troubleshooting tips.

To start Storybook locally:

```bash
pnpm storybook
```

View the published Storybook: https://nicholeuf.github.io/zen-site-next

### Storybook interactions & hover

Notes on why some visual states are implemented via Storybook interactions and the
`storybook-addon-pseudo-states` addon:

- Focus-visible: keyboard focus is best demonstrated with Storybook play interactions
  (we use `userEvent.tab()` in the `FocusVisible` story). Programmatic focus via the
  interactions API ensures the component receives the same :focus-visible styles that
  keyboard users see in the app.
- Hover: due to differences in how Storybook (and headless browsers) handle synthetic
  pointer events, the CSS `:hover` pseudo-class may not always paint reliably during
  play interactions. To ensure visual coverage in Storybook we include the
  `storybook-addon-pseudo-states` addon (already configured in this project) which
  can render `:hover`/`:active` states in the canvas. Additionally, some stories
  include low-level event dispatches (e.g. `pointerOver`, `mouseEnter`) before
  calling `userEvent.hover()` as a fallback to trigger the pseudo-state when needed.

Debug tips:

- Open the browser devtools while viewing the story and check the console for the
  play function logs (some Hover stories log computed styles to help debug).
- If hover isn't appearing in CI or headless runs, try running Storybook locally
  (non-headless) to confirm it's a paint/timing issue. Increasing a small delay in
  the story's `play` function often helps.
- If you want deterministic assertions for CI, consider using a test-only attribute
  toggle (onMouseEnter/onMouseLeave) or asserting the presence of a class instead of
  relying on the browser's pseudo-class rendering.

## Testing

This project uses Vitest for unit and integration tests and integrates Storybook tests via the Storybook Vitest addon.

- Run the test runner interactively:

```bash
pnpm test
# or
npm run test
```

- Run tests in CI / headless mode:

```bash
pnpm run test:ci
```

- Update snapshots (used by the GitHub workflow):

```bash
pnpm run test:update
```

## Formatting & linting

This project uses Biome for both formatting and linting (replacing the previous Prettier + ESLint setup).

- Check code for linting issues:

```bash
pnpm run lint
# or
npm run lint
```

- Automatically format files:

```bash
pnpm run format
# or
npm run format
```

The scripts above map to the `biome` CLI (`biome check` and `biome format --write`) as declared in `package.json`.

If you need custom Biome rules or configuration, add a Biome config file (for example `.biomerc.json` or a `biome.config.*` file) at the repository root.

Editor integrations: install the Biome extension or configure your editor to run `biome` on save for a consistent developer experience.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## TypeScript setup (dev vs production)

This repository keeps a short guide in `TSConfig-README.md` that explains the split between development and production TypeScript configurations. Quick pointers:

- The strict production config used by CI and `next build` is `tsconfig.build.json`.
- The developer/storybook/test config (includes dev-only `types/`) is `tsconfig.test.json`.
- To help VS Code resolve the workspace TypeScript, there's an example file at `.vscode-settings-example.json` you can copy into your local `.vscode/settings.json`.

### Next.js NODE_ENV & tsconfig selection

Next.js sets NODE_ENV for you: `next dev` runs with `development`, while `next build` and production runs use `production`. This repo's `next.config.ts` relies on that behavior to pick the strict tsconfig at build time. See `TSConfig-README.md` for more details.

If you want to run the strict production type-check locally, run:

```bash
pnpm -s tsc -p tsconfig.build.json
```

Run local checks:

Production (CI-like):

```bash
pnpm -s tsc -p tsconfig.build.json
```

Dev/Storybook (editor surface):

```bash
pnpm -s tsc -p tsconfig.test.json
```
