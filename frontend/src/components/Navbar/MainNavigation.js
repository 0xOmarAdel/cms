import { FaBars, FaRegWindowMinimize } from "react-icons/fa";
import "./MainNavigation.css";
import NavbarLink from "./NavbarLink";
import { useState, useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../store/auth-context";

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
    { path: "/faq", text: "FAQ" },
    { path: "/login", text: "Log In" },
    { path: "/signup", text: "Sign Up" },
  ];

  const navLinks2 = [
    { path: "/faq", text: "FAQ" },
    { path: "/my-complaints", text: "My Complaints" },
    { path: "/create-complaint", text: "Create Complaint" },
  ];

  const navigate = useNavigate();

  const ctx = useContext(AuthContext);

  const logoutHandler = () => {
    ctx.onLogout();
    navigate('/login')
  };

  return (
    <nav className="grad">
      <div className="nav-center">
        <div className="nav-header">
          <h2>CMS</h2>
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
              {
                !ctx.isLoggedIn ?
                  navLinks.map((navLink, index) => (
                    <NavbarLink key={index} path={navLink.path} text={navLink.text} />
                  ))
                :
                  <>
                    {
                      navLinks2.map((navLink, index) => (
                        <NavbarLink key={index} path={navLink.path} text={navLink.text} />
                      ))
                    }

                    <li><a onClick={logoutHandler} style={{cursor: 'pointer'}}>Logout</a></li>
                  </>
              }
            </ul>
        </div>
      </div>
    </nav>
  );
};

export default MainNavigation;
