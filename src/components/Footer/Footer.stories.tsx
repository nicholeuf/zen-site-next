import { Meta, StoryObj } from "@storybook/nextjs-vite";
import React from "react";
import { expect, screen, userEvent, waitFor, within } from "storybook/test";
import { CONTACT_EMAIL, GITHUB_URL, LINKEDIN_URL } from "@/app/lib/constants";
import Footer, { DEFAULT_HEIGHT } from "./index";

const meta: Meta<typeof Footer> = {
  title: "Components/Footer/Footer",
  component: Footer,
  parameters: { layout: "fullscreen" },
};

export default meta;
type Story = StoryObj<React.ComponentProps<typeof Footer>>;

export const Playground: Story = {
  render: (args) => <Footer {...args} />,
  args: {
    height: DEFAULT_HEIGHT,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement as HTMLElement);

    const footer = canvas.getByTestId("footer") as HTMLDivElement;
    expect(footer).toBeVisible();

    const nav = canvas.getByRole("navigation", {
      name: "External Navigation",
    }) as HTMLDivElement;
    expect(nav).toBeVisible();

    const linkedInLink = canvas.getByRole("link", {
      name: "LinkedIn (opens in new window)",
    });
    expect(linkedInLink).toBeVisible();
    expect(linkedInLink).toHaveAttribute("href", LINKEDIN_URL);

    const githubLink = canvas.getByRole("link", {
      name: "GitHub (opens in new window)",
    });
    expect(githubLink).toBeVisible();
    expect(githubLink).toHaveAttribute("href", GITHUB_URL);

    const emailLink = canvas.getByRole("link", {
      name: "Email (opens email client)",
    });
    expect(emailLink).toBeVisible();
    expect(emailLink).toHaveAttribute("href", `mailto:${CONTACT_EMAIL}`);

    const madeWithLoveCopy = canvas.getByText(/Made with/i);
    expect(madeWithLoveCopy).toBeVisible();

    const copyRightCopy = canvas.getByText(/Copyright/i);
    expect(copyRightCopy).toBeVisible();

    const sourceCopy = canvas.getByText(/View Source Code/i);
    expect(sourceCopy).toBeVisible();
  },
};

export const Mobile: Story = {
  ...Playground,
  globals: {
    // 👇 Set viewport for all component stories
    viewport: { value: "mobile2", isRotated: false },
  },
};

export const Tablet: Story = {
  ...Playground,
  globals: {
    // 👇 Set viewport for all component stories
    viewport: { value: "tablet", isRotated: false },
  },
};

export const ViewCredits: Story = {
  render: (args) => <Footer {...args} />,
  args: {
    height: DEFAULT_HEIGHT,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement as HTMLElement);

    const viewCreditsButton = canvas.getByRole("button", {
      name: /view credits/i,
    });

    await userEvent.click(viewCreditsButton);

    await waitFor(() => {
      expect(screen.getByRole("heading", { name: /credits/i })).toBeVisible();
    });
  },
};
