import Typography from '@mui/material/Typography';

import PageContainer from '@/components/PageContainer';
import ExternalLink from '@/components/ExternalLink';
import { SMALLCHAT_ENABLED } from '@/app/lib/smallchat';

interface ContactPageProps {
  chatEnabled?: boolean;
}

const ContactPage: React.FC<ContactPageProps> = ({
  chatEnabled = SMALLCHAT_ENABLED,
}) => {
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
      <Typography variant="body2">
        Please connect with me on&nbsp;{LinkedInContent}
        {chatEnabled && ' or send a message in chat'}. I look forward to hearing
        from you!
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
