import React from 'react';
import AuthFooter from '../components/footer/AuthFooter';
import Header from '../components/header/Header';
import Container from '../components/Container';
import ProfileHead from '../components/profile/Profile_Head';
import ProfileInfo from '../components/profile/Profile_Info';
import ProfileSubInfo from '../components/profile/ProfileSubInfo';

const Profile = () => {
    return (
        <>  
            <Header/>
                <Container>
                    <ProfileHead/>
                    
                    <ProfileSubInfo/>
                    <ProfileInfo/>
                </Container>
            <AuthFooter/>
        </>
    );
}

export default Profile;
