import type { Preview } from "@storybook/nextjs-vite";
import { sb } from "storybook/test";

import "../src/app/styles/mobileFix.css";
import MUIThemeProvider from "../src/app/styles/providers/MUIThemeProvider.tsx";
import MuiCacheDecorator from "../utils/MuiCacheDecorator.tsx";
import NextRouterDecorator from "../utils/NextRouterDecorator.tsx";
import StorybookTheme from "../utils/StorybookTheme.tsx";

// Ensure the mock is registered before any stories load, so hooks like
// `usePathname` are consistently mocked across local and CI/Chromatic runs.
await sb.mock(import("next/navigation"), { spy: true });
// Ensure image placeholder helper is mocked for story loaders.
await sb.mock(import("../src/app/lib/getPlaceholderImage.ts"));

const preview: Preview = {
  //👇 Enables auto-generated documentation for all stories
  tags: ["autodocs"],
  globalTypes: {
    muiMode: {
      name: "MUI Mode",
      description: "Light / Dark mode",

      toolbar: {
        icon: "mirror",
        items: [
          { value: "light", title: "Light" },
          { value: "dark", title: "Dark" },
          { value: "system", title: "System" },
        ],
        dynamicTitle: true,
      },
    },
  },
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
      test: "todo",
    },

    backgrounds: { disable: true },
  },

  initialGlobals: {
    muiMode: "light",
  },

  decorators: [
    MuiCacheDecorator,
    (Story, context) => {
      const { muiMode } = context.globals;

      return (
        <MUIThemeProvider>
          <StorybookTheme muiMode={muiMode}>
            <Story />
          </StorybookTheme>
        </MUIThemeProvider>
      );
    },
    // ensure Next.js router mocks are applied after theme
    // TODO: https://github.com/nicholeuf/zen-site-next/issues/149
    NextRouterDecorator,
  ],
};

export default preview;
