import AppBar from '@mui/material/AppBar';
import { alpha } from '@mui/material/styles';

import constants from '@/app/styles/constants';
import HeaderLogo from './HeaderLogo';
import MainNavigation from './MainNavigation';
import HeaderAppBar from './HeaderAppBar';

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
    <HeaderAppBar color={color} height={height}>
      <HeaderLogo
        // width === height of header to make logo a box
        width={height}
        color={color}
        activeColor={activeColor}
      />
      <MainNavigation color={color} activeColor={activeColor} />
    </HeaderAppBar>
  );
};

export default Header;
