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
  const activeStyle = {
    borderBottom: '4px solid',
    borderBottomColor: activeColor,
  };

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
        aria-current={isActive ? 'page' : undefined}
        sx={{
          ...(isActive && activeStyle),
          p: 1,
          color: 'background.default',

          '&:hover': {
            textDecoration: 'none',
          },
        }}
      >
        {name}
      </NextLink>
    </ListItem>
  );
};

export default MobileNavigationItem;
