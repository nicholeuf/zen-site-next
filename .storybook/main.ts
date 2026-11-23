// This file has been automatically migrated to valid ESM format by Storybook.
import path, { dirname } from "node:path";
import { fileURLToPath } from "node:url";
import type { StorybookConfig } from "@storybook/nextjs-vite";
import tsconfigPaths from "vite-tsconfig-paths";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const appRoot = path.join(__dirname, "..");
const previewRuntimePath = fileURLToPath(
  import.meta.resolve("storybook/internal/preview/runtime")
);

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
  viteFinal: async (config, { configType }) => {
    const plugins = [
      ...(config.plugins ?? []),
      tsconfigPaths({
        projects: [path.join(appRoot, "tsconfig.test.json")],
      }),
    ];

    // TODO(#244): https://github.com/nicholeuf/zen-site-next/issues/244 - remove this workaround once Storybook ships a fix for static builds (see storybookjs/storybook#37375, PR #37453)
    // Shared production chunks can read __STORYBOOK_MODULE_*__ before the preview runtime defines those globals, which breaks Chromatic.
    if (configType === "PRODUCTION") {
      plugins.push({
        name: "ensure-storybook-preview-runtime-before-globals",
        apply: "build",
        enforce: "pre",
        buildStart() {
          this.emitFile({
            type: "chunk",
            id: previewRuntimePath,
            fileName: "sb-preview-runtime-entry.js",
          });
        },
        transformIndexHtml(html) {
          const headTag = html.match(/<head[^>]*>/);
          if (!headTag) {
            return html;
          }
          const script =
            '<script type="module" src="./sb-preview-runtime-entry.js"></script>';
          const insertAt = html.indexOf(headTag[0]) + headTag[0].length;
          return html.slice(0, insertAt) + script + html.slice(insertAt);
        },
      });
    }

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
      plugins,
    };
  },
};
export default config;
