// Ensure Vitest's `expect` is available to imported setup helpers
import { expect, vi } from 'vitest';
(globalThis as any).expect = expect;
// Provide a `jest` alias for tests still using `jest.*` APIs
(globalThis as any).jest = vi;

// Mock Next runtime modules that are not available in the Vitest environment.
// These are lightweight test-time shims to prevent runtime errors during tests.
vi.mock('next/font/google', async () => {
  // next/font/google's runtime exports are functions that return an object
  // with a `style` field (e.g. `const inter = Inter({...}); inter.style.fontFamily`).
  // Provide a lightweight mock that returns objects with the expected shape.
  return {
    Inter: (options?: any) => ({ style: { fontFamily: 'Inter, system-ui' } }),
    Sacramento: (options?: any) => ({
      style: { fontFamily: 'Sacramento, cursive' },
    }),
  };
});

// Use explicit importable helpers from `utils/test-utils` to control Next runtime
// mocks in tests (improves isolation and maintainability).
import {
  // Storybook mocks (used directly in tests)
  headers,
  getRouter,
  // Runtime helpers for setup (in-memory fallback used by these mocks)
  getRuntimeHeaders,
  getRuntimePathname,
} from './utils/test-utils';

vi.mock('next/navigation', async () => {
  return {
    usePathname: () => {
      // Prefer the runtime helper value (setRuntimePathname in tests/setup).
      try {
        return getRuntimePathname();
      } catch (e) {
        return '/';
      }
    },
    useSearchParams: () => new URLSearchParams(),
  };
});

vi.mock('next/headers', async () => {
  return {
    headers: async () => ({
      get: (name: string) => {
        try {
          // Read from the runtime helper map first. Tests can set these via
          // `setRuntimeHeaders` when they don't want to use the Storybook mock.
          const map = getRuntimeHeaders();
          if (name in map) return map[name as keyof typeof map];
        } catch (e) {
          // fallthrough to storybook mock if present
        }

        try {
          const h = headers();
          const val = h?.get(name);
          if (val !== undefined) return val;
        } catch (e) {
          // fallthrough to defaults
        }

        // sensible defaults for tests
        if (name === 'x-next-pathname') return '/';
        return null;
      },
    }),
  };
});

import '@testing-library/jest-dom';
import 'cross-fetch/polyfill';
import { matchers } from '@emotion/jest';

// Add the custom matchers provided by '@emotion/jest'
(expect as any).extend(matchers);
