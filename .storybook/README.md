# Storybook: MUI & TypeScript notes

This repository configures Storybook to work well with MUI (Emotion) and to pick up local TypeScript module augmentations (for example the custom MUI typography `sacramento` variant).

What this file documents

- The Storybook preview file used in this repo is `.storybook/preview.ts` (or `.ts/.tsx`), which wires up MUI theme, GlobalStyles and an Emotion cache.
- `.storybook/tsconfig.json` exists to provide a Storybook-specific TypeScript configuration; in this repo it extends `tsconfig.test.json` so Storybook and the editor pick up type augmentations and the right test/dev types without adding stories to the root TypeScript build.

Why this helps

- Emotion + MUI requires controlling CSS injection order to avoid missing or mis-ordered styles. The Emotion cache with `prepend: true` is the recommended approach in Storybook and is applied by `MuiCacheDecorator`.
- Story files (and the editor) need to see `*.d.ts` augmentations (for example `src/types/mui-overrides.d.ts`). Keeping a Storybook tsconfig lets the language service and Storybook tooling see those declarations without forcing stories into the main project `tsc` build.

Editor / TS server

- After pulling changes that touch any `tsconfig.*` files, restart your editor's TypeScript server (or reload the window) so the new config is picked up.

Validation commands

- Type-check the Storybook tsconfig only (fast check of stories and type augmentations):

```bash
npx tsc --noEmit -p .storybook/tsconfig.json
```

- Start Storybook for a visual check:

```bash
pnpm storybook
```

Notes and common follow-ups

- You may keep the triple-slash reference in individual stories if you prefer, but with `.storybook/tsconfig.json` it is usually not required.
- If Storybook's docs generation (react-docgen) or a plugin fails to resolve types, you can:
  - Configure `typescript.reactDocgen` / reactDocgenTypescript options in `.storybook/main.ts`, or
  - Adjust `types` in `.storybook/tsconfig.json` to narrow or remove inherited test types.

- Root `tsconfig.json` in this repo now defines `baseUrl`, which improves path-alias resolution for stories and the editor; keep the `.storybook` tsconfig to control Storybook-specific includes and types.

- If you want Storybook to avoid picking up test globals entirely, override `compilerOptions.types` inside `.storybook/tsconfig.json` (for example `"types": ["node"]`) to replace the inherited array from the root `tsconfig.json`.
