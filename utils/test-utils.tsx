import React, { ReactElement } from 'react';
import { vi } from 'vitest';
import { render, RenderOptions } from '@testing-library/react';
import mediaQuery from 'css-mediaquery';

import AppLayout from '@/components/AppLayout';
import GlobalStyles from '@/app/styles/GlobalStyles';

// Prefer dynamic require of the Storybook mock modules so importing this
// helper file doesn't eagerly load Storybook internals that can trigger
// environment-specific module resolution errors during test discovery.
export const headers = (): any => {
  try {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    return require('@storybook/nextjs-vite/headers.mock').headers();
  } catch (e) {
    // Fall back to a lightweight in-memory mock that reads/writes the
    // runtime header map used by the test setup. This allows tests to call
    // `headers()` safely even when Storybook internals can't be required in
    // the current environment.
    return {
      set: (k: string, v: string) => setRuntimeHeaders({ [k]: v }),
      delete: (k: string) => setRuntimeHeaders({ [k]: null }),
      get: (k: string) => getRuntimeHeaders()[k] ?? undefined,
    } as any;
  }
};

export const getRouter = (): any => {
  try {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    return require('@storybook/nextjs-vite/navigation.mock').getRouter();
  } catch (e) {
    // Provide a minimal mocked router compatible with tests that read or set
    // `pathname`/`asPath` and call navigation methods.
    return {
      pathname: getRuntimePathname(),
      asPath: getRuntimePathname(),
      push: vi ? (vi.fn?.() as any) : (() => {}),
      replace: vi ? (vi.fn?.() as any) : (() => {}),
      back: vi ? (vi.fn?.() as any) : (() => {}),
    } as any;
  }
};

// Minimal runtime helpers used by the test setup to mock Next runtime APIs
// without importing Storybook internals. These provide a simple in-memory
// map that `jest.setup.ts` can read to implement `next/headers` and
// `next/navigation` mocks safely during test setup.
let __RUNTIME_HEADERS: Record<string, string | null> = {};
let __RUNTIME_PATHNAME = '/';

export const setRuntimeHeaders = (obj: Record<string, string | null>) => {
  __RUNTIME_HEADERS = { ...__RUNTIME_HEADERS, ...obj };
};

export const getRuntimeHeaders = () => __RUNTIME_HEADERS;

export const resetRuntimeHeaders = () => {
  __RUNTIME_HEADERS = {};
};

export const setRuntimePathname = (p: string) => {
  __RUNTIME_PATHNAME = p;
};

export const getRuntimePathname = () => __RUNTIME_PATHNAME;

interface Props {
  children: React.ReactNode;
}

// Include header, main, and footer in rendered content
const MockLayout: React.FC<Props> = ({ children }) => {
  return <AppLayout deviceType="desktop">{children}</AppLayout>;
};

// Include just mui theme global styles
const MockStyles: React.FC<Props> = ({ children }) => {
  return <GlobalStyles deviceType="desktop">{children}</GlobalStyles>;
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { wrapper: MockStyles, ...options });

const customRenderWithLayout = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { wrapper: MockLayout, ...options });

const customSnapshotRender = (children: ReactElement) =>
  render(<MockStyles>{children}</MockStyles>);

const customSnapshotRenderWithLayout = (children: ReactElement) =>
  render(<MockLayout>{children}</MockLayout>);

export * from '@testing-library/react';
export {
  customRender as render,
  customRenderWithLayout as renderWithLayout,
  customSnapshotRender as renderSnapshot,
  customSnapshotRenderWithLayout as renderSnapshotWithLayout,
};

// https://stackoverflow.com/a/77238122/23029493
// Use for async server components
export async function resolvedComponent(Component: any, props?: any) {
  const ComponentResolved = await Component(props);
  return () => ComponentResolved;
}

// https://mui.com/material-ui/react-use-media-query/#testing
export const createMatchMedia = (width: unknown) => {
  return (query: string): MediaQueryList => ({
    matches: mediaQuery.match(query, {
      width,
    }),
    media: query,
    addListener: () => {},
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    onchange: () => {},
    dispatchEvent: () => true,
  });
};

export const resetMatchMedia = (width = window.innerWidth) => {
  window.matchMedia = createMatchMedia(width);
};

// https://mui.com/material-ui/customization/breakpoints/#default-breakpoints
export const XS_DEVICE = 400;
export const SM_DEVICE = 768;
export const MD_DEVICE = 1000;
export const LG_DEVICE = 1280;
export const XL_DEVICE = 1600;

// --- Next runtime test helpers (replace global state-based mocking) ---
// These helpers are importable and can be used in tests to control the
// behavior of the Next runtime mocks configured in the test setup.
// Prefer using the Storybook mocks directly in tests. Exported helpers were
// removed in favor of calling `headers()` and `getRouter()` where needed.
