import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import AdminSidebar from "../../layout/AdminSidebar";

const AdminPage = () => {
  const [menuIsOpened, setMenuIsOpened] = useState(false);
  const [marginLeft, setMarginLeft] = useState(300);

  useEffect(() => {
    const marginHandler = () => {
      if (window.innerWidth > 1000) {
        setMarginLeft(300);
      } else {
        setMarginLeft(120);
      }
    };

    window.addEventListener("resize", marginHandler);

    return () => {
      window.removeEventListener("resize", marginHandler);
    };
  }, []);

  return (
    <>
      <AdminSidebar
        setMenuIsOpened={setMenuIsOpened}
        menuIsOpened={menuIsOpened}
      />
      <div
        className="min-h-screen py-[50px] sm:py-[60px] md:py-[75px] lg:py-[90px] px-[30px] sm:px-[40px] md:px-[70px] lg:px-[100px] bg-[#f2f5f7] transition-[margin-left] duration-[1.2s]"
        style={{ marginLeft: menuIsOpened ? `${marginLeft}px` : "120px" }}
      >
        <Outlet />
      </div>
    </>
  );
};

export default AdminPage;
