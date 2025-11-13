import React from "react";
import { Meta, StoryObj } from "@storybook/nextjs-vite";
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
};
