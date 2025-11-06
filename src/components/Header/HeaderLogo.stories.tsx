import React from 'react';
import { Meta, StoryObj } from '@storybook/nextjs-vite';

import Box from '@mui/material/Box';

import constants from '@/app/styles/constants';
import HeaderLogo from './HeaderLogo';
import HeaderAppBar from './HeaderAppBar';

const HEIGHT = constants.header.height;
const COLOR = constants.colors.carob;
const ACTIVE_COLOR = constants.colors.guava;

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
      <HeaderAppBar color={COLOR} height={HEIGHT} hasBottomBorder={false}>
        <Story />
      </HeaderAppBar>
    ),
  ],
};

export default meta;

type Story = StoryObj<Props>;

export const Playground: Story = {
  args: {
    width: HEIGHT,
    color: COLOR,
    activeColor: ACTIVE_COLOR,
  },
};
