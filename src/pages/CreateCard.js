import React, { useState } from "react";
import Header from "../components/header/Header";
import AuthFooter from "../components/footer/AuthFooter";
import CreateHome from "../components/createCard/CreateHome";
import BankCreate from "../components/createCard/BankCreate";
import MobileCreate from "../components/createCard/MobileCreate";

const CreateCard = () => {
  const [bankType, setBankType] = useState("");
  const [allowToCreate, setAllowToCreate] = useState(false)
  return (
    <>
      <Header />
        {
            allowToCreate ? 

            (
                bankType === "bank" ? <BankCreate/> : <MobileCreate/>
            ) 
            : 

            <CreateHome bankType={bankType} setBankType={setBankType} setAllowToCreate={setAllowToCreate}/>
        }
      <AuthFooter />
    </>
  );
};

export default CreateCard;
