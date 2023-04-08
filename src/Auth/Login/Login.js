import React from 'react';
import NoAuthHeader from '../../components/header/NoAuthHeader';
import LoginForm from './LoginForm';
import Footer from '../../components/footer/Footer';

const Login = () => {
    return (
        <>
            <NoAuthHeader/>
            <LoginForm/>
            <Footer/>
        </>
    );
}

export default Login;
