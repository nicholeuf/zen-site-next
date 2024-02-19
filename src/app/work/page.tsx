import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Metadata } from 'next';

import WorkTabs from './WorkTabs';
import { items } from './constants';

export const metadata: Metadata = {
  title: 'Work',
};

const Work: React.FC = () => {
  return (
    <Box sx={{ m: 3 }}>
      <Typography variant="h2" component="h1">
        Work
      </Typography>
      <WorkTabs items={items} />
    </Box>
  );
};

export default Work;
