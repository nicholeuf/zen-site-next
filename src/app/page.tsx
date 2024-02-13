import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nichole Frey's Portfolio",
};

const Home: React.FC = () => {
  return (
    <Box>
      <Typography variant='h1'>Welcome</Typography>
      <Typography>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum tempore
        a praesentium perferendis doloremque, veniam minus quis laborum, numquam
        blanditiis sunt ex consectetur asperiores assumenda nisi laboriosam et
        tempora quos.
      </Typography>
    </Box>
  );
};

export default Home;
