import React, { useEffect, useState } from 'react';
import Header from '../components/header/Header';
import FullContainer from '../components/FullContainer';
import AuthFooter from '../components/footer/AuthFooter';
import SingleAccountCard from '../components/Account/SingleAccountCard';
import { loadAccountData } from '../Auth/CallAPI';
import { Link } from 'react-router-dom';

const Account = () => {
    const [accountData,setAccountData] = useState([])
    useEffect(()=> {
        async function load(){
           const loadAccountDataList = await loadAccountData();
           setAccountData(loadAccountDataList.bankAccountData)
         }
         load()
       },[])

    //    console.log(accountData)

    return (
        <>
            <Header/>
            <FullContainer center_xy={true}>
            {
                accountData.map((item, index) => {
                    return(
                        <SingleAccountCard item={item} key={index}/>
                    )
                })
            }
            <div className="back-to-top">
        <div className="icon">
          <Link to="/create-bank">
            <i className="fa-solid fa-plus"></i>
          </Link>
        </div>
      </div>
            </FullContainer>
            <AuthFooter/>
        </>
    );
}

export default Account;
