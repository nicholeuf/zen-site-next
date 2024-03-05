import React, { ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import renderer from 'react-test-renderer';
import mediaQuery from 'css-mediaquery';

import AppLayout from '@/components/AppLayout';
import GlobalStyles from '@/app/styles/GlobalStyles';

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
  renderer.create(<MockStyles>{children}</MockStyles>);

const customSnapshotRenderWithLayout = (children: ReactElement) =>
  renderer.create(<MockLayout>{children}</MockLayout>);

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
