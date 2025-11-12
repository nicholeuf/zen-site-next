import List from '@mui/material/List';
import { usePathname } from 'next/navigation';
import { navigationItems } from './constants';
import NavigationItem from './NavigationItem';

interface NavigationProps {
  color: string;
  activeColor: string;
}

const Navigation: React.FC<NavigationProps> = ({ color, activeColor }) => {
  const pathname = usePathname();
  return (
    <nav data-testid="header-nav" aria-label="Main Navigation">
      <List
        sx={{
          listStyle: 'none',
          display: 'flex',
        }}
      >
        {navigationItems.map(({ href, name }) => {
          const isActive = pathname === href;

          return (
            <NavigationItem
              key={name}
              isActive={isActive}
              href={href}
              name={name}
              color={color}
              activeColor={activeColor}
            />
          );
        })}
      </List>
    </nav>
  );
};

export default Navigation;
