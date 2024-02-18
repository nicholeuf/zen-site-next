import ListItem from '@mui/material/ListItem';
import Link from '@mui/material/Link';
import NextLink from 'next/link';

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
      <Link
        href={href}
        component={NextLink}
        sx={(theme) => ({
          boxSizing: 'border-box',
          letterSpacing: '2.75px',
          height: '100%',
          textDecoration: 'none',
          color,
          borderBottom: isActive ? `${theme.spacing(0.5)} solid` : '',
          borderBottomColor: isActive ? activeColor : '',
          transition: 'color 0.25s ease',
          '&:hover': {
            color: activeColor,
            textDecoration: 'none',
          },
        })}
      >
        {name}
      </Link>
    </ListItem>
  );
};

export default NavigationItem;
