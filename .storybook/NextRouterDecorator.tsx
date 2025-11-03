import { action } from 'storybook/actions';

import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider/next-13.5';

// Storybook decorator that wraps stories with a mock Next.js router and logs navigation actions.
// Uses `next-router-mock`'s `MemoryRouterProvider` so components that rely on Next navigation
// (e.g. `useRouter` / `usePathname`) work inside Storybook — especially when using the
// Next.js app directory (`appDirectory: true`).
// See related Storybook issue: https://github.com/storybookjs/storybook/issues/32342
// This can be removed once Storybook fixes the issue with mocks when using the app directory.
import React from 'react';

const NextRouterDecorator = (Story: any) => {
  const onPush = React.useCallback((url: string) => {
    action('push')(url);
  }, []);

  return (
    <MemoryRouterProvider onPush={onPush}>
      <Story />
    </MemoryRouterProvider>
  );
};

export default NextRouterDecorator;
