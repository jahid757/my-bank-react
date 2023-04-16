import React from 'react';
import Header from '../components/header/Header';
import FullContainer from '../components/FullContainer';
import AuthFooter from '../components/footer/AuthFooter';
import MSFDetailHEad from '../components/MSFDetails/MSFDetailHEad';
import MSFDetailsBody from '../components/MSFDetails/MSFDetailsBody';

const MSFDetails = () => {
    return (
        <>
         <Header/>
         <FullContainer center_xy={true}>
            <MSFDetailHEad/>
            <MSFDetailsBody/>
         </FullContainer>   
        <AuthFooter footerActive={'mfs'}/>
        </>
    );
}

export default MSFDetails;
