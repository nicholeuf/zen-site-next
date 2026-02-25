"use client";

import Link, { LinkProps } from "@mui/material/Link";
import NLink from "next/link";
import React from "react";

import { URLS } from "@/app/lib/routes";

export interface NextLinkProps extends LinkProps {
  children: React.ReactNode;
}

// Forward ref so this component can be used as the `component` prop
// on MUI components (IconButton/ButtonBase) which expect a ref to
// be attached to the underlying DOM element.
const NextLink = React.forwardRef<HTMLAnchorElement, NextLinkProps>(
  ({ children, href = "/", ...props }, ref) => {
    const isDefinedPath = URLS.includes(href);

    return (
      <Link
        component={isDefinedPath ? NLink : "a"}
        href={href}
        {...props}
        ref={ref}
        data-test-id={isDefinedPath ? "next-link" : "a-link"}
      >
        {children}
      </Link>
    );
  }
);

NextLink.displayName = "NextLink";

export default NextLink;
