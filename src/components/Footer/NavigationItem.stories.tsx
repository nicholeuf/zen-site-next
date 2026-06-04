import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Box from "@mui/material/Box";
import { Meta, StoryObj } from "@storybook/nextjs-vite";
import { within } from "@testing-library/dom";
import React from "react";
import { expect } from "storybook/test";
import { footerLinks } from "../Footer/constants";
import NavigationItem from "./NavigationItem";
import NavigationList from "./NavigationList";

const footerLink = footerLinks[0];

const meta: Meta<typeof NavigationItem> = {
  title: "Components/Footer/NavigationItem",
  component: NavigationItem,
  decorators: [
    (Story) => (
      <Box
        component="nav"
        data-testid="footer-nav"
        aria-label="External Navigation"
      >
        <NavigationList>
          <Story />
        </NavigationList>
      </Box>
    ),
  ],
};

export default meta;
type Story = StoryObj<React.ComponentProps<typeof NavigationItem>>;

export const Playground: Story = {
  render: (args) => (
    <NavigationItem {...args}>
      <LinkedInIcon sx={{ color: "secondary.main" }} />
    </NavigationItem>
  ),
  args: {
    href: footerLink.href,
    ariaLabel: footerLink.ariaLabel,
  },
  globals: {
    muiMode: "dark",
  },
};

export const FocusVisible: Story = {
  ...Playground,
  args: Playground.args,
  play: async ({ canvasElement, userEvent }) => {
    const canvas = within(canvasElement as HTMLElement);
    const link = canvas.getByRole("link");
    await userEvent.tab();
    await expect(link).toHaveFocus();
  },
};

export const Hover: Story = {
  ...Playground,
  args: Playground.args,
  parameters: {
    pseudo: { hover: true },
  },
};
