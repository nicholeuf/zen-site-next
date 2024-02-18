import List from '@mui/material/List';

import { constants } from '@/app/styles/theme';
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
  {
    slug: 'npm',
    alt: 'NPM External Link',
    href: 'https://www.npmjs.com/~nicholeuf',
    ariaLabel: 'NPM (opens in new window)',
  },
  {
    slug: 'codepen',
    alt: 'Codepen External Link',
    href: 'https://codepen.io/nicholeuf-the-vuer',
    ariaLabel: 'CodePen (opens in new window)',
  },
];

const Links: React.FC = () => {
  return (
    <nav data-testid="footer-nav" aria-label="External Social Links">
      <List
        sx={{
          listStyle: 'none',
          display: 'flex',
        }}
      >
        {links.map((item) => (
          <NavigationItem key={item.slug} {...item} color={color} />
        ))}
      </List>
    </nav>
  );
};

export default Links;
