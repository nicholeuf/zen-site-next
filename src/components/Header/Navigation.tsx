"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

import styles from "./Navigation.module.css";

const links = [
  {
    href: "/experience",
    name: "Work",
  },
  {
    href: "/about",
    name: "About",
  },
  {
    href: "/",
    name: "Home",
  },
];

const Navigation = () => {
  const pathname = usePathname();

  return (
    <nav>
      <ul className={styles.ul}>
        {links.map(({ href, name }) => {
          return (
            <li key={href} className={styles.li}>
              <Link
                href={href}
                className={pathname === href ? styles.linkActive : styles.link}
              >
                {name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navigation;
