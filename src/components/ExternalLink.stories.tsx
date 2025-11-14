import { Meta, StoryObj } from "@storybook/nextjs-vite";
import { within } from "@testing-library/dom";

import ExternalLink from "./ExternalLink";

const meta: Meta<typeof ExternalLink> = {
  title: "components/ExternalLink",
  component: ExternalLink,
  parameters: { layout: "padded" },
  argTypes: {
    children: { control: "text" },
    href: { control: "text" },
    target: {
      control: { type: "select" },
      options: ["_self", "_blank", "_parent", "_top"],
    },
    rel: { control: "text" },
    sx: { control: "object" },
    className: { control: "text" },
  },
};

export default meta;

type Story = StoryObj<React.ComponentProps<typeof ExternalLink>>;

const Template: Story = {
  render: ({ children, ...rest }) => (
    <ExternalLink {...rest}>{children}</ExternalLink>
  ),
};

export const Playground: Story = {
  ...Template,
  args: {
    children: "External link — https://example.com",
    href: "https://example.com",
    target: "_blank",
    rel: "noopener",
    sx: {},
  },
};

export const FocusVisible: Story = {
  ...Playground,
  args: Playground.args,
  play: async ({ canvasElement, userEvent }) => {
    const canvas = within(canvasElement as HTMLElement);
    await userEvent.tab(canvas.getByRole("link"));
  },
};

export const Hover: Story = {
  ...Playground,
  args: Playground.args,
  parameters: {
    pseudo: { hover: true },
  },
};
