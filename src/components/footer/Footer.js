import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="bottom_nav p-2 ">
            <div className="d-flex justify-content-center text-center">
                <Link to="/" className="col">
                    <div className="menu_item active">
                        <i className="fa-solid fa-house"></i>
                        <p>Home</p>
                    </div>
                </Link>
                
                <Link to="/login" className="col">
                    <div className="menu_item">
                        <i className="fa-solid fa-right-to-bracket"></i>
                        <p>Login</p>
                    </div>
                </Link>

                <Link to="/registration" className="col">
                    <div className="menu_item">
                        <i className="fa-solid fa-user-plus"></i>
                        <p>Register</p>
                    </div>
                </Link>

                <Link to="/contact" className="col">
                    <div className="menu_item">
                        <i className="fa-solid fa-phone"></i>
                        <p>Contact</p>
                    </div>
                </Link>

               
            </div>
        </div>
    );
}

export default Footer;
