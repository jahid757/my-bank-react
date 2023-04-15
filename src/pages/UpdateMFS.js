import React from 'react';
import Header from '../components/header/Header';
import FullContainer from '../components/FullContainer';
import AuthFooter from '../components/footer/AuthFooter';
import UpdateMFSForm from '../components/updateMFS/updateMFSForm';

const UpdateMFS = () => {
    return (
        <>
         <Header/>
         <FullContainer center_xy={true}>
                <UpdateMFSForm/>
         </FullContainer>   
        <AuthFooter/>
        </>

    );
}

export default UpdateMFS;
