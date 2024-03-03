'use client';
import Typography from '@mui/material/Typography';
import { usePathname } from 'next/navigation';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

import ImageTemplate from '@/components/ImageTemplate';
import NextLink from '@/components/NextLink';

const WIDTH = 368;
const HEIGHT = 464;

const NotFound = () => {
  const pathname = usePathname();

  const theme = useTheme();
  const isFactor3 = useMediaQuery(theme.breakpoints.down(401));
  const isFactor2 = useMediaQuery(theme.breakpoints.down(769));

  const getFactor = (): number => {
    if (isFactor3) {
      return 3;
    } else if (isFactor2) {
      return 2;
    }

    return 1;
  };

  const factor = getFactor();

  return (
    <ImageTemplate
      data-testid="not-found-page"
      imageTestId={`plant-image-factor-${factor}`}
      imageProps={{
        width: Math.ceil(WIDTH / factor),
        height: Math.ceil(HEIGHT / factor),
        src: 'zensite/surr-home-plant-5',
        crop: 'fill',
        opacity: '40',
        alt: '',
      }}
    >
      <Typography variant="h1" gutterBottom>
        Not Found
      </Typography>
      <Typography data-testid="not-found-copy">
        Could not find the page <strong>{pathname}</strong>. Would you like to
        go to the&nbsp;
        <NextLink href="/">Home Page</NextLink>?
      </Typography>
    </ImageTemplate>
  );
};

export default NotFound;
