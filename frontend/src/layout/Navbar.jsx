import { FaBars, FaRegWindowMinimize } from "react-icons/fa";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { guestNavLinks, userNavLinks } from "../data/lists";
import NavbarLink from "../components/Navbar/NavbarLink";
import { logout, selectUser } from "../store/slices/userAuthSlice";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector(selectUser);

  const [showLinks, setShowLinks] = useState(false);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  const logoutHandler = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <nav className="absolute z-[50] w-full px-10 sm:px-16 md:px-28 lg:px-40 xl:px-60 py-8 flex flex-row items-center justify-between">
      <Link to="/" className="text-4xl text-white">
        CMS
      </Link>
      <ul className="hidden lg:flex lg:flex-row lg:gap-4 text-2xl text-gray-200">
        {user
          ? userNavLinks.map((navLink, index) => (
              <NavbarLink key={index} path={navLink.path} text={navLink.text} />
            ))
          : guestNavLinks.map((navLink, index) => (
              <NavbarLink key={index} path={navLink.path} text={navLink.text} />
            ))}
        {user && (
          <li className="cursor-pointer" onClick={logoutHandler}>
            Logout
          </li>
        )}
      </ul>
      <button
        className="lg:hidden text-xl text-gray-200 transition duration-500 hover:text-white"
        onClick={toggleLinks}
      >
        {showLinks ? <FaRegWindowMinimize /> : <FaBars />}
      </button>
    </nav>
  );
};

export default Navbar;
