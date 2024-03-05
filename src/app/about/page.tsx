import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Metadata } from 'next';

import PageContainer from '@/components/PageContainer';
import Photos from './Photos';
import Photo from './Photo';
import { ItemDataPlaceholder, itemData } from './constants';
import getPlaceholderImage from '../lib/getPlaceholderImage';
import ImageDimensions from '@/types/ImageDimensions';

export const metadata: Metadata = {
  title: 'About',
};

const dim: ImageDimensions = {
  width: 300,
  height: 300,
};

const getServerSideProps = async () => {
  const itemDataPlaceholder = await Promise.all(
    itemData.map(async (item): Promise<ItemDataPlaceholder> => {
      const blurDataURL = await getPlaceholderImage({
        src: item.src,
        ...dim,
      });
      return {
        ...item,
        ...dim,
        blurDataURL,
      };
    })
  );

  return { itemDataPlaceholder };
};

const About: React.FC = async () => {
  const { itemDataPlaceholder } = await getServerSideProps();

  return (
    <PageContainer data-testid="about-page">
      <Typography variant="h1" gutterBottom>
        About
      </Typography>
      <Typography gutterBottom variant="body2">
        I&apos;m a native Floridian and graduate of the University of Florida{' '}
        <i>(Go Gators!)</i>, now living in Orlando. Prior to our return to the
        sunshine state, we experienced life in both Georgia and Colorado.
        Colorado was a remarkable experience that left a mark on my heart.
      </Typography>
      <Typography gutterBottom variant="body2">
        Since 2014, I&apos;ve been practicing yoga. Beyond the physical
        benefits, I love how it connects me back into the physical body and
        serves as a form of moving meditation. Lately I&apos;ve been working on
        my inversions. It took me some time to gather the courage to embrace
        being upside down, but I&apos;m grateful I took that leap.
      </Typography>
      <Typography gutterBottom variant="body2">
        Beyond the mat, I enjoy cooking, caring for my houseplants, and spending
        time in nature.
      </Typography>
      <Box
        sx={{
          mt: 3,
        }}
      >
        <Photos>
          {itemDataPlaceholder.map((item) => (
            <Photo key={item.src} {...item} />
          ))}
        </Photos>
      </Box>
    </PageContainer>
  );
};

export default About;
