import List, { type ListProps } from '@mui/material/List';

interface ChipListProps extends ListProps {
  children: React.ReactNode;
}

const ChipList: React.FC<ChipListProps> = ({ children, ...props }) => {
  return (
    <List
      {...props}
      data-testid="chip-list"
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexWrap: 'wrap',
      }}
    >
      {children}
    </List>
  );
};

export default ChipList;
