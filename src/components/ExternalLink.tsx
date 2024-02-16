import Link, { LinkProps } from '@mui/material/Link';

interface ExternalLinkProps extends LinkProps {
  children: React.ReactNode;
}

const ExternalLink: React.FC<ExternalLinkProps> = ({ children, ...props }) => {
  return (
    <Link {...props} target="_blank" rel="noopener">
      {children}
    </Link>
  );
};

export default ExternalLink;
