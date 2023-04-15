import React from 'react';
import Header from '../components/header/Header';
import FullContainer from '../components/FullContainer';
import AuthFooter from '../components/footer/AuthFooter';
import BankDetailsHead from '../components/BankDetails/BankDetailsHead';
import BankDetailsBody from '../components/BankDetails/BankDetailsBody';
import DetailsFooter from '../components/Details/DetailsFooter';

const BankDetails = () => {
    return (
        <>
           <Header/>
           <FullContainer center_xy={true}>
                <BankDetailsHead/>
                <BankDetailsBody/>
                <DetailsFooter/>
           </FullContainer>
           <AuthFooter/> 
        </>
    );
}

export default BankDetails;
