## TypeScript configuration overview (dev vs build)

This project uses a split TypeScript configuration to keep the developer experience fast and forgiving while enforcing stricter checks for CI/production builds.

- `tsconfig.json` (root)
  - Purpose: developer/IDE convenience and `next dev`.
  - Not intended to be the canonical strict config for CI.

- `tsconfig.base.json`
  - Shared compilerOptions used by both build/test configs.

- `tsconfig.build.json`
  - Purpose: strict production/CI checks. Extend `tsconfig.base.json` and enable stricter flags used by CI.
  - This is the config used for production type-checks and is wired into the build pipeline (see `package.json` build script and `NEXT_TSCONFIG` usage in `next.config.ts`).
  - This is the config used for production type-checks and is wired into the build pipeline — the build script now passes it explicitly to Next via the CLI flag `--tsconfig`.

- `tsconfig.test.json`
  - Purpose: test/storybook/dev type-checking.
  - Extends `tsconfig.base.json` and includes developer-only paths/types (e.g., `types/`) so Storybook and Vitest can type-check without polluting production checks.

## Dev-only ambient/type declarations

We keep dev-only ambient declarations and small shims inside the `types/` folder. These files are picked up by `tsconfig.test.json` (see the `include` entry `"types/**/*"`).

Current example:

- `types/jest-styled-components.d.ts`
  - Adds a narrow augmentation so `expect(...).toHaveStyleRule(...)` is recognized during `tsc -p tsconfig.test.json` runs.
  - This file is intentionally dev-only and will not be included in `tsconfig.build.json`.

## Guidance

- If you need to add other dev-only shims (storybook bridges, test matchers, mocks), add them under `types/` and they will automatically be included by the test tsconfig.
- Prefer narrow augmentations that only affect the exact types you need. Avoid widening global `expect` or other globals if possible.
- To run the strict production check locally (same as CI):

```bash
pnpm -s tsc -p tsconfig.build.json
```

- To run the dev/test type-check locally (includes `types/`):

```bash
pnpm -s tsc -p tsconfig.test.json
```

If you want to remove the dev-only augmentations later, move the file out of `types/` and update `tsconfig.test.json` accordingly.

If anything here needs clarification or you'd like me to add an internal doc that explains how to author shims with concrete examples, I can add that too.

## TypeScript configuration strategy for this repo

This repository separates shared, production, and development TypeScript settings so Next's build stays focused on app code while Storybook and test tooling can opt into extra types and includes.

Files added

- `tsconfig.base.json` — shared compilerOptions (paths, strictness, module settings). Intended to be `extends` by other configs.
- `tsconfig.dev.json` — development config that extends the base and enables dev-only globals/types (e.g., `vitest`, Storybook). Includes stories and test files.

Why this layout

- Next.js (production) should use `tsconfig.json` at the repo root during `next build`/type-check. Keeping it minimal prevents production builds from failing due to test/story types.
- Dev configs include additional `types` and `include` entries so your editor, Storybook, and test runners see the right globals without polluting the production type-check.
- VS Code recognizes multiple `tsconfig` files as separate projects, so you still get correct IntelliSense for stories/tests.

How to use

- Keep `tsconfig.json` as the Next production config (we will later update it to `extend` `tsconfig.base.json`). For now it remains untouched.
- For local type-checking of dev artifacts (optional):

```bash
pnpm tsc -p tsconfig.dev.json
```

Or use the npm script (recommended) from the repo root:

```bash
pnpm run typecheck:dev
```

- For production type checking (what Next uses):

```bash
pnpm tsc -p tsconfig.json
# or just run
pnpm next build
```

In this repository we use a stricter build config for production/preview builds. Local development uses `tsconfig.json` (developer-friendly) while CI and Vercel use `tsconfig.build.json`.

Commands:

```bash
# developer (what your editor & `next dev` use)
pnpm tsc -p tsconfig.json

# strict production type-check used by CI / Vercel
pnpm tsc -p tsconfig.build.json

# tests & storybook (dev-only)
pnpm tsc -p tsconfig.test.json
```

Storybook notes

- Point Storybook to `tsconfig.dev.json` if needed (it will pick up a nearby tsconfig by default). If Storybook still surfaces unrelated errors, consider disabling its type-check and run `tsc -p tsconfig.dev.json` separately:

```js
// .storybook/main.ts
module.exports = {
  // ...
  typescript: {
    // disable type-check in Storybook's build so it uses Babel/Vite for TS compilation
    check: false,
    reactDocgen: false,
  },
};
```

- If you use path aliases (from `tsconfig.base.json` `paths`), ensure Storybook/Vite/webpack use the same alias resolution (e.g., `tsconfig-paths-webpack-plugin` for webpack or `vite-tsconfig-paths` for Vite).

Next steps (I can implement these for you)

- Update `tsconfig.json` to `extend` `tsconfig.base.json` and narrow `include`/`exclude` to Next's app folders.
- Optionally create `tsconfig.storybook.json` and `tsconfig.vitest.json` if you want separate configs per tool.
- Add a `.vscode/settings.json` to surface both TS projects cleanly in the editor.

Would you like me to apply the `tsconfig.json` update now (so it extends the base) and/or add a Storybook-specific config next?

### Generated files

Do not edit autogenerated files (for example files generated by Sentry). These files may be overwritten by their generator and should remain in their canonical form. If TypeScript complains about imports in generated files, prefer fixing module resolution in `tsconfig.dev.json` (for dev-only checks) or `tsconfig.json` (for production) rather than modifying generated code.

CI note: the repo includes a GitHub Actions workflow `.github/workflows/typecheck.yml` that runs both the production and dev typechecks on PRs and pushes to `main`.
