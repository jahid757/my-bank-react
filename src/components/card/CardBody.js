import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SingleCard from "./SingleCard";
import { visa_card } from "../../assets/images/images";
import { loadAccountData } from "../../Auth/CallAPI";

const cardDemoData = [
    {   
        card_name:'Visa',
        card_number:'0433874923',
        holder_name:'jahid',
        cvv_cvc: '871',
        exp_date: '03-03-2023',
        image:visa_card
    },
    {   
        card_name:'Visa',
        card_number:'0433874923',
        holder_name:'jahid',
        cvv_cvc: '871',
        exp_date: '03-03-2023',
        image:visa_card
    },
    {   
        card_name:'Visa',
        card_number:'0433874923',
        holder_name:'jahid',
        cvv_cvc: '871',
        exp_date: '03-03-2023',
        image:visa_card
    },
    {   
        card_name:'Visa',
        card_number:'0433874923',
        holder_name:'jahid',
        cvv_cvc: '871',
        exp_date: '03-03-2023',
        image:visa_card
    },
]

const CardBody = () => {
    const [cardData,setCardData] = useState(cardDemoData);

    // useEffect(()=> {
    //  async function load(){
    //     const loadCardData = await loadAccountData();
    //     setCardData(loadCardData.accountData)
    //   }
    //   load()
    // },[])


  return (
    <>  
        <div className="pay_card_wrap">
            {
                cardData.map((item, index) => {
                    return(
                        <SingleCard item={item} key={index}/>
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
