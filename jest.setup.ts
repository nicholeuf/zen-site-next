// Backwards-compatible shim for the old `jest.setup.ts` filename.
// This file delegates to `vitest.setup.ts` so existing references keep working.
import './vitest.setup.ts';

// No exports; the imported setup file performs global test setup.
