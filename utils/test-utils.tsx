import React, { ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import renderer from 'react-test-renderer';

import AppLayout from '@/components/AppLayout';
import GlobalStyles from '@/app/styles/GlobalStyles';

interface Props {
  children: React.ReactNode;
}

// Include header, main, and footer in rendered content
const MockLayout: React.FC<Props> = ({ children }) => {
  return <AppLayout>{children}</AppLayout>;
};

// Include just mui theme global styles
const MockStyles: React.FC<Props> = ({ children }) => {
  return <GlobalStyles>{children}</GlobalStyles>;
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
