import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { within } from "@testing-library/dom";
import { usePathname } from "next/navigation";
import { expect, mocked } from "storybook/test";
import StoryAppLayout from "utils/StoryAppLayout";
import routes from "@/app/lib/routes";
import LandingPage from ".";
import { getLandingPageProps } from "./constants";

const meta: Meta<typeof LandingPage> = {
  title: "Pages/Landing",
  component: LandingPage,
  parameters: { layout: "fullscreen" },

  decorators: [
    (Story) => {
      // Ensure the LandingPage component is rendered within the app layout, which provides necessary context like theme and router.
      return (
        <StoryAppLayout>
          <Story />
        </StoryAppLayout>
      );
    },
  ],
};

export default meta;

type Story = StoryObj<React.ComponentProps<typeof LandingPage>>;

const WithLandingPageRoute: Story = {
  beforeEach: () => {
    mocked(usePathname).mockReturnValue(routes.home.href);
  },
  afterEach: () => {
    mocked(usePathname).mockReset();
  },
  loaders: [
    async () => {
      return {
        props: await getLandingPageProps(),
      };
    },
  ],
  render: (args, { loaded: { props } }) => {
    return <LandingPage {...args} {...props} />;
  },
};

export const Default: Story = {
  ...WithLandingPageRoute,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement as HTMLElement);

    const heading = canvas.getByRole("heading", { name: "Hi, I'm Nichole" });
    expect(heading, "Heading").toBeVisible();

    const subheading = canvas.getByRole("heading", {
      name: /full-stack developer/i,
    });
    expect(subheading, "Subheading").toBeVisible();
    expect(usePathname).toHaveBeenCalled();
  },
};

export const Mobile: Story = {
  ...Default,
  globals: {
    viewport: { value: "mobile2", isRotated: false },
  },
};

export const Tablet: Story = {
  ...WithLandingPageRoute,
  globals: {
    viewport: { value: "tablet", isRotated: false },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement as HTMLElement);
    expect(
      canvas.getAllByRole("link", {
        name: "Home",
      })[0],
      "Top Left Corner Home Link"
    ).toBeVisible();

    expect(
      canvas.getByRole("navigation", {
        name: "Main Navigation",
      }),
      "Main Navigation"
    ).toBeVisible();

    const workLink = canvas.getByRole("link", {
      name: "Work",
    });
    expect(workLink, "Work Link").not.toHaveAttribute("aria-current", "page");
    const homeLink = canvas.getAllByRole("link", {
      name: "Home",
    })[1];
    expect(homeLink, "Home Link").toHaveAttribute("aria-current", "page");
  },
};
