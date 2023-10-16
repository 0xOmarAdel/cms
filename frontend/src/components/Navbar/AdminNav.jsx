import "./AdminNav.css";

import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import AuthContext from "../../store/admin-auth-context";

import adminPic from "../../imgs/admin.png";

const Sidebar = (props) => {
  const adminName = localStorage.getItem("adminName");

  const menuItem = [
    {
      path: "dashboard",
      name: "Dashboard",
      icon: "fa fa-globe-europe",
    },
    {
      path: "admins",
      name: "Admins",
      icon: "fa-solid fa-user-shield",
    },
    {
      path: "users",
      name: "Users",
      icon: "fa-solid fa-users",
    },
    {
      path: "categories",
      name: "Categories",
      icon: "fa-solid fa-list",
    },
    {
      path: "complaints",
      name: "Complaints",
      icon: "fa-solid fa-envelope",
    },
  ];

  const navigate = useNavigate();

  const ctx = useContext(AuthContext);

  const logoutHandler = () => {
    ctx.onLogout();
    navigate("/admin/login");
  };

  return (
    <div className={props.menuIsOpened ? "sidebar sidebar-opened" : "sidebar"}>
      <i className="fa-solid fa-bars" onClick={props.toggleMenu}></i>

      <h1>Admin Panel</h1>

      <div className="sidebar-header">
        <div className="admin d-flex align-items-center">
          <div className="admin-info d-flex justify-content-center m-auto">
            <div className="admin-pic m-auto">
              <img src={adminPic} alt="Admin" />
            </div>
            <div className={"d-flex align-items-center pe-0"}>
              <div>
                <p className="admin-name mb-2">{adminName}</p>
                <p className="admin-role">Administrator</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ul>
        {menuItem.map((item, index) => (
          <li key={index}>
            <NavLink to={item.path} className="link d-flex align-items-center">
              <i className={`d-inline-block ${item.icon}`}></i>
              <span className="d-inline-block">{item.name}</span>
            </NavLink>
          </li>
        ))}

        <li
          className="mt-1"
          style={{ cursor: "pointer" }}
          onClick={logoutHandler}
        >
          <a className="link d-flex align-items-center">
            <i className="fa-solid fa-arrow-up-right-from-square"></i>
            <span>Logout</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
