import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import type React from 'react';
import {
  DEFAULT_ACTIVE_COLOR,
  DEFAULT_COLOR,
  DEFAULT_HEIGHT,
} from './constants';
import HeaderAppBar from './HeaderAppBar';
import HeaderLogo from './HeaderLogo';

type Props = React.ComponentProps<typeof HeaderLogo>;

const meta: Meta<typeof HeaderLogo> = {
  title: 'Components/Header/HeaderLogo',
  component: HeaderLogo,
  parameters: { layout: 'padded' },
  argTypes: {
    width: { control: 'text' },
    color: { control: 'color' },
    activeColor: { control: 'color' },
  },
  decorators: [
    (Story) => (
      <HeaderAppBar
        color={DEFAULT_COLOR}
        height={DEFAULT_HEIGHT}
        hasBottomBorder={false}
      >
        <Story />
      </HeaderAppBar>
    ),
  ],
};

export default meta;

type Story = StoryObj<Props>;

export const Playground: Story = {
  args: {
    width: DEFAULT_HEIGHT,
    color: DEFAULT_COLOR,
    activeColor: DEFAULT_ACTIVE_COLOR,
  },
};
