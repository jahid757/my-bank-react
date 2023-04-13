import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/header/Header';
import FullContainer from '../components/FullContainer';
import AuthFooter from '../components/footer/AuthFooter';
import  UpdateAccountForm from '../components/updateAccountForm/UpdateAccountForm';

const UpdateAccount = () => {
    const {id} = useParams()
    return (
        <>
            <Header/>
            <FullContainer center_xy={true}>
                <UpdateAccountForm/>
            </FullContainer>
            <AuthFooter/>
        </>

    );
}

export default UpdateAccount;
