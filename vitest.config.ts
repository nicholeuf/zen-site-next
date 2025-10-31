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
    // Configure reporters. Pass options directly to the jest-junit reporter
    // so it writes the XML to the expected location.
    reporters: [
      'default',
      [
        'jest-junit',
        {
          // vitest expands <rootDir> to the repository root
          outputFile: '<rootDir>/junit/junit.xml',
        },
      ],
    ],
    // Exclude Storybook files and stories from coverage collection
    coverage: {
      enabled: true,
      provider: 'v8',
      exclude: [
        '.storybook/**',
        '**/*.stories.*',
        '**/*.stories.@(ts|tsx|js|jsx|mdx)',
        // Narrow the utils exclusion to the repository root `utils/` so
        // app-side utilities under `src/` are still measured by coverage.
        'utils/**',
        '**/*.mock.*',
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
