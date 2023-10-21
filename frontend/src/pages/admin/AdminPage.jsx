import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import AdminNav from "../../components/Navbar/AdminNav";

const AdminPage = () => {
  const [menuIsOpened, setMenuIsOpened] = useState(false);
  const [marginLeft, setMarginLeft] = useState(300);

  useEffect(() => {
    const shrinkHeader = () => {
      if (window.innerWidth > 1000) {
        setMarginLeft(300);
      } else {
        setMarginLeft(120);
      }
    };

    window.addEventListener("resize", shrinkHeader);

    return () => {
      window.removeEventListener("resize", shrinkHeader);
    };
  }, []);

  return (
    <>
      <AdminNav setMenuIsOpened={setMenuIsOpened} menuIsOpened={menuIsOpened} />
      <div
        className="min-h-screen pt-[50px] sm:pt-[60px] md:pt-[75px] lg:pt-[90px] px-[30px] sm:px-[40px] md:px-[70px] lg:px-[100px] bg-[#f2f5f7] transition-[margin-left] duration-[1.2s]"
        style={{ marginLeft: menuIsOpened ? `${marginLeft}px` : "120px" }}
      >
        <Outlet />
      </div>
    </>
  );
};

export default AdminPage;
