import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

import SimpleIcon from '@/components/SimpleIcon';
import { constants } from '@/app/styles/theme';
import ExternalLink from '@/components/ExternalLink';

const links = [
  {
    slug: 'linkedin',
    alt: 'LinkedIn External Link',
    href: 'https://www.linkedin.com/in/nicholeuf',
  },
  {
    slug: 'github',
    alt: 'Github External Link',
    href: 'https://github.com/nicholeuf',
  },

  {
    slug: 'npm',
    alt: 'NPM External Link',
    href: 'https://www.npmjs.com/~nicholeuf',
  },
  {
    slug: 'codepen',
    alt: 'Codepen External Link',
    href: 'https://codepen.io/nicholeuf-the-vuer',
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
        {links.map(({ href, alt, slug }) => {
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
              <ExternalLink
                href={href}
                sx={{
                  textDecoration: 'none',
                }}
              >
                <SimpleIcon
                  slug={slug}
                  alt={alt}
                  color={constants.colors.cream.replace('#', '')}
                />
              </ExternalLink>
            </ListItem>
          );
        })}
      </List>
    </nav>
  );
};

export default Links;
