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
      <Logo />
    </div>
  );
};

export default HomePage;
