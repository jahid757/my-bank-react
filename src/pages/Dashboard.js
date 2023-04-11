import React from 'react';
import Header from '../components/header/Header';
import AuthFooter from '../components/footer/AuthFooter';
import FullContainer from './../components/FullContainer';
// import DashboardFooter from '../components/dashboard_2/DashboardFooter';
import DashboardHeader from './../components/dashboard/DashboardHeader';
import DashboardBody from './../components/dashboard/DashboardBody';

const Dashboard = () => {
    return (
        <>
            <Header/>
                <FullContainer>
                    <DashboardHeader/>
                    <DashboardBody/>
                    {/* <DashboardFooter/> */}
                </FullContainer>
            <AuthFooter/>
        </>
    );
}

export default Dashboard;
