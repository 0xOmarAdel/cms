import { NavLink } from "react-router-dom";

const NavbarLink = ({ setShowLinks, path, text }) => {
  return (
    <li>
      <NavLink
        to={path}
        className={({ isActive }) =>
          isActive
            ? "text-gray-900 lg:text-gray-50"
            : "text-gray-400 lg:text-gray-200"
        }
        onClick={() => setShowLinks(false)}
      >
        {text}
      </NavLink>
    </li>
  );
};

export default NavbarLink;
