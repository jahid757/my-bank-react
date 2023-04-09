import React from "react";
import { Route, BrowserRouter, Routes, Navigate } from "react-router-dom";
import PrivateRoute from "../Auth/PrivateRoute";
import Login from "../Auth/Login/Login";
import NotFoundB from "../pages/NotFound_B";
import Registration from "../Auth/Registration/Registration";
import Profile from "../pages/Profile";
import EditProfile from "../pages/EditProfile";
import ResetPassword from "../Auth/ResetPassword/ResetPassword";
import EditMobile from "../Auth/EditMobile/EditMobile";

const AppRoutes = ({ user }) => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />

          <Route element={<PrivateRoute user={user} />}>
            <Route index element={<Profile/>} />
             <Route path="/edit-profile" element={<EditProfile/>} /> 
             <Route path="/edit-mobile" element={<EditMobile/>} /> 
            <Route  path="/reset-password" element={<ResetPassword />} />
            <Route  path="/profile" element={<Profile/>} />
          </Route>

          <Route path="*" element={<NotFoundB/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default AppRoutes;
