import List from '@mui/material/List';
import Box from '@mui/material/Box';

import constants from '@/app/styles/constants';
import NavigationItem from './NavigationItem';

// SimpleIcon expects a color hex without the hash
const color = constants.colors.cream.replace('#', '');

const links = [
  {
    slug: 'linkedin',
    alt: 'LinkedIn External Link',
    href: 'https://www.linkedin.com/in/nicholeuf',
    ariaLabel: 'LinkedIn (opens in new window)',
  },
  {
    slug: 'github',
    alt: 'Github External Link',
    href: 'https://github.com/nicholeuf',
    ariaLabel: 'GitHub (opens in new window)',
  },
];

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
      <List
        sx={{
          listStyle: 'none',
          display: 'flex',
          flexDirection: {
            xs: 'row',
            sm: 'column',
          },
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          height: '100%',
          p: 0,
        }}
      >
        {links.map((item) => (
          <NavigationItem key={item.slug} {...item} color={color} />
        ))}
      </List>
    </Box>
  );
};

export default Navigation;
