import React from "react";
import { Link } from "react-router-dom";
import { visa_card } from "../../assets/images/images";

const SingleCard = ({item}) => {
  return (
    <Link to={`/card-details/${item.id}`} className="pay_card card mb-3">
      <div className="d-flex justify-content-between align-items-center mb-2">
        <h3 className="card_name text-capitalize">{item.card_name}</h3>
        <img src={visa_card} alt="visa_card" />
      </div>
      <div className="d-flex align-items-center">
        <div className="w-75 odd">
          <p>Card Number</p>
          <p className="text-dark">{item.card_number}</p>


        </div>
        <div className="odd ">
          <p>Limit</p>
          <p className="text-dark">{item.exp_date}</p>


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
    </Link>
  );
};

export default SingleCard;
