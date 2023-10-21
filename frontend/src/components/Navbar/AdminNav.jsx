import { NavLink, useMatch, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectUser, logout } from "../../store/slices/userAuthSlice";
import { adminMenu } from "../../data/lists";
import adminPic from "../../imgs/admin.png";
import { Spin as Hamburger } from "hamburger-react";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

const Sidebar = (props) => {
  const user = useSelector(selectUser);
  const adminName = `${user.firstName} ${user.lastName}`;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logout());
    navigate("/admin/login");
  };

  return (
    <div
      className={`fixed z-50 h-screen pt-24 bg-gray-50 shadow-lg text-gray-600 font-medium overflow-hidden transition-all duration-[1.2s] sidebar-opened
          ${props.menuIsOpened ? "w-[300px]" : "w-[120px]"}`}
    >
      <div
        className={`absolute top-10 transition-all duration-[1.2s]  ${
          props.menuIsOpened ? "right-5" : "right-1/2 translate-x-1/2"
        }`}
      >
        <Hamburger
          toggled={props.menuIsOpened}
          toggle={props.setMenuIsOpened}
          size={22}
        />
      </div>
      <h1
        className={`pl-16 text-base text-black uppercase whitespace-nowrap overflow-hidden transition-all duration-[1.2s] ${
          props.menuIsOpened ? "w-full" : "w-0"
        }`}
      >
        Admin Panel
      </h1>
      <div
        className={`min-w-[40px] pt-[15px] pb-[25px] transition-all duration-[1.2s] ${
          props.menuIsOpened ? "px-[35px]" : "px-[30px]"
        }`}
      >
        <div className="py-[25px] flex flex-row items-center border-y-2 border-gray-300">
          <div
            className={`mx-auto flex flex-row justify-center overflow-hidden transition-all duration-[1.2s] ${
              props.menuIsOpened ? "gap-3" : "gap-0"
            }`}
          >
            <img src={adminPic} alt="Admin" className="w-[50px] mx-auto" />
            <div
              className={`flex flex-col gap-1 transition-all duration-[1.2s] ${
                props.menuIsOpened ? "w-full" : "w-0"
              }`}
            >
              <p className="text-black text-base whitespace-nowrap overflow-hidden transition duration-[1.2s]">
                {adminName}
              </p>
              <p className="text-gray-500 text-sm whitespace-nowrap overflow-hidden transition duration-[1.2s]">
                Administrator
              </p>
            </div>
          </div>
        </div>
      </div>
      <ul className="flex flex-col gap-3">
        {adminMenu.map((item, index) => (
          <li key={index}>
            <NavLink
              to={item.path}
              className={`pt-[5px] flex flex-row items-center gap-2 whitespace-nowrap overflow-hidden transition-all duration-[1.2s] group ${
                props.menuIsOpened
                  ? "pb-[5px] px-[65px]"
                  : "pr-0 pb-[5px] pl-[47px]"
              } ${useMatch(`/admin/${item.path}/*`) && "text-sky-500"}`}
            >
              <item.icon className="text-xl group-hover:animate-swing" />
              <span
                className={`text-black text-base tracking-wider whitespace-nowrap overflow-hidden transition-all duration-700 ${
                  props.menuIsOpened ? "w-full" : "w-0"
                }`}
              >
                {item.name}
              </span>
            </NavLink>
          </li>
        ))}

        <li
          className="mt-1"
          style={{ cursor: "pointer" }}
          onClick={logoutHandler}
        >
          <a
            className={`flex flex-row items-center gap-2 whitespace-nowrap overflow-hidden transition-all duration-[1.2s] group ${
              props.menuIsOpened
                ? "pb-[13px] px-[65px]"
                : "pr-0 pb-[13px] pl-[47px]"
            }`}
          >
            <FaArrowUpRightFromSquare className="text-xl" />
            <span
              className={`text-black text-base tracking-wider whitespace-nowrap overflow-hidden transition-all duration-700 ${
                props.menuIsOpened ? "w-full" : "w-0"
              }`}
            >
              Logout
            </span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
