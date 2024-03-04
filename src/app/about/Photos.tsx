'use client';

import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { CldImage } from 'next-cloudinary';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Theme } from '@mui/material/styles';

const itemData = [
  {
    src: 'zensite/personal/nichole-hawaii',
    title: 'Luau Kalamaku',
    location: 'Kauai, HI (2019)',
  },
  {
    src: 'zensite/personal/napoli-coast',
    title: 'Na Pali Coast Tour',
    location: 'Kauai, HI (2019)',
  },
  {
    src: 'zensite/personal/family-hawaii',
    title: 'Visiting Sea Turtles',
    location: 'Maui, HI (2019)',
  },
  {
    src: 'zensite/personal/nichole-epcot',
    title: 'Epcot Food & Wine Festival',
    location: 'Orlando, FL (2019)',
  },
  {
    src: 'zensite/personal/family-disney',
    title: 'Disney',
    location: 'Orlando, FL (2018)',
  },
  {
    src: 'zensite/personal/family-snow',
    title: 'Sledding',
    location: 'Superior, CO (2015)',
  },
  {
    src: 'zensite/personal/family-telluride',
    title: 'Fall in the Mountains',
    location: 'Telluride, CO (2014)',
  },
  {
    src: 'zensite/personal/family-mountain',
    title: 'Hiking',
    location: 'Boulder, CO (2014)',
  },
];

const Photos = () => {
  const isSmSize = useMediaQuery<Theme>((theme) => theme.breakpoints.up('sm'));
  const isMdSize = useMediaQuery<Theme>((theme) => theme.breakpoints.up('md'));

  const getCols = () => {
    if (isMdSize) {
      return 3;
    }
    if (isSmSize) {
      return 2;
    }

    return 1;
  };

  const cols = getCols();

  return (
    <ImageList
      sx={{ width: '100%', height: '100%' }}
      cols={cols}
      rowHeight="auto"
      data-testid={`about-photos-${cols}-column-layout`}
    >
      {itemData.map((item) => (
        <ImageListItem
          key={item.src}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Box>
            <CldImage
              src={item.src}
              width={300}
              height={300}
              crop="thumb"
              zoom="0.1"
              gravity="faces"
              radius="20"
              alt={`${item.title} in ${item.location}`}
            />
            <ImageListItemBar
              title={item.title}
              subtitle={item.location}
              position="below"
            />
          </Box>
        </ImageListItem>
      ))}
    </ImageList>
  );
};

export default Photos;
