// Provide the StorybookConfig type from @storybook/types under the
// @storybook/nextjs-vite module so importing it from the framework package
// (as shown in Storybook docs) works in our TypeScript setup.
// This file is included only by `tsconfig.test.json` (dev/test only).
declare module '@storybook/nextjs-vite' {
  /** Re-export the canonical StorybookConfig type from @storybook/types */
  export type StorybookConfig = import('@storybook/types').StorybookConfig;
}
