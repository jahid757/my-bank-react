import React from 'react';
import NoAuthHeader from '../../components/header/NoAuthHeader';
import ResetPasswordForm from './ResetPasswordFrom';
import AuthFooter from '../../components/footer/AuthFooter';

const ResetPassword = () => {
    return (
        <>
          <NoAuthHeader/>
            <ResetPasswordForm/>
          <AuthFooter/>  
        </>
    );
}

export default ResetPassword;
