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
    <ListItem key={href}>
      <NextLink
        href={href}
        aria-current={isActive ? 'page' : undefined}
        sx={{
          ...(isActive && activeStyle),
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxSizing: 'border-box',
          letterSpacing: '1.25px',
          height: '100%',
          padding: 1,
          borderRadius: 1,
          outline: 'none',
          textDecoration: 'none',
          color,
          transition: (theme) =>
            theme.transitions.create(
              ['background-color', 'color', 'transform'],
              {
                duration: theme.transitions.duration.shortest,
              }
            ),
          transformOrigin: 'center',
          willChange: 'transform',
          '&:hover': {
            ...linkHoverFocusStyle,
            // backgroundColor: (theme) => theme.palette.action.hover,
          },
          '&:focus-visible': {
            ...linkHoverFocusStyle,
            // outline: (theme) => `2px solid ${theme.palette.primary.main}`,
            // outlineOffset: 2,
            // backgroundColor: (theme) => theme.palette.action.focus,
          },
        }}
      >
        {name}
      </NextLink>
    </ListItem>
  );
};

export default NavigationItem;
