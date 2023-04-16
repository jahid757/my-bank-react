import React from 'react';
import CardBody from '../components/card/CardBody';
import FullContainer from '../components/FullContainer';
import Header from '../components/header/Header';
import AuthFooter from '../components/footer/AuthFooter';

const Card = () => {
    return (
        <>
        <Header/>
            <FullContainer>
                <CardBody/>
            </FullContainer>
        <AuthFooter footerActive={'card'}/>
        </>
    );
}

export default Card;
