import Link, { LinkProps } from '@mui/material/Link';
import NLink from 'next/link';

interface NextLinkProps extends LinkProps {
  children: React.ReactNode;
}

const NextLink: React.FC<NextLinkProps> = ({ children, ...props }) => {
  return (
    <Link component={NLink} {...props}>
      {children}
    </Link>
  );
};

export default NextLink;
