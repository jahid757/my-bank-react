import React from 'react';
import Header from '../components/header/Header';
import FullContainer from '../components/FullContainer';
import AuthFooter from '../components/footer/AuthFooter';
import TransferBodyOwn from '../components/balanceTransferBank/TransferBodyOwn';
import TransferHead from '../components/balanceTransferBank/TransferHead';

const BalanceTransferCard = () => {
    return (
        <>
            <Header/>
            <FullContainer center_xy={true}>
                <TransferHead/>
                <TransferBodyOwn/>
            </FullContainer>
            <AuthFooter footerActive={'card'}/>
        </>
    );
}

export default BalanceTransferCard;
