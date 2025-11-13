import type { StorybookConfig } from "@storybook/nextjs-vite";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@chromatic-com/storybook",
    "@storybook/addon-docs",
    "@storybook/addon-a11y",
    "@storybook/addon-vitest",
    "@storybook/addon-themes",
    "storybook-addon-pseudo-states",
  ],
  framework: {
    name: "@storybook/nextjs-vite",
    options: {},
  },
  features: {
    actions: true,
  },
  staticDirs: ["../public"],
  viteFinal: async (config) => {
    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...(config.resolve?.alias ?? {}),
          // TODO: https://github.com/nicholeuf/zen-site-next/issues/149
          "next/router": "next-router-mock",
          "next/navigation": "next-router-mock/navigation",
        },
      },
    };
  },
};
export default config;
