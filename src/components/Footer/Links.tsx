import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Link from '@mui/material/Link';

import SimpleIcon from '@/components/SimpleIcon';
import { constants } from '@/app/styles/theme';

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
              <Link
                href={href}
                sx={{
                  textDecoration: 'none',
                }}
                target='_blank'
                rel='noopener'
              >
                <SimpleIcon
                  slug={slug}
                  alt={alt}
                  color={constants.colors.cream.replace('#', '')}
                />
              </Link>
            </ListItem>
          );
        })}
      </List>
    </nav>
  );
};

export default Links;
