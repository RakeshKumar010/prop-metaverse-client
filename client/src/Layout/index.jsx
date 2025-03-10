import React, { useContext, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Popup from "../components/global/Popup";
import { MyContext } from "../App";
import Admin from "../pages/Admin";
import RedirectPage from "../pages/RedirectPage";
import AdminLogin from "../pages/AdminLogin";
import Dashboard from "../components/admin/pages/Dashboard";
import WeEnquiry from "../components/admin/pages/WeEnquiry";
import User from "../components/admin/pages/User";
import MyProfile from "../components/admin/pages/MyProfile";
import AddUser from "../components/admin/pages/AddUser";
import NotFound from "../pages/NotFound";
import DamacEnquiry from "../components/admin/pages/DamacEnquiry";

const Layout = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  useEffect(() => {
    
    const user = localStorage.getItem("user");
    if (user) {
      setIsAdmin(true);
    }
    
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/admin-login"
          element={<AdminLogin setIsAdmin={setIsAdmin} />}
        />
        <Route
          path="/admin"
          element={
            isAdmin ? (
              <Admin />
            ) : (
              <RedirectPage title={"Admin"} router={"/admin-login"} />
            )
          }
        >
          <Route index element={<Dashboard />} />
          <Route path="we-enquiry" element={<WeEnquiry />} />
          <Route path="damac-enquiry" element={<DamacEnquiry />} />
          <Route path="user" element={<User />} />
          <Route path="add-user" element={<AddUser />} />
          <Route path="user/:id" element={<AddUser action={"edit"} />} />
          <Route path="my-profile" element={<MyProfile />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Layout;
