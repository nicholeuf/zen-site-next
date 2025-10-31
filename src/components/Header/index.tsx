import AppBar from '@mui/material/AppBar';
import { alpha } from '@mui/material/styles';

import constants from '@/app/styles/constants';
import HeaderLogo from './HeaderLogo';
import MainNavigation from './MainNavigation';

interface HeaderProps {
  color?: string;
  activeColor?: string;
  height?: string;
}

export const DEFAULT_HEIGHT = constants.header.height;
export const DEFAULT_COLOR = constants.colors.carob;
export const DEFAULT_ACTIVE_COLOR = constants.colors.guava;

const Header: React.FC<HeaderProps> = ({
  color = DEFAULT_COLOR,
  activeColor = DEFAULT_ACTIVE_COLOR,
  height = DEFAULT_HEIGHT,
}) => {
  return (
    <AppBar
      data-testid="header"
      position="fixed"
      color="transparent"
      sx={{
        backgroundColor: alpha(constants.colors.cream, 0.85),
        backdropFilter: 'blur(8px)',
        borderBottom: `3px solid ${color}`,
        minHeight: height,
        height,
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
        width={height}
        color={color}
        activeColor={activeColor}
      />
      <MainNavigation color={color} activeColor={activeColor} />
    </AppBar>
  );
};

export default Header;
