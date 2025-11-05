// Type-only bridge: re-export Storybook types from '@storybook/react' so
// story files can import from '@storybook/nextjs-vite' while TypeScript
// resolves the CSF types correctly. This is a dev-only types file.

declare module '@storybook/nextjs-vite' {
  export * from '@storybook/react';
  // Provide fallback type aliases for CSF helpers when direct re-exports
  // don't expose the exact named types in some package layouts.
  // These are dev-only any-typed aliases to keep stories type-checking.
  export type Meta<T = any> = any;
  export type StoryObj<T = any> = any;
}
