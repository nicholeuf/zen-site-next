import ListItem from '@mui/material/ListItem';
import NextLink from '@/components/NextLink';

interface MobileNavigationItemProps {
  isActive: boolean;
  color: string;
  activeColor: string;
  href: string;
  name: string;
  onClick: () => void;
}

const MobileNavigationItem: React.FC<MobileNavigationItemProps> = ({
  isActive,
  color,
  activeColor,
  onClick,
  href,
  name,
}) => {
  return (
    <ListItem key={href}>
      <NextLink
        href={href}
        sx={(theme) => ({
          color,
          borderBottom: isActive ? `${theme.spacing(0.5)} solid` : '',
          borderBottomColor: isActive ? activeColor : '',
          '&:hover': {
            textDecoration: 'none',
          },
        })}
        onClick={onClick}
        variant="h3"
      >
        {name}
      </NextLink>
    </ListItem>
  );
};

export default MobileNavigationItem;
