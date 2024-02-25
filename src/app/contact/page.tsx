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
    <PageContainer>
      <Box component="section">
        <Typography variant="h1">Contact</Typography>
        <Typography>
          Please connect with me on{' '}
          <ExternalLink href="https://www.linkedin.com/in/nicholeuf">
            LinkedIn
          </ExternalLink>
          . I look forward to hearing from you!
        </Typography>
      </Box>
    </PageContainer>
  );
};

export default Contact;
