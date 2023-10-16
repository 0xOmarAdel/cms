import React, { useState } from "react";
import { Outlet } from "react-router-dom";

import AdminNav from "../../components/Navbar/AdminNav";

import "./AdminPage.css";

const AdminPage = () => {
  const [menuIsOpened, setMenuIsOpened] = useState(false);

  const toggleMenuHandler = () => setMenuIsOpened(!menuIsOpened);

  return (
    <>
      <AdminNav toggleMenu={toggleMenuHandler} menuIsOpened={menuIsOpened} />
      <div
        className="admin-page-content"
        style={{ marginLeft: menuIsOpened ? "300px" : "120px" }}
      >
        <Outlet />
      </div>
    </>
  );
};

export default AdminPage;
