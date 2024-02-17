import ListItem from '@mui/material/ListItem';
import Link from '@mui/material/Link';
import NextLink from 'next/link';

import { constants } from '@/app/styles/theme';

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
  const borderBottom = isActive ? `${constants.spacing.xs} solid` : '';
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
        sx={{
          boxSizing: 'border-box',
          letterSpacing: '2.75px',
          height: '100%',
          textDecoration: 'none',
          color,
          borderBottom,
          borderBottomColor: isActive ? activeColor : '',
          transition: 'color 0.25s ease',
          '&:hover': {
            color: activeColor,
            textDecoration: 'none',
          },
        }}
      >
        {name}
      </Link>
    </ListItem>
  );
};

export default NavigationItem;
