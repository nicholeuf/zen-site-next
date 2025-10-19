import List from '@mui/material/List';
import { usePathname } from 'next/navigation';
import NavigationItem from './NavigationItem';
import { navigationItems } from './constants';

interface NavigationProps {
  color: string;
  activeColor: string;
}

const Navigation: React.FC<NavigationProps> = ({ color, activeColor }) => {
  const pathname = usePathname();
  return (
    <nav
      data-testid="header-nav"
      id="main-navigation"
      aria-label="Main Navigation"
    >
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
