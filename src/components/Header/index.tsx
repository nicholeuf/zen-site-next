'use client';
import AppBar from '@mui/material/AppBar';

import HeaderLogo from './HeaderLogo';
import Navigation from './Navigation';
import { constants } from '@/app/styles/theme';

const Header = () => {
  const color = 'secondary.main';
  const activeColor = 'primary.light';
  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: 'background.default',
        border: `${constants.spacing.sm} solid`,
        borderColor: color,
        minHeight: constants.header.height,
        height: constants.header.height,
        fontWeight: 700,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        boxShadow: 'none',
      }}
    >
      <HeaderLogo
        // width === height of header to make logo a box
        width={constants.header.height}
        color={color}
        activeColor={activeColor}
      />
      <Navigation color={color} activeColor={activeColor} />
    </AppBar>
  );
};

export default Header;
