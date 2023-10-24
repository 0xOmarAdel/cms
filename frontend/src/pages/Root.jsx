import { Outlet } from "react-router-dom";
import Footer from "../layout/Footer";
import Navbar from "../layout/Navbar";

const RootLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default RootLayout;
