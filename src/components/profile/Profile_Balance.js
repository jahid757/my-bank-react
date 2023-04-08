import React from 'react';

const ProfileBalance = () => {
    return (
        <div className="card mb-3">
                <div className="d-flex align-items-center gap-2">

                    <div className="border-end border-secondary pe-2 w-48 text-secondary">
                        <p className="d-flex align-items-center"> <i className="fa-solid fa-images h5 me-1"></i> <span>Current Balance</span></p>
                        <h4>1000 Tk</h4>
                        <p>Validity: 1 July 2023</p>
                        <button className="primary_btn"><i className="fa-solid fa-bolt"></i> Recharge</button>
                    </div>

                    <div className="w-48 text-secondary profile_info">
                        <div className="d-flex align-items-center flex-column px-1">
                            <div className="d-flex w-100 justify-content-between align-items-center border-bottom mb-1">
                                <i className="fa-solid fa-message font-h4"></i>
                            <p className="text-center"> <span className="text-dark h5">5.5 </span><br/><span>GB</span></p>
                            <i className="fa-solid fa-angle-right font-h4"></i>
                            </div>
                            <div className="d-flex w-100 justify-content-between align-items-center border-bottom mb-1">
                                <i className="fa-solid fa-message font-h4"></i>
                                <p className="text-center"> <span className="text-dark h5">5.5 </span><br/><span>Minutes</span></p>
                                <i className="fa-solid fa-angle-right font-h4"></i>
                            </div>
                            <div className="d-flex w-100 justify-content-between align-items-center">
                                <i className="fa-solid fa-message font-h4"></i>
                            <p className="text-center"> <span className="text-dark h5">5.5 </span><br/><span>SMS</span></p>
                            <i className="fa-solid fa-angle-right font-h4"></i>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
    );
}

export default ProfileBalance;
