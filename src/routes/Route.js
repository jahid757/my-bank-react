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
import Dashboard from "../pages/Dashboard";
import Card from "../pages/Card";
import CreateCard from "../pages/CreateCard";
import Account from "../pages/Account";
import UpdateAccount from "../pages/UpdateAccount";
import MobileBank from "../pages/MobileBank";
import CardDetails from "../pages/CardDetails";
import MSFDetails from "../pages/MSFDetails";
import BankDetails from './../pages/BankDetails';
import Transaction from './../pages/Transaction';
import EditData from "../pages/EditData";
import UpdateMFS from "../pages/UpdateMFS";
import BalanceTransfer from "../pages/BalanceTransfer";
import Income from "../pages/Income";
import CreateMFS from "../pages/CreateMFS";
import CreateBank from "../pages/CreatBank";

const AppRoutes = ({ user }) => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />

          <Route element={<PrivateRoute user={user} />}>
            <Route index element={<Dashboard/>} />
             <Route path="/edit-profile" element={<EditProfile/>} /> 
             <Route path="/edit-mobile" element={<EditMobile/>} /> 
            <Route  path="/reset-password" element={<ResetPassword />} />
            <Route  path="/profile" element={<Profile/>} />
            <Route path="/dashboard" element ={<Dashboard/>}/>
            <Route path="/card" element ={<Card/>}/>
            <Route path="/create-card" element ={<CreateCard/>}/>
            <Route path="/create-bank" element ={<CreateBank/>}/>
            <Route path="/account" element ={<Account/>}/>
            <Route path="/mobile-banking" element ={<MobileBank/>}/>
            <Route path="/create-mfs" element={<CreateMFS/>}/>
            


            {/* dynamic route */}
            <Route path="/mfs-transfer/:id" element={<BalanceTransfer/>}/>
            <Route path="/mfs-transaction/:id" element={<Transaction/>}/>
            <Route path ="/edit-data/:data" element ={<EditData/>}/>
            <Route path="/card-details/:id" element={<CardDetails/>}/>
            <Route path="/msf-details/:id" element={<MSFDetails/>}/>
            <Route path="/bank-details/:id" element={<BankDetails/>}/>
            <Route path="/update-account/:id" element={<UpdateAccount/>}/>
            <Route path="/update-msf/:id" element={<UpdateMFS/>}/>
            <Route path ="/income/:type" element={<Income/>}/>
            
          </Route>

          <Route path="*" element={<NotFoundB/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default AppRoutes;
