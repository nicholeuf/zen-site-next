import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
};

const About: React.FC = () => {
  return (
    <Box>
      <Typography variant="h1">About</Typography>
      <Typography>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum tempore
        a praesentium perferendis doloremque, veniam minus quis laborum, numquam
        blanditiis sunt ex consectetur asperiores assumenda nisi laboriosam et
        tempora quos.
      </Typography>
    </Box>
  );
};

export default About;
