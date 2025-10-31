import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Footer from './index';

const meta: Meta<typeof Footer> = {
  title: 'Components/Footer/Footer',
  component: Footer,
  parameters: { layout: 'fullscreen' },
};

export default meta;
type Story = StoryObj<React.ComponentProps<typeof Footer>>;

export const Playground: Story = {
  render: (args: any) => <Footer {...args} />,
};
