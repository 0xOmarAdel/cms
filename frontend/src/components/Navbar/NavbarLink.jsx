import { NavLink } from "react-router-dom";

const NavbarLink = ({ setShowLinks, path, text }) => {
  return (
    <li>
      <NavLink
        to={path}
        className={({ isActive }) =>
          isActive ? "active text-gray-50" : "text-gray-200"
        }
        onClick={() => setShowLinks(false)}
      >
        {text}
      </NavLink>
    </li>
  );
};

export default NavbarLink;
