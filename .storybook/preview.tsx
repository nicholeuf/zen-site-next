import type { Preview } from '@storybook/nextjs-vite';

import { ThemeProvider, CssBaseline } from '@mui/material';
import { withThemeFromJSXProvider } from '@storybook/addon-themes';
import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';

import theme from '../src/app/styles/theme';
import GlobalStyles from '../src/app/styles/GlobalStyles';
import NextRouterDecorator from './NextRouterDecorator';

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
    // Emotion cache provider ensures MUI styles are injected in the right order
    ((Story: any) => {
      const muiCache = createCache({ key: 'mui', prepend: true });
      return (
        <CacheProvider value={muiCache}>
          <Story />
        </CacheProvider>
      );
    }),
    withThemeFromJSXProvider({
      GlobalStyles,
      Provider: ThemeProvider,
      themes: {
        desktop: theme('desktop'),
      },
      defaultTheme: 'desktop',
    }),
    // ensure Next.js router mocks are applied after theme
    NextRouterDecorator,
  ],
};

export default preview;
