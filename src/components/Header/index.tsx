import {
  DEFAULT_ACTIVE_COLOR,
  DEFAULT_COLOR,
  DEFAULT_HEIGHT,
} from './constants';
import HeaderAppBar from './HeaderAppBar';
import HeaderLogo from './HeaderLogo';
import MainNavigation from './MainNavigation';

interface HeaderProps {
  color?: string;
  activeColor?: string;
  height?: string;
}

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
