import React from 'react';
import { bkash } from '../../assets/images/images';
import { Link } from 'react-router-dom';

const DetailsMFS = ({item}) => {
    return (
        <div className="pay_card_wrap">
            <div className="pay_card mb-3 card">
                    <div className="d-flex justify-content-between align-items-center mb-2 border-bottom pb-1">
                    <h4 className='text-dark font-16 text-capitalize'>{item.mobile_wallet_id === 1 ? 'Bkash':''}{ item.mobile_wallet_id === 2 ? 'NAGAD':''}{ item.mobile_wallet_id === 3 ? 'Rocket':''}</h4>
                    <img src={bkash} alt="visa_card"/>
                    
                        
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
                    <button className="primary_btn my-0"><Link className='text-white' to={`/update-msf/${item.id}`}>Edit Mobile</Link></button>
                </div>
        </div>
    );
}

export default DetailsMFS;
