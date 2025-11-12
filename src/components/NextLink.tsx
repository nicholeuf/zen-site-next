'use client';

import Link, { type LinkProps } from '@mui/material/Link';
import NLink from 'next/link';
import React from 'react';

import { URLS } from '@/app/lib/routes';

export interface NextLinkProps extends LinkProps {
  children: React.ReactNode;
}

// Forward ref so this component can be used as the `component` prop
// on MUI components (IconButton/ButtonBase) which expect a ref to
// be attached to the underlying DOM element.
const NextLink = React.forwardRef<HTMLAnchorElement, NextLinkProps>(
  ({ children, ...props }, ref) => {
    const isDefinedPath = props.href ? URLS.includes(props.href) : false;

    return (
      <Link component={isDefinedPath ? NLink : 'a'} {...props} ref={ref}>
        {children}
      </Link>
    );
  }
);

NextLink.displayName = 'NextLink';

export default NextLink;
