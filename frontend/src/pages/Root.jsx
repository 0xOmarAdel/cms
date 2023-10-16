import { Outlet } from "react-router-dom";
import Footer from "../components/footer/Footer";

import MainNavigation from "../components/Navbar/MainNavigation";
import { AuthContextProvider } from "../store/auth-context";

const RootLayout = () => {
  return (
    <AuthContextProvider>
      <MainNavigation />
      <Outlet />
      <Footer />
    </AuthContextProvider>
  );
};

export default RootLayout;
