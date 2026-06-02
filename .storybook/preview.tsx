import type { Preview } from "@storybook/nextjs-vite";
import { sb } from "storybook/test";
import constants from "../src/app/styles/constants.tsx";

import "../src/app/styles/mobileFix.css";
import MuiThemeProvider from "../src/app/styles/providers/MuiThemeProvider";

import MuiCacheDecorator from "../utils/MuiCacheDecorator.tsx";
import NextRouterDecorator from "../utils/NextRouterDecorator.tsx";

// Ensure the mock is registered before any stories load, so hooks like
// `usePathname` are consistently mocked across local and CI/Chromatic runs.
await sb.mock(import("next/navigation"), { spy: true });
// Ensure image placeholder helper is mocked for story loaders.
await sb.mock(import("../src/app/lib/getPlaceholderImage.ts"));

const preview: Preview = {
  //👇 Enables auto-generated documentation for all stories
  tags: ["autodocs"],
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

    initialGlobals: {
      // 👇 Set the initial background color
      backgrounds: { value: "cream" },
    },
  },

  decorators: [
    MuiCacheDecorator,
    (Story) => (
      <MuiThemeProvider>
        <Story />
      </MuiThemeProvider>
    ),
    // ensure Next.js router mocks are applied after theme
    // TODO: https://github.com/nicholeuf/zen-site-next/issues/149
    NextRouterDecorator,
  ],
};

export default preview;
