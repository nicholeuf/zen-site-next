import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { within } from "@testing-library/dom";
import { usePathname } from "next/navigation";
import { expect, mocked } from "storybook/test";
import StoryAppLayout from "utils/StoryAppLayout";
import NotFound from "./NotFound";

const meta: Meta<typeof NotFound> = {
  title: "Pages/NotFound",
  component: NotFound,
  parameters: { layout: "fullscreen" },
  decorators: [
    (Story) => {
      // Ensure the NotFound component is rendered within the app layout, which provides necessary context like theme and router.
      return (
        <StoryAppLayout>
          <Story />
        </StoryAppLayout>
      );
    },
  ],
};

export default meta;

type Story = StoryObj<React.ComponentProps<typeof NotFound>>;

const WithFigsRoute: Story = {
  beforeEach: () => {
    mocked(usePathname).mockReturnValue("/figs");
  },
};

export const Default: Story = {
  ...WithFigsRoute,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement as HTMLElement);

    await expect(canvas.getByRole("heading", { level: 1 })).toHaveTextContent(
      "Sorry"
    );

    await expect(canvas.getByTestId("not-found-copy")).toHaveTextContent(
      "The page /figs could not be found. Would you like to go to the Home Page?"
    );
  },
};

export const Mobile: Story = {
  ...Default,
  globals: {
    viewport: { value: "mobile2", isRotated: false },
  },
};

export const Tablet: Story = {
  ...Default,
  globals: {
    viewport: { value: "tablet", isRotated: false },
  },
};
