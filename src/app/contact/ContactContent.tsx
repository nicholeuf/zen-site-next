import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import EmailIcon from "@mui/icons-material/Email";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

interface ContactContent {
  chatEnabled: boolean;
}

const ContactContent: React.FC<ContactContent> = ({ chatEnabled }) => {
  const emailAddress = "contact@thecodingyogi.me";
  const emailHref = `mailto:${emailAddress}`;

  const getCopy = () => {
    return (
      <Typography variant="body2" data-testid="contact-copy">
        Email is the best way to reach me. You can also connect on LinkedIn
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
        . I look forward to hearing from you!
      </Typography>
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
        href={emailHref}
        sx={{ mt: 2 }}
        aria-label={`Send email to Nichole at ${emailAddress}`}
      >
        Email me at {emailAddress}
      </Button>
      <Button
        variant="text"
        href="https://www.linkedin.com/in/nicholeuf"
        sx={{ mt: 1 }}
        aria-label="Connect on LinkedIn"
      >
        Connect on LinkedIn
      </Button>
    </Box>
  );
};

export default ContactContent;
