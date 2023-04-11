import React from "react";

const SingleCard = ({item}) => {
  return (
    <div className="pay_card card mb-3">
      <div className="d-flex justify-content-between align-items-center mb-2">
        <h3 className="card_name text-capitalize">{item.card_name}</h3>
        <img src={item.image} alt="visa_card" />
      </div>
      <div className="d-flex align-items-center">
        <div className="w-75 odd">
          <p>Card Number</p>
          <p>{item.card_number}</p>


        </div>
        <div className="odd ">
          <p>Limit</p>
          <p>{item.exp_date}</p>


        </div>
        
      </div>
      <div className="d-flex align-items-center">
        <div className="w-70 odd">
          <p>Limit</p>

          <p>100</p>
          <p>{200}</p>
        </div>
        <div className="odd text-center">
          <p>Out Standing</p>

          <p>200</p>
          <p>{400}</p>
        </div>
        
      </div>
    </div>
  );
};

export default SingleCard;
