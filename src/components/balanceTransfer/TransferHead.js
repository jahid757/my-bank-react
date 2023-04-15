import React from 'react';
import { visa_gold } from '../../assets/images/images';

const TransferHead = () => {
    return (
        <div className="card p-0 mb-3">
                <div className="d-flex align-items-center gap-4 balance_transfer_head flex-row mb-2 border-bottom p-2">
                    
                    <img src={visa_gold} alt="visa_card"/>
                    <h6><span className="fw-light">Account No:</span> 209459879698406</h6>
                </div>
                <div className="balance d-flex align-items-center gap-2 px-2">
                    <p>Available Balance : <span className="h6">0000</span></p> 
                </div>
                
            </div>
    );
}

export default TransferHead;
