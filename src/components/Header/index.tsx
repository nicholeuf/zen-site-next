'use client';
import AppBar from '@mui/material/AppBar';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

import HeaderLogo from './HeaderLogo';
import Navigation from './Navigation';
import constants from '@/app/styles/constants';
import MobileNavigation from './MobileNavigation';

interface HeaderProps {
  color?: string;
  activeColor?: string;
  height?: string;
}

const Header: React.FC<HeaderProps> = ({
  color = 'secondary.main',
  activeColor = 'primary.light',
  height = constants.header.height,
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <AppBar
      data-testid="header"
      position="fixed"
      sx={(theme) => ({
        backgroundColor: 'background.default',
        border: `${theme.spacing(1)} solid`,
        borderColor: color,
        minHeight: height,
        height,
        fontWeight: 700,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        boxShadow: 'none',
      })}
    >
      <HeaderLogo
        // width === height of header to make logo a box
        width={height}
        color={color}
        activeColor={activeColor}
      />
      {isMobile ? (
        <MobileNavigation color={color} activeColor={activeColor} />
      ) : (
        <Navigation color={color} activeColor={activeColor} />
      )}
    </AppBar>
  );
};

export default Header;
