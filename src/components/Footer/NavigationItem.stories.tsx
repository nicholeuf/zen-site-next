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
        sx={{
          width: '25%',
          height: '100%',
          border: `1px solid ${constants.colors.cream}`,
        }}
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
  play: async ({ canvasElement }) => {
    // Use testing user-event to simulate a real Tab press so :focus-visible applies.
    const { default: userEvent } = await import('@testing-library/user-event');
    const el = canvasElement.querySelector(
      'a,button,[role="button"],[role="link"]'
    );
    if (!(el instanceof HTMLElement)) return;

    const user = userEvent.setup();
    // tab until the element is focused; user.tab() moves focus forward once,
    // so if it's the first focusable element in the canvas this will focus it.
    await user.tab();
    // If it's not focused yet, explicitly focus it to be deterministic.
    if (document.activeElement !== el) {
      el.focus();
    }
  },
};
