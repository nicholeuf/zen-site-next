import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

import SimpleIcon from '@/components/SimpleIcon';
import { constants } from '@/app/styles/theme';
import ExternalLink from '@/components/ExternalLink';
import NavigationItem from './NavigationItem';

const links = [
  {
    slug: 'linkedin',
    alt: 'LinkedIn External Link',
    href: 'https://www.linkedin.com/in/nicholeuf',
    ariaLabel: 'LinkedIn',
  },
  {
    slug: 'github',
    alt: 'Github External Link',
    href: 'https://github.com/nicholeuf',
    ariaLabel: 'GitHub',
  },

  {
    slug: 'npm',
    alt: 'NPM External Link',
    href: 'https://www.npmjs.com/~nicholeuf',
    ariaLabel: 'NPM',
  },
  {
    slug: 'codepen',
    alt: 'Codepen External Link',
    href: 'https://codepen.io/nicholeuf-the-vuer',
    ariaLabel: 'CodePen',
  },
];

const Links: React.FC = () => {
  return (
    <nav>
      <List
        sx={{
          listStyle: 'none',
          display: 'flex',
        }}
      >
        {links.map((item) => (
          <NavigationItem key={item.slug} {...item} />
        ))}
      </List>
    </nav>
  );
};

export default Links;
