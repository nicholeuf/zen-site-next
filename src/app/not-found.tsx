'use client';
import Typography from '@mui/material/Typography';
import { usePathname } from 'next/navigation';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

import ImageTemplate from '@/components/ImageTemplate';
import NextLink from '@/components/NextLink';

const NotFound = () => {
  const pathname = usePathname();

  const theme = useTheme();
  const isMdSize = useMediaQuery(theme.breakpoints.down('md'));

  const width = isMdSize ? 184 : 368;
  const height = isMdSize ? 232 : 464;
  return (
    <ImageTemplate
      data-testid="not-found-page"
      imageProps={{
        width,
        height,
        src: 'zensite/surr-home-plant-5',
        crop: 'fill',
        opacity: '40',
        alt: '',
      }}
    >
      <Typography variant="h1" gutterBottom>
        Not Found
      </Typography>
      <Typography>
        Could not find the page <strong>{pathname}</strong>. Would you like to
        go to the&nbsp;
        <NextLink href="/">Home Page</NextLink>?
      </Typography>
    </ImageTemplate>
  );
};

export default NotFound;
