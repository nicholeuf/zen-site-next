export const CONTACT_EMAIL = "contact@thecodingyogi.me";
export const CONTACT_EMAIL_SUBJECT = "Website Inquiry";
export const LINKEDIN_URL = "https://www.linkedin.com/in/nicholeuf";
export const GITHUB_URL = "https://github.com/nicholeuf";

export const getEmailHref = (subject: string = CONTACT_EMAIL_SUBJECT) =>
  `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}`;
