import Box from '@mui/material/Box';

import constants from '@/app/styles/constants';
import NavigationList from './NavigationList';
import NavigationItem from './NavigationItem';
import { footerLinks } from './constants';

const iconColor = constants.colors.cream;

const Navigation: React.FC = () => {
  return (
    <Box
      component="nav"
      data-testid="footer-nav"
      aria-label="External Navigation"
      sx={{
        width: '25%',
        height: '100%',
      }}
    >
      <NavigationList>
        {footerLinks.map((item) => (
          <NavigationItem key={item.slug} {...item}>
            <item.icon sx={{ color: iconColor }} />
          </NavigationItem>
        ))}
      </NavigationList>
    </Box>
  );
};

export default Navigation;
