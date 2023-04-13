import React, { useEffect, useState } from 'react';
import Header from '../components/header/Header';
import FullContainer from '../components/FullContainer';
import AuthFooter from '../components/footer/AuthFooter';
import { loadMobileAccountData } from '../Auth/CallAPI';
import SingleMobileBank from '../components/mobileBank/SingleMobileBank';

const MobileBank = () => {
    const [accountData,setAccountData] = useState([])
    useEffect(()=> {
        async function load(){
           const loadAccountDataList = await loadMobileAccountData();
           setAccountData(loadAccountDataList.mobileWalletAccountData)
         }
         load()
       },[])


    return (
        <>
            <Header/>
            <FullContainer center_xy={true}>
            {
                accountData.map((item, index) => {
                    return(
                        <SingleMobileBank item={item} key={index}/>
                    )
                })
            }
            </FullContainer>
            <AuthFooter/>
        </>
    );
}

export default MobileBank;
