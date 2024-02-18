import ListItem from '@mui/material/ListItem';

import SimpleIcon from '@/components/SimpleIcon';
import ExternalLink from '@/components/ExternalLink';

interface NavigationItemProps {
  href: string;
  alt: string;
  slug: string;
  ariaLabel?: string;
  color: string;
}

const NavigationItem: React.FC<NavigationItemProps> = ({
  href,
  alt,
  slug,
  ariaLabel,
  color,
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
        <SimpleIcon slug={slug} alt={alt} color={color} />
      </ExternalLink>
    </ListItem>
  );
};

export default NavigationItem;
