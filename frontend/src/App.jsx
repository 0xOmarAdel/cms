import { Navigate, Route, Routes } from "react-router-dom";

import RootLayout from "./pages/Root";
import AdminRootLayout from "./pages/admin/AdminRoot";

import ErrorPage from "./pages/Error";

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
import AdminComplaint from "./pages/admin/Complaint";
import Categories from "./pages/admin/Categories";
import AdminLogIn from "./pages/admin/LogIn";
import AdminPage from "./pages/admin/AdminPage";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";
import { selectUser, setUser } from "./store/slices/authSlice";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const user = useSelector(selectUser);

  const dispatch = useDispatch();
  const localToken = localStorage.getItem("token");
  useEffect(() => {
    if (!localToken) {
      setIsLoading(false);
      return;
    }
    const fetchToken = async () => {
      try {
        const response = await axios.post(
          "http://localhost:5000/api/v1/validateToken",
          {
            token: localToken,
          }
        );
        console.log(response);
        dispatch(setUser(response.data.userData));
      } catch (error) {
        console.error(error);
      }
      setIsLoading(false);
    };
    fetchToken();
  }, [dispatch, localToken]);

  if (isLoading) return;

  return (
    <Routes>
      <Route path="*" element={<ErrorPage />} />
      <Route path="/" element={<RootLayout />}>
        <Route
          index={true}
          element={!user ? <LogIn /> : <Navigate to="/my-complaints/1" />}
        />
        <Route
          path="/login"
          element={!user ? <LogIn /> : <Navigate to="/my-complaints/1" />}
        />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/create-complaint" element={<CreateComplaint />} />
        <Route path="/my-complaints/:page" element={<MyComplaints />} />
        <Route path="/complaint/:complaintId" element={<Complaint />} />
      </Route>
    </Routes>
  );
};

export default App;
