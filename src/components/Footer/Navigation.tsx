import Box from '@mui/material/Box';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GithubIcon from '@mui/icons-material/GitHub';

import constants from '@/app/styles/constants';
import NavigationList from './NavigationList';
import NavigationItem from './NavigationItem';

const iconColor = constants.colors.cream;

const links = [
  {
    slug: 'linkedin',
    icon: LinkedInIcon,
    href: 'https://www.linkedin.com/in/nicholeuf',
    ariaLabel: 'LinkedIn (opens in new window)',
  },
  {
    slug: 'github',
    icon: GithubIcon,
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
      <NavigationList>
        {links.map((item) => (
          <NavigationItem key={item.slug} {...item}>
            <item.icon sx={{ color: iconColor }} />
          </NavigationItem>
        ))}
      </NavigationList>
    </Box>
  );
};

export default Navigation;
