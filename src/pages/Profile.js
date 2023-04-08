import React from 'react';
import AuthFooter from '../components/footer/AuthFooter';
import Header from '../components/header/Header';
import Container from '../components/Container';
import ProfileHead from '../components/profile/Profile_Head';
import ProfileBalance from '../components/profile/Profile_Balance';
import ProfileInfo from '../components/profile/Profile_Info';

const Profile = () => {
    return (
        <>  
            <Header/>
                <Container>
                    <ProfileHead/>
                    <ProfileBalance/>
                    <ProfileInfo/>
                </Container>
            <AuthFooter/>
        </>
    );
}

export default Profile;
