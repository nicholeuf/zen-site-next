import { action } from 'storybook/actions';

import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider/next-13.5';

// Decorator to wrap stories with a mock Next.js routerand log navigation actions
// This is implemented because of a known issue when using appDirectory: true
// https://github.com/storybookjs/storybook/issues/32342
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
