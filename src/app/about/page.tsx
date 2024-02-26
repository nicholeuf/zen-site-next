import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Metadata } from 'next';

import PageContainer from '@/components/PageContainer';
import Photos from './Photos';

export const metadata: Metadata = {
  title: 'About',
};

const About: React.FC = () => {
  return (
    <PageContainer data-testid="about-page">
      <Typography variant="h1" gutterBottom>
        About
      </Typography>
      <Typography gutterBottom>
        I live in Orlando with my family. I&apos;m a native Floridian and
        graduate of the University of Florida <i>(Go Gators!)</i>. Prior to our
        return to the sunshine state, we experienced life in both Georgia and
        Colorado. Colorado was a remarkable experience, and it left an indelible
        mark on my heart.
      </Typography>
      <Typography gutterBottom>
        Since 2014, I&apos;ve been practicing yoga. Beyond the physical
        benefits, I love how it connects me back into the physical body and
        serves as a form of moving meditation. Lately I&apos;ve been working on
        my inversions. It took me some time to gather the courage to embrace
        being upside down, but I&apos;m grateful I took that leap.
      </Typography>
      <Typography gutterBottom>
        Beyond the mat, I enjoy cooking, nurturing my collection of houseplants,
        and spending time in nature.
      </Typography>
      <Box
        sx={{
          mt: 3,
        }}
      >
        <Photos />
      </Box>
    </PageContainer>
  );
};

export default About;
