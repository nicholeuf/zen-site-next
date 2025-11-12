import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import ExternalLink from '@/components/ExternalLink';

interface ContactContent {
  chatEnabled: boolean;
}

const ContactContent: React.FC<ContactContent> = ({ chatEnabled }) => {
  const getCopy = () => {
    const LinkedInContent = (
      <ExternalLink href="https://www.linkedin.com/in/nicholeuf">
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
    <Box>
      <Typography variant="h1" gutterBottom>
        Contact
      </Typography>
      {getCopy()}
    </Box>
  );
};

export default ContactContent;
