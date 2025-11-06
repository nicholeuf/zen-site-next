import React from 'react';
import { Meta, StoryObj } from '@storybook/nextjs-vite';
import List from '@mui/material/List';

import NavigationItem from './NavigationItem';
import { DEFAULT_ACTIVE_COLOR, DEFAULT_COLOR } from './constants';

type Props = React.ComponentProps<typeof NavigationItem>;

const meta: Meta<typeof NavigationItem> = {
  title: 'Components/Header/NavigationItem',
  component: NavigationItem,
  parameters: { layout: 'padded' },
  argTypes: {
    isActive: { control: 'boolean' },
    activeColor: { control: 'color' },
    color: { control: 'color' },
    href: { control: 'text' },
    name: { control: 'text' },
  },
  decorators: [
    (Story) => (
      <List
        sx={{
          listStyle: 'none',
          display: 'flex',
          alignItems: 'center',
          height: '100%',
          p: 0,
          fontWeight: '700',
        }}
      >
        <Story />
      </List>
    ),
  ],
};

export default meta;
type Story = StoryObj<Props>;

export const Playground: Story = {
  args: {
    isActive: false,
    activeColor: DEFAULT_ACTIVE_COLOR,
    color: DEFAULT_COLOR,
    href: '/about',
    name: 'About',
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
