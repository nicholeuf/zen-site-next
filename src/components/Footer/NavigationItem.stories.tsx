import React from 'react';
import { Meta, StoryObj } from '@storybook/nextjs-vite';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Box from '@mui/material/Box';

import NavigationList from './NavigationList';
import NavigationItem from './NavigationItem';

import constants from '@/app/styles/constants';

const meta: Meta<typeof NavigationItem> = {
  title: 'Components/Footer/NavigationItem',
  component: NavigationItem,
  globals: {
    backgrounds: { value: 'carob' },
  },
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
      <LinkedInIcon sx={{ color: constants.colors.cream }} />
    </NavigationItem>
  ),
  args: {
    href: 'https://example.com',
    ariaLabel: 'LinkedIn (opens in new window)',
  },
};

export const FocusVisible: Story = {
  render: (args) => (
    <NavigationItem {...args}>
      <LinkedInIcon sx={{ color: constants.colors.cream }} />
    </NavigationItem>
  ),
  args: {
    href: 'https://example.com',
    ariaLabel: 'LinkedIn (opens in new window)',
  },
  play: async ({ canvas, userEvent }) => {
    await userEvent.tab(canvas.getByRole('link'));
  },
};
