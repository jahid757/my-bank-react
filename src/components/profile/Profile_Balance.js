import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchUserData } from './../../Auth/CallAPI';

const ProfileBalance = () => {
    const [profileData,setProfileData] = useState({})
    useEffect(() => {
        async function profileData(){
            const data = await fetchUserData();
            setProfileData(data)
        }
        profileData()
    },[])
    return (
        <div className="card mb-3">
                <div className="d-flex align-items-start gap-2">

                    <div className="border-end border-secondary pe-2 w-48 text-secondary">
                        <h4 className='text-center mb-2'>Wallet</h4>
                        <p className="d-flex align-items-center mb-2"> <i className="fa-solid fa-images h5 me-1"></i> <span>Current Balance</span></p>
                        <h4 className='text-center text-success'>{profileData.wallet} Tk</h4>
                        <button className="primary_btn"><i className="fa-solid fa-bolt"></i> Transaction</button>
                    </div>

                    <div className="w-48 text-secondary profile_info">
                        <h4 className='text-center'>Transfer To</h4>
                        <div className="d-flex align-items-center flex-column px-1">
                            <Link className='d-block w-100' to={'/transfer'}><button className="primary_btn mb-0"><i className="fa-solid fa-bolt"></i> Account </button></Link>
                            <button className="primary_btn mb-0"><i className="fa-solid fa-bolt"></i> MFS</button>
                            <button className="primary_btn mb-0"><i className="fa-solid fa-bolt"></i> Card</button>
                        </div>

                    </div>

                </div>
            </div>
    );
}

export default ProfileBalance;
