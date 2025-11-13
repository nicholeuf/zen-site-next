import type { Preview } from "@storybook/nextjs-vite";

import { ThemeProvider } from "@mui/material";
import { withThemeFromJSXProvider } from "@storybook/addon-themes";

import theme from "../src/app/styles/theme";
import GlobalStyles from "../src/app/styles/GlobalStyles";
import MuiCacheDecorator from "../utils/MuiCacheDecorator";
import NextRouterDecorator from "../utils/NextRouterDecorator";

import constants from "../src/app/styles/constants";

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

    backgrounds: {
      options: {
        cream: { name: "cream", value: constants.colors.cream },
        carob: { name: "carob", value: constants.colors.carob },
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: "todo",
    },
    //👇 Enables auto-generated documentation for all stories
    tags: ["autodocs"],
    initialGlobals: {
      // 👇 Set the initial background color
      backgrounds: { value: "cream" },
    },
  },

  decorators: [
    MuiCacheDecorator,
    withThemeFromJSXProvider({
      GlobalStyles,
      Provider: ThemeProvider,
      themes: {
        desktop: theme("desktop"),
      },
      defaultTheme: "desktop",
    }),
    // ensure Next.js router mocks are applied after theme
    // TODO: https://github.com/nicholeuf/zen-site-next/issues/149
    NextRouterDecorator,
  ],
};

export default preview;
