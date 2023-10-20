import {
  FaGlobe,
  FaUserShield,
  FaListUl,
  FaEnvelope,
  FaUsers,
} from "react-icons/fa6";

export const guestNavLinks = [
  { path: "/faq", text: "FAQ" },
  { path: "/login", text: "Log In" },
  { path: "/signup", text: "Sign Up" },
];

export const userNavLinks = [
  { path: "/faq", text: "FAQ" },
  { path: "/my-complaints", text: "My Complaints" },
  { path: "/create-complaint", text: "Create Complaint" },
];

export const adminMenu = [
  {
    path: "dashboard",
    name: "Dashboard",
    icon: FaGlobe,
  },
  {
    path: "admins",
    name: "Admins",
    icon: FaUserShield,
  },
  {
    path: "users",
    name: "Users",
    icon: FaUsers,
  },
  {
    path: "categories",
    name: "Categories",
    icon: FaListUl,
  },
  {
    path: "complaints",
    name: "Complaints",
    icon: FaEnvelope,
  },
];
