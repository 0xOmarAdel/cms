import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
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
    <nav className="absolute pb-5 z-[50] w-full px-10 sm:px-16 md:px-28 lg:px-40 xl:px-60 py-8 flex flex-row items-center justify-between">
      <Link to="/" className="text-4xl text-white">
        CMS
      </Link>
      {showLinks && (
        <div
          className="fixed inset-0 z-30 bg-black bg-opacity-60 cursor-pointer"
          onClick={toggleLinks}
        />
      )}

      <div
        className={`fixed lg:static top-0 left-0 h-screen lg:h-fit pt-14 px-8 lg:p-0 bg-white lg:bg-transparent text-black lg:text-gray-200 shadow-lg lg:shadow-none transition-all duration-500 ease-in-out z-40 ${
          showLinks ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        <div className="lg:hidden mb-5 flex flex-row justify-between text-3xl text-gray-600">
          <h2>CMS</h2>
          <IoClose
            className="cursor-pointer transition duration-300 hover:text-sky-500"
            onClick={toggleLinks}
          />
        </div>
        <ul className="flex flex-col space-y-8 lg:space-y-0 lg:flex-row gap-2 lg:gap-4 text-xl lg:text-2xl">
          {user
            ? userNavLinks.map((navLink, index) => (
                <NavbarLink
                  key={index}
                  path={navLink.path}
                  text={navLink.text}
                  setShowLinks={setShowLinks}
                />
              ))
            : guestNavLinks.map((navLink, index) => (
                <NavbarLink
                  key={index}
                  path={navLink.path}
                  text={navLink.text}
                  setShowLinks={setShowLinks}
                />
              ))}
          {user && (
            <li
              className={`cursor-pointer ${showLinks && "text-gray-400"}`}
              onClick={logoutHandler}
            >
              Logout
            </li>
          )}
        </ul>
      </div>

      <button
        className="lg:hidden text-xl text-gray-200 transition duration-500 hover:text-white"
        onClick={toggleLinks}
      >
        <FaBars />
      </button>
    </nav>
  );
};

export default Navbar;
