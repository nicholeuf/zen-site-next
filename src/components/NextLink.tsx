'use client';

import Link, { LinkProps } from '@mui/material/Link';
import NLink from 'next/link';
import { usePathname } from 'next/navigation';

import { URLS } from '@/app/lib/routes';

interface NextLinkProps extends LinkProps {
  children: React.ReactNode;
}

const NextLink: React.FC<NextLinkProps> = ({ children, ...props }) => {
  // Workaround for https://github.com/nicholeuf/zen-site-next/issues/66
  // Use anchor tag for all links on the "not found" page
  const pathname = usePathname();
  const isDefinedPath = URLS.includes(pathname);

  return (
    <Link component={isDefinedPath ? NLink : 'a'} {...props}>
      {children}
    </Link>
  );
};

export default NextLink;
