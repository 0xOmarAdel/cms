import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";
import { FaBars, FaRegWindowMinimize } from "react-icons/fa";
import "./MainNavigation.css";
import NavbarLink from "./NavbarLink";
import { useState, useRef } from "react";

const MainNavigation = () => {
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  const [showLinks, setShowLinks] = useState(false);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  const linkStyles = {
    height: showLinks
      ? `${linksRef.current.getBoundingClientRect().height}px`
      : "0px",
  };

  const navLinks = [
    { path: "/", text: "Home" },
    { path: "/faq", text: "FAQ" },
    { path: "/login", text: "Log In" },
    { path: "/signup", text: "Sign Up" },
  ];

  return (
    <nav className="grad">
      <div className="nav-center">
        <div className="nav-header">
          <h2>Demo</h2>
          <button className="nav-toggle" onClick={toggleLinks}>
            {showLinks ? <FaRegWindowMinimize /> : <FaBars />}
          </button>
        </div>

        <div
          className="links-container"
          ref={linksContainerRef}
          style={linkStyles}
        >
          <ul className="links" ref={linksRef}>
            {navLinks.map((navLink, index) => (
              <NavbarLink key={index} path={navLink.path} text={navLink.text} />
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default MainNavigation;
