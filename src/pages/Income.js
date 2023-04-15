import React from 'react';
import Header from '../components/header/Header';
import FullContainer from '../components/FullContainer';
import AuthFooter from '../components/footer/AuthFooter';
import ForAccount from '../components/Income/ForAccount';

const Income = () => {
    return (
        <>
         <Header/>
         <FullContainer center_xy={true}>
            <ForAccount/>
         </FullContainer>   
         <AuthFooter/>
        </>
    );
}

export default Income;
