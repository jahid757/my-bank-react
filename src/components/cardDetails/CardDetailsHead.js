import React from "react";
import { visa_card } from "../../assets/images/images";

const CardDetailsHead = () => {
  return (
    <div to="/card-details" className="pay_card card mb-3">
      <div className="d-flex justify-content-between align-items-center mb-2">
        <h3 className="card_name text-capitalize">{'Visa'}</h3>
        <img src={visa_card} alt="visa_card" />
      </div>
      <div className="d-flex align-items-center">
        <div className="w-75 odd">
          <p>Card Number</p>
          <p className="text-dark">{'0010101003'}</p>
        </div>
        <div className="odd ">
          <p>Limit</p>
          <p className="text-dark">{'20-03-2023'}</p>
        </div>
      </div>
      <div className="d-flex align-items-center">
        <div className="w-70 odd">
          <p>Limit</p>

          <p className="text-dark">100</p>
          <p className="text-dark">{200}</p>
        </div>
        <div className="odd text-center">
          <p>Out Standing</p>

          <p className="text-dark">200</p>
          <p className="text-dark">{400}</p>
        </div>
      </div>
    </div>
  );
};

export default CardDetailsHead;
