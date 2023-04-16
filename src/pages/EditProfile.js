import React from 'react';
import Header from '../components/header/Header';
import AuthFooter from '../components/footer/AuthFooter';
import Container from '../components/Container';
import EditProfileForm from '../components/editProfile/editProfileForm';

const EditProfile = () => {
    return (
        <>
            <Header/>
                <Container>
                    <EditProfileForm/>
                </Container>
            <AuthFooter footerActive={'profile'}/>
        </>
    );
}

export default EditProfile;
