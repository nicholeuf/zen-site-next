import List from '@mui/material/List';
import { usePathname } from 'next/navigation';
import routes from '@/app/lib/routes';
import NavigationItem from './NavigationItem';

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
