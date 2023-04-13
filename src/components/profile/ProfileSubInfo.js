import React from 'react';
import { Link } from 'react-router-dom';

const ProfileSubInfo = () => {
    return (
        <div className="card mb-3">

<div className=" mb-2 border-bottom pb-2">
                    <Link to="/" className="d-flex align-items-center justify-content-between pointer-event text-dark">
                        <h4 className="h5">Menu Here</h4>
                        <i className="fa-solid fa-angle-right font-h4"></i>
                    </Link>
                </div>
                <div className=" mb-2 border-bottom pb-2">
                    <Link to="/" className="d-flex align-items-center justify-content-between pointer-event text-dark">
                        <h4 className="h5">Sub Title</h4>
                        <i className="fa-solid fa-angle-right font-h4"></i>
                    </Link>
                </div>


                <div className=" pb-2">
                    <Link to="" className="d-flex align-items-center justify-content-between pointer-event text-dark">
                        <h4 className="h5">Menu</h4>
                        <i className="fa-solid fa-angle-right font-h4"></i>
                    </Link>
                </div>

            </div>
    );
}

export default ProfileSubInfo;
