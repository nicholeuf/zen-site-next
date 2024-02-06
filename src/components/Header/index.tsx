import Logo from "components/Logo";
import ActiveLink from "components/ActiveLink";
import "./header.css";

export default function Header() {
  return (
    <header>
      <div className="header-content">
        <Logo />
        <nav className="navigation">
          <ul>
            <li>
              <ActiveLink href="/experience">Experience</ActiveLink>
            </li>
            <li>
              <ActiveLink href="/about">About Me</ActiveLink>
            </li>
            <li>
              <ActiveLink href="/credits">Credits</ActiveLink>
            </li>
            <li>
              <ActiveLink href="/">Home</ActiveLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
