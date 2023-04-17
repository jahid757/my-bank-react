import React from 'react';
import Header from '../components/header/Header';
import FullContainer from '../components/FullContainer';
import AuthFooter from '../components/footer/AuthFooter';
import TransferHead from '../components/balanceTransferBank/TransferHead';
import TransferBodyOwn from '../components/balanceTransferBank/TransferBodyOwn';

const BalanceTransferMFS = () => {
    return (
        <>
            <Header/>
            <FullContainer center_xy={true}>
                <TransferHead/>
                <TransferBodyOwn/>
            </FullContainer>
            <AuthFooter footerActive={'mfs'}/>
        </>
    );
}

export default BalanceTransferMFS;
