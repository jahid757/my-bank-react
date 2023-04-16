import React from "react";
import Header from "../components/header/Header";
import AuthFooter from "../components/footer/AuthFooter";
import BankCreate from "../components/createAccount/BankCreate";
import FullContainer from "../components/FullContainer";

const CreateBank = () => {
  return (
    <>
      <Header />
          <FullContainer center_xy={true}>
          <BankCreate/>
          </FullContainer>
      <AuthFooter footerActive={'account'} />
    </>
  );
};

export default CreateBank;
