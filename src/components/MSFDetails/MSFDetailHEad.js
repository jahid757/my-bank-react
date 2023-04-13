import React from 'react';
import { bkash } from '../../assets/images/images';

const MSFDetailHEad = () => {
    return (
        <div className="pay_card_wrap">
            <div className="pay_card mb-3 card">
                    <div className="d-flex justify-content-between align-items-center mb-2 border-bottom pb-1">
                    <h4 className='text-dark font-16 text-capitalize'>{'Bkash'}</h4>
                    <img src={bkash} alt="visa_card"/>
                    
                        
                    </div>
                    <div className="d-flex align-items-center justify-content-between border-bottom mb-2">
                        <div className="odd">
                            <p>Balance</p>
                            <p className="text-dark">{'1000'} BDT</p>
                        </div>
                        <div className="odd">
                            <p className="text-dark">A/c Number: </p>
                            <p className='text-dark'>{'0193921039'}</p>
                        </div>
                    </div>
                    
                </div>
        </div>
    );
}

export default MSFDetailHEad;
