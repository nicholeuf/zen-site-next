# Storybook: MUI & TypeScript notes

This repository configures Storybook to work well with MUI (Emotion) and to pick up local TypeScript module augmentations (for example the custom MUI typography `sacramento` variant).

What was added

- `.storybook/preview.tsx`
  - Wraps stories with an Emotion `CacheProvider` (key: `mui`, `prepend: true`). This ensures MUI's styles are injected in the correct order inside Storybook.
  - Keeps your existing `withThemeFromJSXProvider` usage (so `ThemeProvider` + `GlobalStyles` are still applied).

- `.storybook/tsconfig.json`
  - Extends the project's root `tsconfig.json` and includes `src/types/**/*.d.ts` and story files so the TypeScript language server and Storybook type-checking pick up your module augmentation files (like `src/types/mui-overrides.d.ts`).
  - Excludes test files (`../src/**/*.test.*`, `../src/**/*.spec.*`) so Jest/Vitest-specific globals and matchers don't interfere with Storybook's type checks.

Why this helps

- Emotion + MUI requires controlling injection order to avoid missing or mis-ordered styles. The Emotion cache with `prepend: true` is the recommended approach in Storybook.
- Story files (and the editor) need to see `*.d.ts` augmentations. Adding a Storybook-specific tsconfig gives the editor a configuration that includes those declarations, without adding stories into the root TypeScript build.

Editor / TS server

- After pulling these changes, restart your editor's TypeScript server (or reload the window) so the new `.storybook/tsconfig.json` is picked up by the language service.

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

- You may keep the triple-slash reference in individual stories if you prefer, but with `.storybook/tsconfig.json` it isn't required.
- If Storybook's docs generation (react-docgen) or a plugin fails to resolve types, you can:
  - Configure `typescript.reactDocgen` / reactDocgenTypescript options in `.storybook/main.ts`, or
  - Adjust `types` in `.storybook/tsconfig.json` to narrow or remove inherited test types.

- If you want Storybook to avoid picking up test globals entirely, override `compilerOptions.types` inside `.storybook/tsconfig.json` (for example `"types": ["node"]`) to replace the inherited array from the root `tsconfig.json`.
