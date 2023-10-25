import { NavLink } from "react-router-dom";

const NavbarLink = ({ setShowLinks, path, text }) => {
  return (
    <li>
      <NavLink
        to={path}
        className={({ isActive }) => (isActive ? "active" : "")}
        onClick={() => setShowLinks(false)}
      >
        {text}
      </NavLink>
    </li>
  );
};

export default NavbarLink;
