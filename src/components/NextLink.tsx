'use client';

import Link, { LinkProps } from '@mui/material/Link';
import NLink from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

import { URLS } from '@/app/lib/routes';

interface NextLinkProps extends LinkProps {
  children: React.ReactNode;
}

// Forward ref so this component can be used as the `component` prop
// on MUI components (IconButton/ButtonBase) which expect a ref to
// be attached to the underlying DOM element.
const NextLink = React.forwardRef<HTMLAnchorElement, NextLinkProps>(
  ({ children, ...props }, ref) => {
    // Workaround for https://github.com/nicholeuf/zen-site-next/issues/66
    // Use anchor tag for all links on the "not found" page
    const pathname = usePathname();
    const isDefinedPath = URLS.includes(pathname);

    return (
      <Link component={isDefinedPath ? NLink : 'a'} {...props} ref={ref}>
        {children}
      </Link>
    );
  }
);

NextLink.displayName = 'NextLink';

export default NextLink;
