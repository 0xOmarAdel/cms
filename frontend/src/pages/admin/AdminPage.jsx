import { useState } from "react";
import { Outlet } from "react-router-dom";
import AdminNav from "../../components/Navbar/AdminNav";

import "./AdminPage.css";

const AdminPage = () => {
  const [menuIsOpened, setMenuIsOpened] = useState(false);

  return (
    <>
      <AdminNav setMenuIsOpened={setMenuIsOpened} menuIsOpened={menuIsOpened} />
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
