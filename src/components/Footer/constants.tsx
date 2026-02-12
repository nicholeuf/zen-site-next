import EmailIcon from "@mui/icons-material/Email";
import GithubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { CONTACT_EMAIL, GITHUB_URL, LINKEDIN_URL } from "@/app/lib/constants";

export const footerLinks = [
  {
    slug: "linkedin",
    icon: LinkedInIcon,
    href: LINKEDIN_URL,
    ariaLabel: "LinkedIn (opens in new window)",
  },
  {
    slug: "github",
    icon: GithubIcon,
    href: GITHUB_URL,
    ariaLabel: "GitHub (opens in new window)",
  },
  {
    slug: "email",
    icon: EmailIcon,
    href: `mailto:${CONTACT_EMAIL}`,
    ariaLabel: "Email (opens email client)",
  },
];
