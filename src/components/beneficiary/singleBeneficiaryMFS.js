import React from 'react';
import { bkash } from '../../assets/images/images';
import { Link } from 'react-router-dom';

const SingleBeneficiaryMFS = () => {
    return (
        <div className='d-flex align-items-start justify-content-between mb-3 card flex-row'>
        <img style={{width:'60px'}} src={bkash} alt="" />
            <div>
            <p className='mb-0'>0195898534</p>
            <p className='mb-0'>One bank</p>
            <p className='mb-0'>One bank</p>
            </div>
            <div className='d-flex flex-column align-items-center'>
                <span className="p-1 px-3 text-white circle d-block bg-success">Active</span>
                <Link style={{color:'#0d6efd'}} to="">Account</Link>
                <Link style={{color:'#0d6efd'}} to="">Account</Link>
            </div>
        </div>
    );
}

export default SingleBeneficiaryMFS;
