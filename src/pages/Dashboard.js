import React from 'react';
import Header from '../components/header/Header';
import AuthFooter from '../components/footer/AuthFooter';
import FullContainer from './../components/FullContainer';
// import DashboardFooter from '../components/dashboard_2/DashboardFooter';
import DashboardHeader from './../components/dashboard/DashboardHeader';
import DashboardBody from './../components/dashboard/DashboardBody';
import ProfileBalance from './../components/profile/Profile_Balance';

const Dashboard = () => {
    return (
        <>
            <Header/>
                <FullContainer>
                <ProfileBalance/>
                    <DashboardBody/>
                    <DashboardHeader/>
                    {/* <DashboardFooter/> */}
                </FullContainer>
            <AuthFooter/>
        </>
    );
}

export default Dashboard;
