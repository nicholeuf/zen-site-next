import ListItem, { type ListItemProps } from '@mui/material/ListItem';

interface ChipListItemProps extends ListItemProps {
  children: React.ReactNode;
}

const ChipListItem: React.FC<ChipListItemProps> = ({ children, ...props }) => {
  return (
    <ListItem
      {...props}
      data-testid="chip-list-item"
      sx={{
        pr: 1,
        pl: 0,
        width: 'initial',
      }}
    >
      {children}
    </ListItem>
  );
};

export default ChipListItem;
