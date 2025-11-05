// Minimal dev-only type augmentation for the `toHaveStyleRule` matcher used in tests.
// This file is intentionally small and is included only by `tsconfig.test.json` so it
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

// Narrow augmentation for `jest.Expect`: the return type of `expect(...)` will include
// `toHaveStyleRule`. This avoids widening global `expect` while covering the matcher shape
// used in tests.
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
