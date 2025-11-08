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

  return (
    <ListItem
      key={href}
      sx={{
        transition: 'transform 0.25s ease',
        '&:hover': {
          transform: 'scale(1.2)',
        },
      }}
    >
      <NextLink
        href={href}
        aria-current={isActive ? 'page' : undefined}
        sx={{
          ...(isActive && activeStyle),
          boxSizing: 'border-box',
          letterSpacing: '1.25px',
          height: '100%',
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          p: 1,
          textDecoration: 'none',
          color,
          transition: 'color 0.25s ease',
          '&:hover': {
            color: activeColor,
            textDecoration: 'none',
          },
        }}
      >
        {name}
      </NextLink>
    </ListItem>
  );
};

export default NavigationItem;
