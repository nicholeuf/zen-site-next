import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { usePathname } from 'next/navigation';
import Link from '@mui/material/Link';
import NextLink from 'next/link';

import { constants } from '@/app/styles/theme';
import routes from '@/app/lib/routes';

const { work, about, contact } = routes;

const links = [work, about, contact];

interface NavigationProps {
  color: string;
  activeColor: string;
}

const Navigation: React.FC<NavigationProps> = ({ color, activeColor }) => {
  const pathname = usePathname();
  return (
    <nav>
      <List
        sx={{
          listStyle: 'none',
          display: 'flex',
        }}
      >
        {links.map(({ href, name }) => {
          const isActive = pathname === href;

          const borderBottom = isActive
          ? `${constants.spacing.xs} solid ${activeColor}`
          : '';

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
                  '&:hover': {
                    color: activeColor
                  },
                }}
              >
                {name}
              </Link>
            </ListItem>
          );
        })}
      </List>
    </nav>
  );
};

export default Navigation;
