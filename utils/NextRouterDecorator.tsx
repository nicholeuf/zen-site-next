import { action } from "storybook/actions";
import type { Decorator } from "@storybook/nextjs-vite";
import { MemoryRouterProvider } from "next-router-mock/MemoryRouterProvider/next-13.5";

// Storybook decorator that wraps stories with a mock Next.js router and logs navigation actions.
// Uses `next-router-mock`'s `MemoryRouterProvider` so components that rely on Next navigation
// (e.g. `useRouter` / `usePathname`) work inside Storybook — especially when using the
// Next.js app directory (`appDirectory: true`).
// See related Storybook issue: https://github.com/storybookjs/storybook/issues/32342
// This can be removed once Storybook fixes the issue with mocks when using the app directory.
// TODO: https://github.com/nicholeuf/zen-site-next/issues/149

const pushAction = action("push");

const NextRouterDecorator: Decorator = (Story) => {
  return (
    <MemoryRouterProvider onPush={pushAction}>
      <Story />
    </MemoryRouterProvider>
  );
};

export default NextRouterDecorator;
