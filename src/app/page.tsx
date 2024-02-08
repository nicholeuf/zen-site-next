import type { Metadata } from "next";

import Logo from "components/Logo";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Full-Stack Web Developer",
};

// Should this be a grid?
// text logo
// photo text

const HomePage = () => {
  return (
    <div className={styles.wrapper}>
      <div id={styles.photo} className={styles.placeholder}>
        <p>photo</p>
      </div>
      <div id={styles.logo} className={styles.block}>
        <Logo />
      </div>
      <div id={styles.copy} className={styles.placeholder}>
        <p>copy</p>
      </div>
    </div>
  );
};

export default HomePage;
