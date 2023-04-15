import React from 'react';
import Header from '../components/header/Header';
import FullContainer from '../components/FullContainer';
import AuthFooter from '../components/footer/AuthFooter';
import MobileCreate from '../components/createAccount/MobileCreate';

const CreateMFS = () => {
    return (
        <>
         <Header/>
         <FullContainer center_xy={true}>
            <MobileCreate/>
         </FullContainer>   
         <AuthFooter/>
        </>
    );
}

export default CreateMFS;
