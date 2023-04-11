import React from 'react';
import Header from '../../components/header/Header';
import AuthFooter from '../../components/footer/AuthFooter';
import FullContainer from '../../components/FullContainer';
import EditMobileForm from './EditMobileForm';

const EditMobile = () => {
    return (
        <>  <Header/>
            <FullContainer center_xy={true}>
                {
                    <EditMobileForm/>
                }
            </FullContainer>
            <AuthFooter/>
        </>
    );
}

export default EditMobile;
