import ListItem from '@mui/material/ListItem';
import IconButton from '@mui/material/IconButton';
import ExternalLink from '@/components/ExternalLink';

interface NavigationItemProps {
  href: string;
  children: React.ReactNode;
  ariaLabel?: string;
}

const NavigationItem: React.FC<NavigationItemProps> = ({
  href,
  children,

  ariaLabel,
}) => {
  return (
    <ListItem
      key={href}
      sx={{
        m: {
          xs: 1,
          sm: 3,
        },
        p: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
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
          height: '100%',
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        aria-label={ariaLabel}
      >
        <IconButton
          sx={{
            p: 0,
          }}
        >
          {children}
        </IconButton>
      </ExternalLink>
    </ListItem>
  );
};

export default NavigationItem;
