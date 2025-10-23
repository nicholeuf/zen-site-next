import Link, { LinkProps } from '@mui/material/Link';

interface ExternalLinkProps extends LinkProps {
  children: React.ReactNode;
}

const ExternalLink: React.FC<ExternalLinkProps> = ({
  children,
  target = '_blank',
  rel = 'noopener noreferrer',
  ...props
}) => {
  // Add aria-label for external links if not already provided
  const ariaLabel =
    props['aria-label'] ||
    (target === '_blank' ? `${children} (opens in new window)` : undefined);

  return (
    <Link {...props} target={target} rel={rel} aria-label={ariaLabel}>
      {children}
    </Link>
  );
};

export default ExternalLink;
