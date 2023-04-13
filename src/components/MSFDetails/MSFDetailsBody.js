import React, { useState } from 'react';

const MSFDetailsBody = () => {
    const [currency,setCurrency] = useState('bdt')
    return (
        <div className="card mb-3">
            <div className="d-flex align-items-center justify-content-between gap-1 btn-no-color mb-2">
                <button onClick={() => setCurrency('bdt')} className={`primary_btn  ${currency === 'bdt' ? 'active' : ''}`}><i className="fa-solid fa-bolt"></i> BDT</button>
                <button onClick={() => setCurrency('usd')} className={`primary_btn  ${currency === 'usd' ? 'active' : ''}`}><i className="fa-solid fa-bolt"></i> USD</button>
            </div>

            {
                currency === 'bdt' ? 
                <div>
                    <div className=" border-2 pb-1 border-bottom d-flex align-items-center justify-content-between mb-2">
                        <h5>Total Limit</h5>
                        <h5>BDT 10000</h5>
                    </div>
                    <div className=" border-2 pb-1 border-bottom d-flex align-items-center justify-content-between mb-2">
                        <h5>Available Limit</h5>
                        <h5>BDT 10000</h5>
                    </div>
                    <div className=" border-2 pb-1 border-bottom d-flex align-items-center justify-content-between mb-2">
                        <h5>Outstanding Balance</h5>
                        <h5>BDT 10000</h5>
                    </div>
                    <div className=" border-2 pb-1 border-bottom d-flex align-items-center justify-content-between mb-2">
                        <h5>Payment Due</h5>
                        <h5>BDT 10000</h5>
                    </div>
                    <div className=" border-2 pb-1 border-bottom d-flex align-items-center justify-content-between mb-2">
                        <h5>Last Due Date</h5>
                        <h5>10000</h5>
                    </div>
                    <div className=" border-2 pb-1 border-bottom d-flex align-items-center justify-content-between mb-2">
                        <h5>Minimum Pay</h5>
                        <h5>BDT 10000</h5>
                    </div>
                </div>
                :
                <div>
                <div>
                    <div className=" border-2 pb-1 border-bottom d-flex align-items-center justify-content-between mb-2">
                        <h5>Total Limit</h5>
                        <h5>USD 10000</h5>
                    </div>
                    <div className=" border-2 pb-1 border-bottom d-flex align-items-center justify-content-between mb-2">
                        <h5>Available Limit</h5>
                        <h5>USD 10000</h5>
                    </div>
                    <div className=" border-2 pb-1 border-bottom d-flex align-items-center justify-content-between mb-2">
                        <h5>Outstanding Balance</h5>
                        <h5>USD 10000</h5>
                    </div>
                    <div className=" border-2 pb-1 border-bottom d-flex align-items-center justify-content-between mb-2">
                        <h5>Payment Due</h5>
                        <h5>USD 10000</h5>
                    </div>
                    <div className=" border-2 pb-1 border-bottom d-flex align-items-center justify-content-between mb-2">
                        <h5>Last Due Date</h5>
                        <h5>10000</h5>
                    </div>
                    <div className=" border-2 pb-1 border-bottom d-flex align-items-center justify-content-between mb-2">
                        <h5>Minimum Pay</h5>
                        <h5>USD 10000</h5>
                    </div>
                </div>
                </div>
            }
        </div>
    );
}

export default MSFDetailsBody;
