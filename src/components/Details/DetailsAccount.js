import React from 'react';
import { visa_gold } from '../../assets/images/images';
import { Link } from 'react-router-dom';

const DetailsAccount = ({item}) => {
    console.log(item.branch)
    return (
        <div className="pay_card_wrap">
            <div className="pay_card mb-3 card">
                    <div className="d-flex justify-content-between align-items-center mb-2 border-bottom pb-1">
                        <img src={visa_gold} alt="visa_card"/>
                        <div>
                            <h4 className='text-dark font-16 text-capitalize'>{'AB Bank Limited'}</h4>
                            <p className="text-dark font-13">Branch: {item.branch}</p>
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
                    <button className="primary_btn my-0"><Link className='text-white' to={`/update-account/${item.id}`}>Edit Account </Link></button>
                </div>
        </div>
    );
}

export default DetailsAccount;
