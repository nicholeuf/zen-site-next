import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import theme from '@/app/styles/theme';

interface GlobalStylesProps {
  children: React.ReactNode;
}

const GlobalStyles: React.FC<GlobalStylesProps> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default GlobalStyles;
