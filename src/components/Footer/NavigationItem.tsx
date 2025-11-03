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
        width: '40px',
        height: '40px',
        m: {
          xs: 0,
          sm: 2,
        },
        p: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <IconButton
        component={ExternalLink}
        href={href}
        sx={{
          height: '100%',
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          p: 1,
          borderRadius: '50%',
          transition: (theme) =>
            theme.transitions.create(['background-color', 'transform'], {
              duration: theme.transitions.duration.shortest,
            }),
          // Increase specificity so this rule overrides any less-specific
          // background rules (for example a global `a` or link reset).
          '&:hover': {
            backgroundColor: 'action.hover',
            transform: 'scale(1.2)',
          },
          // Make keyboard focus look like a focused link (browser default)
          // so keyboard selection matches the ExternalLink-only appearance.
          '&:focus-visible': {
            borderRadius: '50%',
          },
        }}
        aria-label={ariaLabel}
      >
        {children}
      </IconButton>
    </ListItem>
  );
};

export default NavigationItem;
