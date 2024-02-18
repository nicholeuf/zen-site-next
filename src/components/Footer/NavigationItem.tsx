import ListItem from '@mui/material/ListItem';

import SimpleIcon from '@/components/SimpleIcon';
import { constants } from '@/app/styles/theme';
import ExternalLink from '@/components/ExternalLink';

interface NavigationItemProps {
  href: string;
  alt: string;
  slug: string;
  ariaLabel?: string;
}

const NavigationItem: React.FC<NavigationItemProps> = ({
  href,
  alt,
  slug,
  ariaLabel,
}) => {
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
        aria-label={ariaLabel}
      >
        <SimpleIcon
          slug={slug}
          alt={alt}
          color={constants.colors.cream.replace('#', '')}
        />
      </ExternalLink>
    </ListItem>
  );
};

export default NavigationItem;
