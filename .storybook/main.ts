import path from "node:path";
import { fileURLToPath } from "node:url";
import type { StorybookConfig } from "@storybook/nextjs-vite";
import tsconfigPaths from "vite-tsconfig-paths";

const dirname =
  typeof __dirname !== "undefined"
    ? __dirname
    : path.dirname(fileURLToPath(import.meta.url));
const appRoot = path.join(dirname, "..");

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
      plugins: [
        ...(config.plugins ?? []),
        tsconfigPaths({
          projects: [path.join(appRoot, "tsconfig.test.json")],
        }),
      ],
    };
  },
};
export default config;
