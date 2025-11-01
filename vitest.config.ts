import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { defineConfig } from 'vitest/config';

import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';

import { playwright } from '@vitest/browser-playwright';

const dirname =
  typeof __dirname !== 'undefined'
    ? __dirname
    : path.dirname(fileURLToPath(import.meta.url));

// More info at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon
export default defineConfig({
  // Resolve TS path aliases at runtime for Vitest/Vite
  resolve: {
    alias: [
      { find: '@', replacement: path.join(dirname, 'src') },
      { find: 'utils', replacement: path.join(dirname, 'utils') },
      {
        find: 'test-utils',
        replacement: path.join(dirname, 'utils/test-utils'),
      },
      // https://www.npmjs.com/package/next-router-mock#usage-with-storybook
      {
        find: 'next/router',
        replacement: path.join(dirname, 'next-router-mock'),
      },
    ],
  },
  test: {
    // Inject globals like `describe`, `it`, `expect` so setup files and tests don't need to import them
    globals: true,
    reporters: ['default', 'jest-junit'],

    // Exclude Storybook files and stories from coverage collection
    coverage: {
      enabled: true,
      provider: 'v8',
      include: ['src/**/*.{ts,tsx,js,jsx}'],
      exclude: [
        '**/*.stories.*',
        '**/*.stories.@(ts|tsx|js|jsx|mdx)',
        '**/*.mock.*',
        'src/types/**',
      ],
    },
    // Default project: run unit/test files in the src folder
    projects: [
      {
        extends: true,
        test: {
          name: 'unit',
          environment: 'jsdom',
          // Only include typical test file patterns inside src
          include: ['src/**/*.{test,spec}.{ts,tsx,js,jsx}'],
          // Reuse the existing setup which imports testing-library matchers
          setupFiles: ['./vitest.setup.ts'],
        },
      },
      {
        extends: true,
        plugins: [
          // The plugin will run tests for the stories defined in your Storybook config
          // See options at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon#storybooktest
          storybookTest({ configDir: path.join(dirname, '.storybook') }),
        ],
        test: {
          name: 'storybook',
          browser: {
            enabled: true,
            headless: true,
            provider: playwright({}),
            instances: [{ browser: 'chromium' }],
          },
          setupFiles: ['.storybook/vitest.setup.ts'],
        },
      },
    ],
  },
});
