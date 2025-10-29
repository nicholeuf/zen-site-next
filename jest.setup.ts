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

// Allow tests to override header values by setting `global.__TEST_HEADERS = { 'user-agent': '...' }`.
(globalThis as any).__TEST_HEADERS = (globalThis as any).__TEST_HEADERS || {};
// Helper to let tests set headers easily: `global.__setTestHeaders({ 'user-agent': '...', 'x-next-pathname': '/work' })`
(globalThis as any).__setTestHeaders = (obj: Record<string, string | null>) => {
  (globalThis as any).__TEST_HEADERS = {
    ...(globalThis as any).__TEST_HEADERS,
    ...obj,
  };
};

// Provide a mockable pathname for components that use `next/navigation`'s usePathname
(globalThis as any).__TEST_PATHNAME =
  (globalThis as any).__TEST_PATHNAME || '/';
(globalThis as any).__setTestPathname = (p: string) => {
  (globalThis as any).__TEST_PATHNAME = p;
};
vi.mock('next/navigation', async () => {
  return {
    usePathname: () => (globalThis as any).__TEST_PATHNAME,
    useSearchParams: () => new URLSearchParams(),
  };
});
vi.mock('next/headers', async () => {
  return {
    headers: async () => ({
      get: (name: string) => {
        const map = (globalThis as any).__TEST_HEADERS || {};
        if (name in map) return map[name];
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
