import Typography from '@mui/material/Typography';
import { Metadata } from 'next';

import PageContainer from '@/components/PageContainer';

export const metadata: Metadata = {
  title: 'About',
};

const About: React.FC = () => {
  return (
    <PageContainer>
      <Typography variant="h1">About</Typography>
      <Typography>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum tempore
        a praesentium perferendis doloremque, veniam minus quis laborum, numquam
        blanditiis sunt ex consectetur asperiores assumenda nisi laboriosam et
        tempora quos.
      </Typography>
    </PageContainer>
  );
};

export default About;
