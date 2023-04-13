import React, { useState } from 'react';
import Header from '../components/header/Header';
import FullContainer from '../components/FullContainer';
import AuthFooter from '../components/footer/AuthFooter';
import SingleTransaction from '../components/transaction/SingleTransaction';
import TransactionHead from '../components/transaction/transactionHead';

const Transaction = () => {
    const [type,setType] = useState('all')
    return (
        <>
        <Header/>
        <FullContainer center_xy={false}>
        <TransactionHead type={type} setType={setType}/>
            <SingleTransaction type={type}/>
        </FullContainer>
            <AuthFooter/>
        </>
    );
}

export default Transaction;
