import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/header/Header';
import FullContainer from '../components/FullContainer';
import AuthFooter from '../components/footer/AuthFooter';
import { fetchBankDataWithAccountType, loadAccountData, loadMobileAccountData } from '../Auth/CallAPI';
import DetailsAccount from '../components/Details/DetailsAccount';
import DetailsMFS from '../components/Details/DetailsMFS';

const EditData = () => {
    const {data} = useParams();
    const [accountData,setAccountData] = useState([]);

    const fetchData = async() => {
        const loadData = await loadAccountData();
        const mobileData = await loadMobileAccountData()
        if(data === 'Banks'){
            setAccountData(loadData);
            
        }else{
            setAccountData(mobileData.mobileWalletAccountData)
        }
    }
    useEffect(() => {
        fetchData();
    }, [])

        console.log(accountData)
    return (
        <>
         <Header/>
         <FullContainer center_xy={true}>
            {
                data === 'account' ?
                <>
                    {
                        accountData.map((item,index) => {return <DetailsAccount key={index} item={item} />})
                    }
                </> :
                <>
                    {
                        accountData.map((item,index) => {return <DetailsMFS item={item} key={index}/>})
                    }
                </>   
            }
         </FullContainer>
         <AuthFooter/>   
        </>
    );
}

export default EditData;
