'use client';
import AppBar from '@mui/material/AppBar';

import HeaderLogo from './HeaderLogo';
import Navigation from './Navigation';
import { constants } from '@/app/styles/theme';

const Header = () => {
  const color = constants.colors.carob;
  return (
    <AppBar
      position='fixed'
      sx={{
        backgroundColor: 'background.default',
        border: `${constants.spacing.sm} solid ${color}`,
        minHeight: constants.header.height,
        height: constants.header.height,
        fontWeight: 700,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        boxShadow: 'none'
      }}
    >
      <HeaderLogo width={constants.header.height} color={color} />
      <Navigation color={color} />
    </AppBar>
  );
};

export default Header;
