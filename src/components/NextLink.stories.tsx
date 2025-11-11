import { Meta, StoryObj } from '@storybook/nextjs-vite';
import { within } from '@testing-library/dom';

import NextLink, { NextLinkProps } from './NextLink';

const meta: Meta<typeof NextLink> = {
  title: 'components/NextLink',
  component: NextLink,
  parameters: { layout: 'padded' },
  argTypes: {
    children: { control: 'text' },
    href: { control: 'text' },
    underline: {
      control: { type: 'select' },
      options: ['none', 'hover', 'always'],
    },
    color: {
      control: { type: 'select' },
      options: [
        'inherit',
        'primary',
        'secondary',
        'error',
        'text.primary',
        'text.secondary',
      ],
    },
    target: {
      control: { type: 'select' },
      options: ['_self', '_blank', '_parent', '_top'],
    },
    sx: { control: 'object' },
  },
};

export default meta;

type Story = StoryObj<NextLinkProps>;

const Template: Story = {
  render: (args) => (
    <NextLink {...(args as NextLinkProps)}>{args.children}</NextLink>
  ),
};

export const Playground: Story = {
  ...Template,
  args: {
    children: 'Example link — The quick brown fox jumps over the lazy dog.',
    href: '#',
    underline: 'hover',
    color: 'inherit',
    target: '_self',
    sx: {},
  },
};

export const InternalLink: Story = {
  ...Template,
  args: {
    children: 'Go to About (NextLink wrapper)',
    href: '/about',
    underline: 'hover',
  },
};

export const FocusVisible: Story = {
  ...Playground,
  args: Playground.args,
  play: async ({ canvasElement, userEvent }) => {
    const canvas = within(canvasElement as HTMLElement);
    await userEvent.tab(canvas.getByRole('link'));
  },
};

export const Hover: Story = {
  ...Playground,
  args: Playground.args,
  parameters: {
    pseudo: { hover: true },
  },
};
