import HeaderLogo from "./HeaderLogo";
import Navigation from "./Navigation";
import styles from "./index.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <HeaderLogo />
      <Navigation />
    </header>
  );
};

export default Header;
