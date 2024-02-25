import ListItem, { ListItemProps } from '@mui/material/ListItem';

interface DashListItemProps extends ListItemProps {
  children: React.ReactNode;
}

const DashListItem: React.FC<DashListItemProps> = ({ children, ...props }) => {
  return (
    <ListItem
      {...props}
      sx={{
        ...props.sx,
        '&::before': {
          content: '"-"',
          pr: 0.5,
          alignSelf: 'flex-start',
        },
      }}
    >
      {children}
    </ListItem>
  );
};

export default DashListItem;
