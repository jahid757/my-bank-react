import React from 'react';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';

const NotFoundB = () => {
    return (
        <>
            <Header/>
            <div className="container h-100 d-flex align-items-center flex-column justify-content-center">
            <div className="card text-center">
                <h4 className="bg-primary p-1 rounded mb-2">Connection Error !</h4>
            <h5>Demo text here</h5>
            <div className="mt-2">
                <button className="primary_btn m-0">
                    <i className="fa-solid fa-rotate-right"></i>
                </button>
            </div>
            </div>
        </div>
        <Footer/>
        </>
    );
}

export default NotFoundB;
