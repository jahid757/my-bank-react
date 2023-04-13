import React from 'react';
import Header from '../components/header/Header';
import FullContainer from '../components/FullContainer';
import AuthFooter from '../components/footer/AuthFooter';
import CardDetailsHead from '../components/cardDetails/CardDetailsHead';
import CardDetailsBody from '../components/cardDetails/CardDetailsBody';


const CardDetails = () => {
    return (
        <>
            <Header/>
            <FullContainer center_xy={true}>
                <CardDetailsHead/>
                <CardDetailsBody/>
            </FullContainer>
            <AuthFooter/>
        </>
    );
}

export default CardDetails;
