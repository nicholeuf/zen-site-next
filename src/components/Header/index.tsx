import AppBar from '@mui/material/AppBar';
import constants from '@/app/styles/constants';
import HeaderLogo from './HeaderLogo';
import MainNavigation from './MainNavigation';

interface HeaderProps {
  color?: string;
  activeColor?: string;
  height?: string;
}

const Header: React.FC<HeaderProps> = ({
  color = constants.colors.carob,
  activeColor = constants.colors.guava,
  height = constants.header.height,
}) => {
  return (
    <AppBar
      data-testid="header"
      position="fixed"
      sx={{
        backgroundColor: 'background.default',
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
