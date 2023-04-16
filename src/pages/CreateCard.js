import React from "react";
import Header from "../components/header/Header";
import AuthFooter from "../components/footer/AuthFooter";
import BankCreate from "../components/createAccount/BankCreate";
import FullContainer from "../components/FullContainer";
import CardCreate from "../components/createAccount/CardCard";

const CreateCard = () => {
  return (
    <>
      <Header />
          <FullContainer center_xy={true}>
            <CardCreate/>
          </FullContainer>
      <AuthFooter footerActive={'card'} />
    </>
  );
};

export default CreateCard;
