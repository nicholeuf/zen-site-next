import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { within } from "@testing-library/dom";
import { usePathname } from "next/navigation";
import { expect, mocked } from "storybook/test";
import StoryAppLayout from "utils/StoryAppLayout";
import routes from "@/app/lib/routes";
import ContactPage from "./ContactPage";

const meta: Meta<typeof ContactPage> = {
  title: "Pages/Contact",
  component: ContactPage,
  parameters: { layout: "fullscreen" },
  decorators: [
    (Story) => {
      // Ensure the ContactPage component is rendered within the app layout, which provides necessary context like theme and router.
      return (
        <StoryAppLayout>
          <Story />
        </StoryAppLayout>
      );
    },
  ],
};

export default meta;

type Story = StoryObj<React.ComponentProps<typeof ContactPage>>;

const WithContactRoute: Story = {
  beforeEach: () => {
    mocked(usePathname).mockReturnValue(routes.contact.href);
  },
  afterEach: () => {
    mocked(usePathname).mockReset();
  },
  args: {
    chatEnabled: false,
  },
};

export const Default: Story = {
  ...WithContactRoute,
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement as HTMLElement);

    const heading = canvas.getByRole("heading", { name: "Contact" });
    expect(heading).toBeVisible();

    if (args.chatEnabled) {
      await expect(canvas.getByTestId("contact-copy")).toHaveTextContent(
        "Please connect with me on LinkedIn or send a message in chat. I look forward to hearing from you!"
      );
    } else {
      await expect(canvas.getByTestId("contact-copy")).toHaveTextContent(
        "Please connect with me on LinkedIn. I look forward to hearing from you!"
      );
    }
  },
};

export const ChatEnabled: Story = {
  ...Default,
  args: {
    chatEnabled: true,
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
