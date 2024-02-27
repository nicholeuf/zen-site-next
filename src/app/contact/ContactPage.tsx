import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import PageContainer from '@/components/PageContainer';
import ExternalLink from '@/components/ExternalLink';
import { SMALLCHAT_ENABLED } from '@/app/lib/smallchat';
import BackgroundImage from '@/components/BackgroundImage';

interface ContactPageProps {
  chatEnabled?: boolean;
}

const ContactPage: React.FC<ContactPageProps> = ({
  chatEnabled = SMALLCHAT_ENABLED,
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
      <Typography variant="h1" gutterBottom>
        Contact
      </Typography>
      {getCopy()}
    </PageContainer>
  );
};

export default ContactPage;
