import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { within } from "@testing-library/dom";
import { usePathname } from "next/navigation";
import { expect, mocked } from "storybook/test";
import StoryAppLayout from "utils/StoryAppLayout";
import { CONTACT_EMAIL, getEmailHref, LINKEDIN_URL } from "@/app/lib/constants";
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
        "Email is the best way to reach me. You can also connect on LinkedIn, or send a message in the chat and I’ll see it on Slack. I look forward to hearing from you!"
      );
    } else {
      await expect(canvas.getByTestId("contact-copy")).toHaveTextContent(
        "Email is the best way to reach me. You can also connect on LinkedIn. I look forward to hearing from you!"
      );
    }

    const emailLink = canvas.getByRole("link", {
      name: /send email to nichole at/i,
    });
    expect(emailLink, "Email CTA").toBeVisible();
    expect(emailLink).toHaveAttribute("href", getEmailHref());

    const linkedInLink = canvas.getByRole("link", {
      name: /connect on linkedin/i,
    });
    expect(linkedInLink, "LinkedIn CTA").toBeVisible();
    expect(linkedInLink).toHaveAttribute("href", LINKEDIN_URL);
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
