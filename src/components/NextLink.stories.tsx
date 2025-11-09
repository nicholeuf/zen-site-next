import { Meta, StoryObj } from '@storybook/nextjs-vite';
import Stack from '@mui/material/Stack';

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
  render: ({ children, ...args }: NextLinkProps) => (
    <NextLink {...args}>{children}</NextLink>
  ),
};

export const Playground: Story = {
  ...Template,
  args: {
    children: 'Example link — The quick brown fox jumps over the lazy dog.',
    href: '#',
    underline: 'hover',
    color: 'primary',
    target: '_self',
    sx: {},
  },
};

export const UnderlineVariants: Story = {
  args: { children: 'The quick brown fox jumps over the lazy dog.' },
  render: ({ children, ...args }: NextLinkProps) => (
    <Stack spacing={1}>
      <NextLink underline="none" {...args} href="#">
        none — {children}
      </NextLink>
      <NextLink underline="hover" {...args} href="#">
        hover — {children}
      </NextLink>
      <NextLink underline="always" {...args} href="#">
        always — {children}
      </NextLink>
    </Stack>
  ),
};

export const NextLinkExample: Story = {
  ...Template,
  args: {
    children: 'Go to About (NextLink wrapper)',
    href: '/about',
    underline: 'hover',
  },
};
