import React from "react";
import { Meta, StoryObj } from "@storybook/nextjs-vite";
import List from "@mui/material/List";

import MobileNavigationItem from "./MobileNavigationItem";
import { DEFAULT_ACTIVE_COLOR } from "./constants";

type Props = React.ComponentProps<typeof MobileNavigationItem>;

const meta: Meta<typeof MobileNavigationItem> = {
  title: "Components/Header/MobileNavigationItem",
  component: MobileNavigationItem,
  parameters: { layout: "padded" },
  argTypes: {
    isActive: { control: "boolean" },
    activeColor: { control: "color" },
    href: { control: "text" },
    name: { control: "text" },
    onClick: { action: "clicked" },
  },
  decorators: [
    (Story) => (
      <List sx={{ backgroundColor: "secondary.main" }}>
        <Story />
      </List>
    ),
  ],
  globals: {
    // 👇 Set viewport for all component stories
    viewport: { value: "mobile1", isRotated: false },
  },
};

export default meta;

type Story = StoryObj<Props>;

export const Playground: Story = {
  args: {
    isActive: false,
    activeColor: DEFAULT_ACTIVE_COLOR,
    href: "/about",
    name: "About",
  },
};

export const Active: Story = {
  ...Playground,
  args: { ...Playground.args, isActive: true },
};

export const Inactive: Story = {
  ...Playground,
  args: { ...Playground.args, isActive: false },
};
