import React from 'react';
import Header from '../components/header/Header';
import DashboardHeader from '../components/dashboard_2/DashboardHeader';
import AuthFooter from '../components/footer/AuthFooter';
import FullContainer from './../components/FullContainer';
import DashboardBody from '../components/dashboard_2/DashboardBody';
import DashboardFooter from '../components/dashboard_2/DashboardFooter';

const Dashboard2 = () => {
    return (
        <>
            <Header/>
                <FullContainer>
                    <DashboardHeader/>
                    <DashboardBody/>
                    <DashboardFooter/>
                </FullContainer>
            <AuthFooter/>
        </>
    );
}

export default Dashboard2;
