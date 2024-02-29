'use client';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import theme from '@/app/styles/theme';
import DeviceType from '@/types/DeviceType';

interface GlobalStylesProps {
  children: React.ReactNode;
  deviceType: DeviceType;
}

const GlobalStyles: React.FC<GlobalStylesProps> = ({
  children,
  deviceType,
}) => {
  return (
    <ThemeProvider theme={theme(deviceType)}>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default GlobalStyles;
