import React from 'react';
import { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Box, Stack, Typography, useTheme } from '@mui/material';
import constants from '../../styles/constants';

const meta: Meta = {
  title: 'Theme/Colors',
};

export default meta;

type Story = StoryObj;

const Swatch: React.FC<{ name: string; value: string }> = ({ name, value }) => {
  const theme = useTheme();
  // Use MUI's contrast helper to pick readable text color when possible
  const textColor =
    typeof theme.palette.getContrastText === 'function'
      ? theme.palette.getContrastText(value)
      : '#000';

  return (
    <Box>
      <Box
        sx={{
          width: 160,
          height: 96,
          borderRadius: 1,
          border: '1px solid rgba(0,0,0,0.08)',
          background: value,
          display: 'flex',
          alignItems: 'flex-end',
          p: 1,
        }}
      >
        <Typography variant="caption" sx={{ color: textColor }}>
          {name}
        </Typography>
      </Box>
      <Typography variant="body2" sx={{ mt: 0.5 }}>
        {value}
      </Typography>
    </Box>
  );
};

export const Palette: Story = {
  render: () => {
    const theme = useTheme();

    const paletteItems: { name: string; value: string }[] = [
      { name: 'primary.main', value: theme.palette.primary.main },
      { name: 'secondary.main', value: theme.palette.secondary.main },
      { name: 'background.default', value: theme.palette.background.default },
      { name: 'background.paper', value: theme.palette.background.paper },
      { name: 'text.primary', value: theme.palette.text.primary },
      { name: 'text.secondary', value: theme.palette.text.secondary },
      // project constants
      { name: 'constants.guava', value: constants.colors.guava },
      { name: 'constants.carob', value: constants.colors.carob },
      { name: 'constants.cream', value: constants.colors.cream },
      { name: 'constants.gunmetal', value: constants.colors.gunmetal },
    ];

    return (
      <Stack spacing={3} sx={{ p: 2 }}>
        <Typography variant="h6">Color Palette</Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
          {paletteItems.map((p) => (
            <Box key={p.name} sx={{ display: 'block' }}>
              <Swatch name={p.name} value={p.value} />
            </Box>
          ))}
        </Box>
      </Stack>
    );
  },
};
