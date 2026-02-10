import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { within } from "@testing-library/dom";
import { usePathname } from "next/navigation";
import { expect, mocked } from "storybook/test";

import StoryAppLayout from "utils/StoryAppLayout";
import routes from "@/app/lib/routes";
import AboutPage from "./AboutPage";
import { getItemPlaceholderData } from "./constants";

const meta: Meta<typeof AboutPage> = {
  title: "Pages/About",
  component: AboutPage,
  parameters: { layout: "fullscreen" },

  decorators: [
    (Story) => {
      // Ensure the AboutPage component is rendered within the app layout, which provides necessary context like theme and router.
      return (
        <StoryAppLayout>
          <Story />
        </StoryAppLayout>
      );
    },
  ],
};

export default meta;

type Story = StoryObj<React.ComponentProps<typeof AboutPage>>;

const WithAboutRoute: Story = {
  beforeEach: () => {
    mocked(usePathname).mockReturnValue(routes.about.href);
  },
  loaders: [
    async () => {
      return {
        itemPlaceholder: (await getItemPlaceholderData()).itemDataPlaceholder,
      };
    },
  ],
  render: (args, { loaded: { itemPlaceholder } }) => {
    return <AboutPage {...args} itemPlaceholder={itemPlaceholder} />;
  },
};

export const Default: Story = {
  ...WithAboutRoute,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement as HTMLElement);

    const heading = canvas.getByRole("heading", { name: "About" });
    expect(heading).toBeVisible();

    expect(usePathname).toBeCalled();
  },
};

export const Mobile: Story = {
  ...WithAboutRoute,
  globals: {
    viewport: { value: "mobile2", isRotated: false },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement as HTMLElement);

    const photoGrid = canvas.getByTestId("about-photos-1-column-layout");
    expect(photoGrid).toBeVisible();

    const napaliPhoto = canvas.getByRole("img", {
      name: "Na Pali Coast Tour in Kauai, HI (2019)",
    });
    expect(napaliPhoto).toBeVisible();
  },
};

export const Tablet: Story = {
  ...WithAboutRoute,
  globals: {
    viewport: { value: "tablet", isRotated: false },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement as HTMLElement);

    const photoGrid = canvas.getByTestId("about-photos-2-column-layout");
    expect(photoGrid).toBeVisible();

    const napaliPhoto = canvas.getByRole("img", {
      name: "Na Pali Coast Tour in Kauai, HI (2019)",
    });
    expect(napaliPhoto).toBeVisible();
  },
};

export const Desktop: Story = {
  ...WithAboutRoute,
  globals: {
    viewport: { value: "desktop", isRotated: false },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement as HTMLElement);

    const photoGrid = canvas.getByTestId("about-photos-3-column-layout");
    expect(photoGrid).toBeVisible();

    const napaliPhoto = canvas.getByRole("img", {
      name: "Na Pali Coast Tour in Kauai, HI (2019)",
    });
    expect(napaliPhoto).toBeVisible();
  },
};
