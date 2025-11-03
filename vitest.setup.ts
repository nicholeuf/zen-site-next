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

import '@testing-library/jest-dom';
import 'cross-fetch/polyfill';
import { matchers } from '@emotion/jest';

// Add the custom matchers provided by '@emotion/jest'
(expect as any).extend(matchers);

// Prevent Sentry from initializing real instrumentation in the test environment.
// Sentry can create intervals/workers that may keep the Node process alive in CI.
vi.mock('@sentry/nextjs', () => {
  return {
    init: () => {},
    captureRouterTransitionStart: () => {},
    captureRequestError: () => {},
    captureException: () => {},
    captureMessage: () => {},
    // integrations helpers used in our code
    replayIntegration: () => undefined,
    consoleLoggingIntegration: () => undefined,
  };
});
