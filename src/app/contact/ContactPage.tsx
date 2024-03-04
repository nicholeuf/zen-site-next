'use client';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Theme } from '@mui/material/styles';

import ExternalLink from '@/components/ExternalLink';
import ImageTemplate from '@/components/ImageTemplate';

interface ContactPageProps {
  chatEnabled: boolean;
}

const WIDTH = 368;
const HEIGHT = 644;

const ContactPage: React.FC<ContactPageProps> = ({ chatEnabled }) => {
  const isFactor3 = useMediaQuery<Theme>((theme) =>
    theme.breakpoints.down(401)
  );
  const isFactor2 = useMediaQuery<Theme>((theme) =>
    theme.breakpoints.down(769)
  );

  const getFactor = (): number => {
    if (isFactor3) {
      return 3;
    } else if (isFactor2) {
      return 2;
    }

    return 1;
  };

  const factor = getFactor();

  const getCopy = () => {
    const LinkedInContent = (
      <ExternalLink
        href="https://www.linkedin.com/in/nicholeuf"
        sx={{
          fontWeight: '500',
        }}
      >
        LinkedIn
      </ExternalLink>
    );

    return (
      <Typography variant="body2" data-testid="contact-copy">
        Please connect with me on&nbsp;{LinkedInContent}
        {chatEnabled && ' or send a message in chat'}. I look forward to hearing
        from you!
      </Typography>
    );
  };

  return (
    <ImageTemplate
      data-testid="contact-page"
      imageTestId={`plant-image-factor-${factor}`}
      imageProps={{
        width: Math.ceil(WIDTH / factor),
        height: Math.ceil(HEIGHT / factor),
        src: 'zensite/shine-stephania-plant-in-plant-pot',
        crop: 'fill',
        opacity: '30',
        alt: '',
      }}
    >
      <Typography variant="h1" gutterBottom>
        Contact
      </Typography>
      {getCopy()}
    </ImageTemplate>
  );
};

export default ContactPage;
