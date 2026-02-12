import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import EmailIcon from "@mui/icons-material/Email";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { CONTACT_EMAIL, getEmailHref, LINKEDIN_URL } from "@/app/lib/constants";
import ExternalLink from "@/components/ExternalLink";

interface ContactContent {
  chatEnabled: boolean;
}

const ContactContent: React.FC<ContactContent> = ({ chatEnabled }) => {
  const getCopy = () => {
    const linkedInLink = (
      <ExternalLink
        href={LINKEDIN_URL}
        aria-label="Connect on LinkedIn (opens in new window)"
      >
        LinkedIn
      </ExternalLink>
    );

    return (
      <>
        <Typography variant="body2" data-testid="contact-copy">
          Email is the best way to reach me. You can also connect on{" "}
          {linkedInLink}
          {chatEnabled && (
            <>
              , or send a message in the
              <ChatBubbleIcon
                sx={{ fontSize: "1rem", verticalAlign: "text-bottom", ml: 0.5 }}
                aria-hidden="true"
                color="primary"
              />
              &nbsp;chat and I’ll see it on Slack
            </>
          )}
          .
        </Typography>
        <Typography variant="body2" sx={{ mt: 2 }}>
          Please reach out if you have any questions about the site or just want
          to connect. I’ll reply as soon as I’m able.
        </Typography>
      </>
    );
  };
  return (
    <Box>
      <Typography variant="h1" gutterBottom>
        Contact
      </Typography>
      {getCopy()}
      <Button
        variant="outlined"
        startIcon={<EmailIcon />}
        href={getEmailHref()}
        sx={{ mt: 2 }}
        aria-label={`Send email to Nichole at ${CONTACT_EMAIL}`}
      >
        Email me at {CONTACT_EMAIL}
      </Button>
    </Box>
  );
};

export default ContactContent;
