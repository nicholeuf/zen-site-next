import { Meta, StoryObj } from "@storybook/nextjs-vite";
import React from "react";
import { expect, screen, userEvent, waitFor, within } from "storybook/test";
import {
  DEFAULT_ACTIVE_COLOR,
  DEFAULT_COLOR,
  DEFAULT_HEIGHT,
} from "./constants";
import Header from "./index";
import routes from "../../app/lib/routes";

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
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement as HTMLElement);

    const openButton = canvas.getByRole("button", {
      name: "Mobile Navigation Trigger",
    });
    await waitFor(() => expect(openButton).toHaveFocus());
    expect(openButton).toHaveAttribute("aria-expanded", "false");
  },
};

export const MobileNavigationOpen: Story = {
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

export const MobileNavigationClose: Story = {
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
    expect(getDialog(), "Mobile navigation dialog").toBeVisible();
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

    await user.click(closeButton);
    await waitFor(() => {
      expect(getDialog(), "Mobile navigation dialog").not.toBeInTheDocument();
    });
    expect(openButton).toHaveAttribute("aria-expanded", "false");
  },
};

export const Tablet: Story = {
  ...Playground,
  globals: {
    // 👇 Set viewport for all component stories
    viewport: { value: "tablet", isRotated: false },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement as HTMLElement);

    await waitFor(() => {
      expect(
        canvas.getByRole("navigation", {
          name: "Main Navigation",
        })
      ).toBeVisible();
    });

    const homeLinks = canvas.getAllByRole("link", { name: "Home" });
    expect(homeLinks[0], "Header Logo 'Home' link").toHaveAttribute(
      "href",
      routes.home.href
    );
    expect(homeLinks[1], "Navigation 'Home' Link").toHaveAttribute(
      "aria-current",
      "page"
    );
    expect(homeLinks[0], "Header Logo 'Home' link").toHaveAttribute(
      "href",
      routes.home.href
    );
  },
};
