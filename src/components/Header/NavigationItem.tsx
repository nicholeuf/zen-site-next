import ListItem from '@mui/material/ListItem';
import NextLink from '@/components/NextLink';

interface NavigationItemProps {
  isActive: boolean;
  color: string;
  activeColor: string;
  href: string;
  name: string;
}

const NavigationItem: React.FC<NavigationItemProps> = ({
  isActive,
  color,
  activeColor,
  href,
  name,
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
      <NextLink
        href={href}
        sx={(theme) => ({
          boxSizing: 'border-box',
          letterSpacing: {
            sm: '2.75px',
          },
          height: '100%',
          textDecoration: 'none',
          color,
          borderBottom: isActive ? `${theme.spacing(0.5)} solid` : '',
          borderBottomColor: isActive ? activeColor : '',
          transition: 'color 0.25s ease',
          '&:hover': {
            color: activeColor,
            textDecoration: 'none',
          },
        })}
      >
        {name}
      </NextLink>
    </ListItem>
  );
};

export default NavigationItem;
