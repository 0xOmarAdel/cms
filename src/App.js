import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "./pages/Root";
import ErrorPage from "./pages/Error";

import HomePage from "./pages/Home";
import FAQPage from "./pages/FAQ";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import MyComplaints from "./pages/MyComplaints";
import CreateComplaint from "./pages/CreateComplaint";
import Complaint from "./pages/Complaint";
import FAQItem from "./pages/FAQItem";

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
  }
]);

const App = () => {
  return (
    <RouterProvider router={router} />
  );
};

export default App;
