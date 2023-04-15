import React from 'react';
import { Link } from 'react-router-dom';

const ProfileSubInfo = () => {
    return (
        <div className="card mb-3">

<div className=" mb-2 border-bottom pb-2">
                    <Link to="/edit-data/account" className="d-flex align-items-center justify-content-between pointer-event text-dark">
                        <h4 className="h5">Edit Account</h4>
                        <i className="fa-solid fa-angle-right font-h4"></i>
                    </Link>
                </div>
                <div className=" mb-2 border-bottom pb-2">
                    <Link to="/edit-data/mfs" className="d-flex align-items-center justify-content-between pointer-event text-dark">
                        <h4 className="h5">Edit MFS</h4>
                        <i className="fa-solid fa-angle-right font-h4"></i>
                    </Link>
                </div>


                <div className=" pb-0">
                    <Link to="/edit-data/card" className="d-flex align-items-center justify-content-between pointer-event text-dark">
                        <h4 className="h5">Edit Card</h4>
                        <i className="fa-solid fa-angle-right font-h4"></i>
                    </Link>
                </div>

            </div>
    );
}

export default ProfileSubInfo;
