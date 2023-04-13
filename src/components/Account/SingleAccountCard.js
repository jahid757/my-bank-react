import React from 'react';
import { visa_gold } from '../../assets/images/images';
import { Link } from 'react-router-dom';

const SingleAccountCard = ({item}) => {
    // console.log(item)
    return (
        <div className="pay_card_wrap">
            <Link to={`/card-details/${item.id}`} className="pay_card mb-3 card">
                    <div className="d-flex justify-content-between align-items-center mb-2 border-bottom pb-1">
                        <img src={visa_gold} alt="visa_card"/>
                        <div>
                            <h4 className='text-dark font-16 text-capitalize'>{item.bank_data.bank_name}</h4>
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
                    {/* <div>
                        <p>A/c Type: {item.bank_account_type}</p>
                    </div> */}
                    <div className="d-flex align-items-center justify-content-between gap-2">
                        <button className="w-50 primary_btn m-0"><Link to={`/update-account/${item.id}`} className="text-white">Transfer</Link></button>
                        <button className="w-50 primary_btn m-0"><Link to={`/bank-details/${item.id}`} className="text-white">View Details</Link></button>
                    </div>
                </Link>
        </div>
    );
}

export default SingleAccountCard;
