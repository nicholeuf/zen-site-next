![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![MUI](https://img.shields.io/badge/MUI-%230081CB.svg?style=for-the-badge&logo=mui&logoColor=white)
![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)
![Vitest](https://img.shields.io/badge/-vitest-%2349C5B6?style=for-the-badge&logo=vitest&logoColor=white)
![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)

![github actions](https://github.com/nicholeuf/zen-site-next/actions/workflows/workflow.yaml/badge.svg)
[![codecov](https://codecov.io/gh/nicholeuf/zen-site-next/graph/badge.svg?token=DVTFETZP3V)](https://codecov.io/gh/nicholeuf/zen-site-next)

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

Run local checks:

Production (CI-like):

```bash
pnpm -s tsc -p tsconfig.build.json
```

Dev/Storybook (editor surface):

```bash
pnpm -s tsc -p tsconfig.test.json
```

