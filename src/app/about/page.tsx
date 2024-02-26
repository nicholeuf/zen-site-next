import Typography from '@mui/material/Typography';
import { Metadata } from 'next';

import PageContainer from '@/components/PageContainer';
import Photos from './Photos';

export const metadata: Metadata = {
  title: 'About',
};

const About: React.FC = () => {
  return (
    <PageContainer>
      <Typography variant="h1" gutterBottom>
        About
      </Typography>
      <Typography gutterBottom>
        I live in Orlando with my family. I&apos;m a native Floridian, but we
        lived in Colorado and Georgia for a time before moving back. I loved
        Colorado so much, I still consider it my second home.
      </Typography>
      <Typography gutterBottom>
        I&apos;ve been practicing yoga since 2014. Beyond the physical benefits,
        I love how it connects me back into the physical body and is a form of
        moving meditation. Lately I&apos;ve been working on my inversions. It
        took me a while to get the courage to go upside down, but I&apos;m glad
        I took the leap.
      </Typography>
      <Typography gutterBottom>
        I also enjoy cooking, collecting houseplants, and spending time in
        nature.
      </Typography>
      <Photos />
    </PageContainer>
  );
};

export default About;
