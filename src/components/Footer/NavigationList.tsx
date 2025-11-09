import { List } from '@mui/material';

interface NavigationListProps {
  children?: React.ReactNode;
}
const NavigationList: React.FC<NavigationListProps> = ({ children }) => {
  return (
    <List
      sx={{
        listStyle: 'none',
        display: 'flex',
        flexDirection: {
          xs: 'row',
          sm: 'column',
        },
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        p: 0,
      }}
    >
      {children}
    </List>
  );
};

export default NavigationList;
