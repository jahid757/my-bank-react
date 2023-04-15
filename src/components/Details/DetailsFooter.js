import React from 'react';
import { Link } from 'react-router-dom';
import { kali } from '../../assets/images/images';

const DetailsFooter = () => {
    return (
        <>
      <div className="dashboard_head d-flex align-items-center no_scroll mb-3 justify-content-between">
        <Link to="/" className="ds_item card">
          <img src={kali} alt="kali" />
          <p className="text-dark">Transfer</p>
        </Link>

        <Link to="/" className="ds_item card">
          <img src={kali} alt="kali" />
          <p className="text-dark">Transaction</p>
        </Link>

        <Link to="/" className="ds_item card">
          <img src={kali} alt="kali" />
          <p className="text-dark">Bill Pay</p>
        </Link>
      </div>
    </>
    );
}

export default DetailsFooter;
