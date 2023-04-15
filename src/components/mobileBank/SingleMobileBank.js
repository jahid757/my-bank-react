import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { bkash, nogad, rocket } from '../../assets/images/images';


const SingleMobileBank = ({item}) => {

    return (
        <div className="pay_card_wrap">
            <Link to={`/msf-details/${item.id}`} className="pay_card mb-3 card">
                    <div className="d-flex justify-content-between align-items-center mb-2 border-bottom pb-1">
                        {
                            item.mobile_wallet_id === 1 ? 
                            <img src={bkash} alt="visa_card"/> : ''
                        }{
                            item.mobile_wallet_id === 2 ? 
                            <img src={nogad} alt="visa_card"/> : ''
}{
                            item.mobile_wallet_id === 3 ? 
                            <img src={rocket} alt="visa_card"/> : ''
                        }
                        <div>
                        {
                            item.mobile_wallet_id === 1 ? 
                            <h4 className='text-dark font-16 text-capitalize'>{'Bkash'}</h4> : ''
                        }{
                            item.mobile_wallet_id === 2 ? 
                            <h4 className='text-dark font-16 text-capitalize'>{'Nogad'}</h4> : ''
}{
                            item.mobile_wallet_id === 3 ? 
                            <h4 className='text-dark font-16 text-capitalize'>{'Rocket'}</h4> : ''
                        }
                        </div>
                        
                    </div>
                    <div className="d-flex align-items-center justify-content-between border-bottom mb-2">
                        <div className="odd">
                            <p>Balance</p>
                            <p className="text-dark">{item.current_balance} BDT</p>
                        </div>
                        <div className="odd">
                            <p className="text-dark">A/c Number: </p>
                            <p className='text-dark'>{item.account_number}</p>
                        </div>
                    </div>
                    {/* <div>
                        <p>A/c Type: {item.bank_account_type}</p>
                    </div> */}
                    <div className="d-flex align-items-center justify-content-between gap-2">
                        <button className="w-50 primary_btn m-0"><Link to={`/mfs-transaction/${item.id}`} className="text-white">Transaction</Link></button>
                        <button className="w-50 primary_btn m-0"><Link to={`/mfs-transfer/${item.id}`} className="text-white">Transfer</Link></button>
                    </div>
                </Link>
        </div>
    );
}

export default SingleMobileBank;
