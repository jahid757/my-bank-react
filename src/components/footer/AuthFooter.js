import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AuthFooter = ({footerActive}) => {
    
    return (
        <div className="bottom_nav p-2 ">
            <div className="d-flex justify-content-center text-center ">
                <Link to="/dashboard" className="col">
                    <div className={`menu_item ${footerActive === 'dashboard' ? 'active':''}`}>
                        <i className="fa-solid fa-house"></i>
                        <p>Home</p>
                    </div>
                </Link>
                
                
                <Link to="/mobile-banking" className="col">
                    <div className={`menu_item ${footerActive === 'mfs' ? 'active':''}`}>
                        <i className="fa-solid fa-building-columns"></i>
                        <p>MFS</p>
                    </div>
                </Link>
<Link to="/account" className="col">
                    <div className={`menu_item ${footerActive === 'account' ? 'active':''}`}>
                        <i className="fa-solid fa-building-columns"></i>
                        <p>Account</p>
                    </div>
                </Link>
                <Link to="/card" className="col"  >
                    <div className={`menu_item ${footerActive === 'card' ? 'active':''}`}>
                        <i className="fa-brands fa-cc-visa"></i>
                        <p>Card</p>
                    </div>
                </Link>

                <Link to="/profile" className="col" >
                    <div className={`menu_item ${footerActive === 'profile' ? 'active':''}`}>
                        <i className="fa-solid fa-user"></i>
                        <p>Profile</p>
                    </div>
                </Link>

               
            </div>
        </div>
    );
}

export default AuthFooter;
