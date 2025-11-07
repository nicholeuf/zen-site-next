import ListItem from '@mui/material/ListItem';
import NextLink from '@/components/NextLink';

interface NavigationItemProps {
  isActive: boolean;
  color: string;
  activeColor: string;
  href: string;
  name: string;
}

const NavigationItem: React.FC<NavigationItemProps> = ({
  isActive,
  color,
  activeColor,
  href,
  name,
}) => {
  const activeStyle = {
    borderBottom: '4px solid',
    borderBottomColor: activeColor,
  };

  const linkHoverFocusStyle = {
    color: activeColor,
    textDecoration: 'none',
    transform: 'scale(1.2)',
  };

  return (
    <ListItem key={href} data-testid="header-nav-item">
      <NextLink
        href={href}
        aria-current={isActive ? 'page' : undefined}
        sx={{
          ...(isActive && activeStyle),
          boxSizing: 'border-box',
          letterSpacing: '1.25px',
          height: '100%',
          textDecoration: 'none',
          color,
          transition: (theme) =>
            theme.transitions.create(['color', 'transform'], {
              duration: theme.transitions.duration.shortest,
            }),
          transformOrigin: 'center',
          willChange: 'transform',
          '&:hover': linkHoverFocusStyle,
          '&:focus-visible': linkHoverFocusStyle,
        }}
      >
        {name}
      </NextLink>
    </ListItem>
  );
};

export default NavigationItem;
