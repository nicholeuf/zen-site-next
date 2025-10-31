import React from 'react';
import { Meta, StoryObj } from '@storybook/nextjs-vite';

import Header, {
  DEFAULT_ACTIVE_COLOR,
  DEFAULT_COLOR,
  DEFAULT_HEIGHT,
} from './index';

const meta: Meta<typeof Header> = {
  title: 'Components/Header/Header',
  component: Header,
  parameters: { layout: 'fullscreen' },
};

export default meta;
type Story = StoryObj<React.ComponentProps<typeof Header>>;

export const Playground: Story = {
  render: (args: any) => <Header {...args} />,
  args: {
    color: DEFAULT_COLOR,
    activeColor: DEFAULT_ACTIVE_COLOR,
    height: DEFAULT_HEIGHT,
  },
};
