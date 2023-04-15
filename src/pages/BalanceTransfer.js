import React from 'react';
import Header from '../components/header/Header';
import FullContainer from '../components/FullContainer';
import AuthFooter from '../components/footer/AuthFooter';
import TransferHead from '../components/balanceTransfer/TransferHead';
import TransferBody from '../components/balanceTransfer/TransferBody';

const BalanceTransfer = () => {
    return (
        <>
            <Header/>
            <FullContainer center_xy={true}>
                <TransferHead/>
                <TransferBody/>
            </FullContainer>
            <AuthFooter/>
        </>
    );
}

export default BalanceTransfer;
