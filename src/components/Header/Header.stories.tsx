import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import type React from 'react';
import {
  DEFAULT_ACTIVE_COLOR,
  DEFAULT_COLOR,
  DEFAULT_HEIGHT,
} from './constants';
import Header from './index';

const meta: Meta<typeof Header> = {
  title: 'Components/Header/Header',
  component: Header,
  parameters: { layout: 'fullscreen' },
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
