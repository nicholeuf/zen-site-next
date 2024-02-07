import Link from "next/link";

import styles from "./HeaderLogo.module.css";

// TODO: Consider making "nf" a pseudo element and
// insert my name as a visually hidden element for screen readers only

const HeaderLogo: React.FC = () => {
  return (
    <div className={styles.logo}>
      <Link href="/" className={styles.link}>
        nf
      </Link>
    </div>
  );
};

export default HeaderLogo;
