import React from 'react';
import NoAuthHeader from '../../components/header/NoAuthHeader';
import Footer from '../../components/footer/Footer';
import RegiForm from './Regi_form';

const Registration = () => {
    return (
        <>
            <NoAuthHeader/>
            <RegiForm/>
            <Footer/>
        </>
    );
}

export default Registration;
