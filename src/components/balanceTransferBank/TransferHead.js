import React from 'react';
import { visa_gold } from '../../assets/images/images';
import { getAccountDetailsWSA } from '../../Auth/CallAPI';
import { useState } from 'react';
import { useEffect } from 'react';

const TransferHead = ({id}) => {
    const [account,setAccount] = useState({})
    useEffect(()=>{
        const loadData = async() => {
            const data = await getAccountDetailsWSA(id);
            setAccount(data);
            console.log(data)
        }
        loadData()
    },[]);
    return (
         <>
         {
            account ?  
            <div className="card p-0 mb-3">
                <div className="d-flex align-items-center gap-4 balance_transfer_head flex-row mb-2 border-bottom p-2">
                    
                    <img src={visa_gold} alt="visa_card"/>
                    <h6><span className="fw-light">Account No:</span> { account.status_code ? account.singleAccountData.account_number : '000'}</h6>
                </div>
                <div className="balance d-flex align-items-center gap-2 px-2">
                    <p>Available Balance : <span className="h6">{  account.status_code ? account.singleAccountData.current_balance : '00'}</span></p> 
                </div>
                
            </div> 
            : 'loading'
         }
            
            
         </>   
    );
}

export default TransferHead;
