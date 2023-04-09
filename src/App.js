import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "./pages/Root";
import AdminRootLayout from "./pages/admin/AdminRoot";

import ErrorPage from "./pages/Error";

import HomePage from "./pages/Home";
import FAQPage from "./pages/FAQ";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import MyComplaints from "./pages/MyComplaints";
import CreateComplaint from "./pages/CreateComplaint";
import Complaint from "./pages/Complaint";
import FAQItem from "./pages/FAQItem";
import Dashboard from "./pages/admin/Dashboard";
import Admins from "./pages/admin/Admins";
import Users from "./pages/admin/Users";
import Complaints from "./pages/admin/Complaints";
import Categories from "./pages/admin/Categories";
import Login from "./pages/admin/LogIn";

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: '/home', element: <HomePage /> },
      { 
        path: '/faq',
        children: [
          { index: true, element: <FAQPage />},
          { path: ':item', element: <FAQItem /> }
        ]
      },
      { path: '/login', element: <LogIn /> },
      { path: '/signup', element: <SignUp /> },
      { path: '/create-complaint', element: <CreateComplaint /> },
      { path: '/my-complaints', element: <MyComplaints /> },
      { path: '/complaint/:complaintId', element: <Complaint /> },

    ],
  },
  {
    path: '/admin',
    children: [
      { path: 'login', element: <Login /> },
      {
        element: <AdminRootLayout />,
        children: [
          { index: true, element: <Dashboard /> },
          { path: 'dashboard', element: <Dashboard /> },
          { path: 'admins', element: <Admins /> },
          { path: 'users', element: <Users /> },
          { path: 'users/:page', element: <Users /> },
          { path: 'categories', element: <Categories /> },
          { path: 'complaints', element: <Complaints /> },
          { path: 'complaints/:page', element: <Complaints /> },
        ]
      }
    ]
  }
]);

const App = () => {
  return (
    <RouterProvider router={router} />
  );
};

export default App;
