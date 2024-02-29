import ListItem from '@mui/material/ListItem';
import NextLink from '@/components/NextLink';

interface MobileNavigationItemProps {
  isActive: boolean;
  activeColor: string;
  href: string;
  name: string;
  onClick: () => void;
}

const MobileNavigationItem: React.FC<MobileNavigationItemProps> = ({
  isActive,
  activeColor,
  onClick,
  href,
  name,
}) => {
  return (
    <ListItem
      key={href}
      sx={{
        my: 2,
      }}
    >
      <NextLink
        href={href}
        onClick={onClick}
        variant="h3"
        sx={(theme) => ({
          color: theme.palette.background.default,
          borderBottom: isActive ? `${theme.spacing(0.5)} solid` : '',
          borderBottomColor: isActive ? activeColor : '',
          '&:hover': {
            textDecoration: 'none',
          },
        })}
      >
        {name}
      </NextLink>
    </ListItem>
  );
};

export default MobileNavigationItem;
