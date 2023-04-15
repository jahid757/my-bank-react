import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SingleCard from "./SingleCard";
import { getCreditCardData } from "../../Auth/CallAPI";

const CardBody = () => {
    const [cardData,setCardData] = useState([]);
    const loadData = async() => {
      const data = await getCreditCardData();
      setCardData(data.creditCardData)
    }

    useEffect(()=> {
      loadData()
    },[])


  return (
    <>  
        <div className="pay_card_wrap">
            {
                cardData.map((item, index) => {
                    return(
                        <SingleCard item={item} key={item.id}/>
                    )
                })
            }
        </div>
        
      <div className="back-to-top">
        <div className="icon">
          <Link to="/create-card">
            <i className="fa-solid fa-plus"></i>
          </Link>
        </div>
      </div>
    </>
  );
};

export default CardBody;
