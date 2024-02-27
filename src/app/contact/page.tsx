import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Metadata } from 'next';

import PageContainer from '@/components/PageContainer';
import ExternalLink from '@/components/ExternalLink';

export const metadata: Metadata = {
  title: 'Contact',
};

const Contact: React.FC = () => {
  return (
    <PageContainer data-testid="contact-page">
      <Box component="section">
        <Typography variant="h1" gutterBottom>
          Contact
        </Typography>
        <Typography variant="body2">
          Please connect with me on&nbsp;
          <ExternalLink href="https://www.linkedin.com/in/nicholeuf">
            LinkedIn
          </ExternalLink>
          &nbsp;or send a message in chat. I look forward to hearing from you!
        </Typography>
      </Box>
    </PageContainer>
  );
};

export default Contact;
