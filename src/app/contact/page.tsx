import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Metadata } from 'next';

import PageContainer from '@/components/PageContainer';
import ExternalLink from '@/components/ExternalLink';

export const metadata: Metadata = {
  title: 'Contact',
};

interface ContactProps {
  chatEnabled?: boolean;
}

const Contact: React.FC<ContactProps> = ({
  chatEnabled = process.env.NEXT_PUBLIC_SMALLCHAT_ENABLED?.match(/true/i),
}) => {
  const getCopy = () => {
    if (chatEnabled) {
      return (
        <Typography variant="body2">
          Please connect with me on&nbsp;
          <ExternalLink href="https://www.linkedin.com/in/nicholeuf">
            LinkedIn
          </ExternalLink>
          &nbsp;or send a message in chat. I look forward to hearing from you!
        </Typography>
      );
    }

    return (
      <Typography variant="body2">
        Please connect with me on&nbsp;
        <ExternalLink href="https://www.linkedin.com/in/nicholeuf">
          LinkedIn
        </ExternalLink>
        . I look forward to hearing from you!
      </Typography>
    );
  };

  return (
    <PageContainer data-testid="contact-page">
      <Box component="section">
        <Typography variant="h1" gutterBottom>
          Contact
        </Typography>
        {getCopy()}
      </Box>
    </PageContainer>
  );
};

export default Contact;
