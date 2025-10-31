import type { Preview } from '@storybook/nextjs-vite';
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider/next-13.5';
import { action } from 'storybook/actions';

import { ThemeProvider } from '@mui/material';
import { withThemeFromJSXProvider } from '@storybook/addon-themes';

import theme from '../src/app/styles/theme';
import GlobalStyles from '../src/app/styles/GlobalStyles';

const preview: Preview = {
  parameters: {
    nextjs: {
      appDirectory: true,
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'error',
    },
    //👇 Enables auto-generated documentation for all stories
    tags: ['autodocs'],
  },

  decorators: [
    (Story) => (
      <MemoryRouterProvider url="/" onPush={action('router.push')}>
        <Story />
      </MemoryRouterProvider>
    ),
    withThemeFromJSXProvider({
      GlobalStyles,
      Provider: ThemeProvider,
      themes: {
        desktop: theme('desktop'),
      },
      defaultTheme: 'desktop',
    }),
  ],
};

export default preview;
