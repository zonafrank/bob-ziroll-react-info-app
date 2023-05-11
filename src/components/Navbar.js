import reactLogo from "../images/logo192.png";
import ThemeToggle from "./ThemeToggle";

const Navbar = ({ isDarkMode, toggleDarkMode }) => {
  return (
    <nav className="navbar">
      <a className="navbar-brand" href="#">
        <img
          src={reactLogo}
          alt="react logo"
          width="40px"
          className="nav-logo"
        />
        <span className="nav-title">ReactFacts</span>
      </a>
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">
            Pricing
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            About
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Contact
          </a>
        </li>
      </ul>
      <ThemeToggle isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
    </nav>
  );
};

export default Navbar;
