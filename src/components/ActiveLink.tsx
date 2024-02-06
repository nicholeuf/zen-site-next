"use client";

import { usePathname } from "next/navigation";
import Link, { LinkProps } from "next/link";

interface ActiveLinkProps extends LinkProps {
  children: React.ReactNode;
}

const ActiveLink: React.FC<ActiveLinkProps> = ({
  href,
  children,
  ...props
}) => {
  const pathname = usePathname();

  return (
    <Link
      {...props}
      className={`link ${pathname === href ? "active" : ""}`}
      href={href}
    >
      {children}
    </Link>
  );
};

export default ActiveLink;
