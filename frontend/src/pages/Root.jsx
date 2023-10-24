import { Outlet } from "react-router-dom";
import Footer from "../layout/Footer";

import MainNavigation from "../components/Navbar/MainNavigation";

const RootLayout = () => {
  return (
    <>
      <MainNavigation />
      <Outlet />
      <Footer />
    </>
  );
};

export default RootLayout;
