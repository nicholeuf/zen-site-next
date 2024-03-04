'use client';
import Typography from '@mui/material/Typography';
import { usePathname } from 'next/navigation';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Theme } from '@mui/material/styles';
import Link from '@mui/material/Link';

import ImageTemplate from '@/components/ImageTemplate';

const WIDTH = 367;
const HEIGHT = 261;

const NotFound = () => {
  const pathname = usePathname();

  const isFactor2 = useMediaQuery<Theme>((theme) =>
    theme.breakpoints.down(600)
  );

  const getFactor = (): number => {
    if (isFactor2) {
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
        src: 'zensite/dizzy-plant-chlorophytum',
        crop: 'fill',
        opacity: '40',
        alt: '',
        priority: false,
      }}
    >
      <Typography variant="h1" gutterBottom>
        Sorry
      </Typography>
      <Typography data-testid="not-found-copy">
        The page <strong>{pathname}</strong> could not be found. Would you like
        to go to the&nbsp;
        <Link href="/">Home Page</Link>?
      </Typography>
    </ImageTemplate>
  );
};

export default NotFound;
