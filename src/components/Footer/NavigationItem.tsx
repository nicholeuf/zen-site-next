import ListItem from '@mui/material/ListItem';
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
          xs: 0,
          sm: 2,
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
          p: 1,
          borderRadius: '50%',
          transition: (theme) =>
            theme.transitions.create('background-color', {
              duration: theme.transitions.duration.shortest,
            }),
          '&:hover': {
            backgroundColor: 'action.hover',
          },
        }}
        aria-label={ariaLabel}
      >
        {children}
      </ExternalLink>
    </ListItem>
  );
};

export default NavigationItem;
