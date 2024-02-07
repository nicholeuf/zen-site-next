import SimpleIcon from "components/SimpleIcon";
import styles from "./footer.module.css";

const links = [
  {
    slug: "github",
    alt: "Github External Link",
    href: "https://github.com/nicholeuf",
  },
  {
    slug: "linkedin",
    alt: "LinkedIn External Link",
    href: "https://www.linkedin.com/in/nicholeuf",
  },
  {
    slug: "npm",
    alt: "NPM External Link",
    href: "https://www.npmjs.com/~nicholeuf",
  },
  {
    slug: "codepen",
    alt: "Codepen External Link",
    href: "https://codepen.io/nicholeuf-the-vuer",
  },
];

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <ul className={styles.links}>
        {links.map(({ href, slug, alt }) => {
          return (
            <li key={slug}>
              <a target="_blank" href={href}>
                <SimpleIcon slug={slug} alt={alt} color="eee5e9ff" />
              </a>
            </li>
          );
        })}
      </ul>
      <p className={styles.tagline}>
        Made with <span className={styles.heart}>&#9829;</span> by Nichole Frey{" "}
      </p>
      <p className={styles.copyright}>
        &#169; Copyright {new Date().getFullYear()} -{" "}
        <strong>All Rights Reserved</strong>-{" "}
        <a target="_blank" href="https://github.com/nicholeuf/zen-site-next">
          [view source code]
        </a>
      </p>
    </footer>
  );
};

export default Footer;
