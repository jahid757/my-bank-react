import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="header d-flex align-items-center justify-content-between bg-primary p-2 text-white mb-2">
            <Link to="/dashboard"><i className="fa-solid fa-house"></i></Link>
                <div>
                    <h5>Heading</h5>
                    <p className="mb-0">Sub Heading</p>
                </div>
                <div className="d-flex align-items-center gap-3">
                    <i className="fa-solid fa-bell pointer-event"></i>
                    <i className="fa fa-search pointer-event"></i>
                </div>
        </div>
    );
}

export default Header;
