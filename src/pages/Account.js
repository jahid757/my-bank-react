import React, { useEffect, useState } from 'react';
import Header from '../components/header/Header';
import FullContainer from '../components/FullContainer';
import AuthFooter from '../components/footer/AuthFooter';
import SingleAccountCard from '../components/Account/SingleAccountCard';
import { loadAccountData } from '../Auth/CallAPI';

const Account = () => {
    const [accountData,setAccountData] = useState([])
    useEffect(()=> {
        async function load(){
           const loadAccountDataList = await loadAccountData();
           setAccountData(loadAccountDataList.accountData)
         }
         load()
       },[])

    return (
        <div>
            <Header/>
            <FullContainer>
            {
                accountData.map((item, index) => {
                    return(
                        <SingleAccountCard item={item} key={index}/>
                    )
                })
            }
                {/* <SingleAccountCard/> */}
            </FullContainer>
            <AuthFooter/>
        </div>
    );
}

export default Account;
