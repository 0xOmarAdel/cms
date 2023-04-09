import React from "react";
import { NavLink } from "react-router-dom";

const NavbarLink = (props) => {
  return (
    <li>
      <NavLink
        to={props.path}
        className={({ isActive }) => (isActive ? "active-link" : "")}
      >
        {props.text}
      </NavLink>
    </li>
  );
};

export default NavbarLink;
