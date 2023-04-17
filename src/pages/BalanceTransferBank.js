import React, { useEffect, useState } from 'react';
import Header from '../components/header/Header';
import FullContainer from '../components/FullContainer';
import AuthFooter from '../components/footer/AuthFooter';
import TransferBodyOwn from '../components/balanceTransferBank/TransferBodyOwn';
import { useParams } from 'react-router-dom';
import { getAccountDetailsWSA } from '../Auth/CallAPI';
import TransferHead from '../components/balanceTransferBank/TransferHead';

const BalanceTransferBank = () => {
    const {id} = useParams();
    const [paymentType, setPaymentType] = useState('own');
    const [account,setAccount] = useState({})
    useEffect(()=>{
        const loadData = async() => {
            const data = await getAccountDetailsWSA(id);
            setAccount(data)
        }
        loadData()
    },[]);

    return (
        <>
            <Header/>
            <FullContainer center_xy={true}>
                <div className='d-flex align-items-center gap-2 btn-no-color'>
                    <button onClick={() => setPaymentType('own')} className={`primary_btn ${paymentType === 'own' ? 'active':''}`}>Own Account</button>
                    <button onClick={() => setPaymentType('beneficiary')} className={`primary_btn ${paymentType === 'beneficiary' ? 'active':''}`}>Beneficiary Account</button>
                </div>
                
                <TransferHead id={id} />
                
                {
                    paymentType === 'own' ? <TransferBodyOwn account={account}/> : ''
                }
            </FullContainer>
            <AuthFooter footerActive={'account'}/>
        </>
    );
}

export default BalanceTransferBank;
