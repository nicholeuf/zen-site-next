import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Work',
};

const Work: React.FC = () => {
  return (
    <Box>
      <Typography variant="h1">Work</Typography>
      <Typography>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum tempore
        a praesentium perferendis doloremque, veniam minus quis laborum, numquam
        blanditiis sunt ex consectetur asperiores assumenda nisi laboriosam et
        tempora quos.
      </Typography>
    </Box>
  );
};

export default Work;
