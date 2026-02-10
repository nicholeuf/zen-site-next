import { Meta, StoryObj } from "@storybook/nextjs-vite";
import React from "react";
import { expect, screen, userEvent, waitFor, within } from "storybook/test";
import {
  DEFAULT_ACTIVE_COLOR,
  DEFAULT_COLOR,
  DEFAULT_HEIGHT,
} from "./constants";
import Header from "./index";

const meta: Meta<typeof Header> = {
  title: "Components/Header/Header",
  component: Header,
  parameters: { layout: "fullscreen" },
};

export default meta;
type Story = StoryObj<React.ComponentProps<typeof Header>>;

export const Playground: Story = {
  render: (args) => <Header {...args} />,
  args: {
    color: DEFAULT_COLOR,
    activeColor: DEFAULT_ACTIVE_COLOR,
    height: DEFAULT_HEIGHT,
  },
};

export const Mobile: Story = {
  ...Playground,
  globals: {
    // 👇 Set viewport for all component stories
    viewport: { value: "mobile2", isRotated: false },
  },
};

export const MobileNavigation: Story = {
  ...Playground,
  globals: {
    // 👇 Set viewport for all component stories
    viewport: { value: "mobile2", isRotated: false },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement as HTMLElement);
    const user = userEvent.setup();
    const getDialog = () => screen.queryByTestId("mobile-navigation-dialog");

    const openButton = canvas.getByRole("button", {
      name: "Mobile Navigation Trigger",
    });
    await waitFor(() => expect(openButton).toHaveFocus());
    expect(openButton).toHaveAttribute("aria-expanded", "false");

    await user.click(openButton);
    expect(getDialog()).toBeVisible();
    expect(openButton).toHaveAttribute("aria-expanded", "true");

    const closeButton = screen.getByRole("button", {
      name: "Close Mobile Navigation",
    });
    await waitFor(() => expect(closeButton).toHaveFocus());

    await waitFor(() => {
      expect(
        screen.getByRole("navigation", {
          name: "Main Navigation",
        })
      ).toBeVisible();
    });
  },
};

export const Tablet: Story = {
  ...Playground,
  globals: {
    // 👇 Set viewport for all component stories
    viewport: { value: "tablet", isRotated: false },
  },
};
