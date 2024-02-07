import styles from "./logo.module.css";

const Logo = () => {
  return (
    <div className={styles.logo}>
      <p className={styles.title}>Nichole Frey</p>
      <p className={styles.subtitle}>Full-Stack Developer</p>
    </div>
  );
};

export default Logo;
