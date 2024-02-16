import Link, { LinkProps } from '@mui/material/Link';

interface ExternalLinkProps extends LinkProps {
  children: React.ReactNode;
}

const ExternalLink: React.FC<ExternalLinkProps> = ({
  children,
  target = '_blank',
  rel = 'noopener',
  ...props
}) => {
  return (
    <Link {...props} target={target} rel={rel}>
      {children}
    </Link>
  );
};

export default ExternalLink;
