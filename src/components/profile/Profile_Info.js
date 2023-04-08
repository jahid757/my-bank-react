import React from 'react';
import { Link } from 'react-router-dom';

const ProfileInfo = () => {
    return (
        <div className="card mb-3">

                <div className="toggler mb-2 border-bottom pb-2">
                    <Link to="/edit-profile" className="d-flex align-items-center justify-content-between pointer-event text-dark">
                        <h4 className="h5">Change your Info</h4>
                        <i className="fa-solid fa-angle-right font-h4"></i>
                    </Link>
                </div>
                <div className="toggler mb-2 border-bottom pb-2">
                    <Link to="/edit-mobile" className="d-flex align-items-center justify-content-between pointer-event text-dark">
                        <h4 className="h5">Change your Mobile</h4>
                        <i className="fa-solid fa-angle-right font-h4"></i>
                    </Link>
                </div>

                <div className="toggler mb-2 border-bottom pb-2">
                    <Link to="/change-password" className="d-flex align-items-center justify-content-between pointer-event text-dark">
                        <h4 className="h5">Change your Password</h4>
                        <i className="fa-solid fa-angle-right font-h4"></i>
                    </Link>
                </div>

            </div>
    );
}

export default ProfileInfo;
