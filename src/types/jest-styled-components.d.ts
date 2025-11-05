// Minimal dev-only type augmentation for the `toHaveStyleRule` matcher used in tests.
// This file is intentionally small and only included by `tsconfig.dev.json` so it
// doesn't affect production type-checking.

// Minimal dev-only type augmentation for the `toHaveStyleRule` matcher used in tests.
// This file is intentionally small and only included by the test/dev tsconfig so it
// doesn't affect production type-checking.

// Augment the `jest` namespace used by @types/jest. @types/jest declares
// `interface Matchers<R, T = {}>` so we must match that shape here.
declare global {
  namespace jest {
    interface Matchers<R = any, T = {}> {
      toHaveStyleRule(property: string, value?: any, options?: any): R;
    }
  }
}

// Some libs refer to a global `JestMatchers<T>` or a generic `Matchers<R, T>` shape
// outside the `jest` namespace. Provide broad ambient declarations to satisfy
// whichever variant the type-checker ends up using.
declare global {
  // Generic matcher shape used in a few testing type stacks: make the method available
  // under the common generic order (R, T) and also the reverse to be resilient.
  interface Matchers<R = any, T = any> {
    toHaveStyleRule(property: string, value?: any, options?: any): R;
  }

  // Sometimes code or helper libs expose `JestMatchers<T>` as an interface name.
  interface JestMatchers<T = any> {
    toHaveStyleRule(property: string, value?: any, options?: any): any;
  }
}

export {};

// Vitest-specific augmentation: cover common Vitest matcher/expect shapes. Different
// Vitest versions expose slightly different names (AssertionMatchers, Matchers, JestMatchers),
// so provide a few compatible declarations.
declare module 'vitest' {
  interface AssertionMatchers<R = any, T = any> {
    toHaveStyleRule(property: string, value?: any, options?: any): R;
  }

  interface Matchers<R = any, T = any> {
    toHaveStyleRule(property: string, value?: any, options?: any): R;
  }

  interface JestMatchers<T = any> {
    toHaveStyleRule(property: string, value?: any, options?: any): any;
  }
}

// Fallback dev-only escape hatch: in some type stacks the matcher shaping is hard to
// reliably augment (mix of jest/@testing-library/vitest). As a pragmatic last resort
// for local/test-only type-checking, widen the global `expect` to `any` so `toHaveStyleRule`
// usages type-check. This file is only included in the dev/test tsconfig so it won't
// affect production builds.
// Remove the broad `expect: any` fallback and instead augment the `jest.Expect`
// interface so the return type from `expect(...)` includes `toHaveStyleRule`.
// This is intentionally narrow: it only affects the type returned by `expect`.
declare global {
  namespace jest {
    interface Expect {
      <T = any>(
        actual: T
      ): JestMatchers<T> & {
        toHaveStyleRule(property: string, value?: any, options?: any): any;
      };
    }
  }
}
