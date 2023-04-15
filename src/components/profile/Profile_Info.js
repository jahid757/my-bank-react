import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { UserContext } from '../../App';

const ProfileInfo = () => {
    const [user,setUser] = useContext(UserContext)

    const userLogout = async () => {
        const userKey = localStorage.getItem("key");
        const request = await fetch('https://wirelessbd.com/api/logout',{
            method:'POST',
            headers:{
                "Content-Type":"application/json",
                Authorization: `Bearer ${userKey}`
            }
        })
        const response = await request.json();
        if(response.status_code === 201){
            Swal.fire(
                'Good job!',
                `${response.message}`,
                'success'
              )
            localStorage.removeItem('key')
            setUser(false)
        }else{
            Swal.fire(
                'OOPS!',
                `${response.message}`,
                'error'
              )
        }
    }
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
                    <Link to="/reset-password" className="d-flex align-items-center justify-content-between pointer-event text-dark">
                        <h4 className="h5">Change your Password</h4>
                        <i className="fa-solid fa-angle-right font-h4"></i>
                    </Link>
                </div>

                <div className="toggler mb-2 border-bottom pb-2">
                    <Link onClick={userLogout} className="d-flex align-items-center justify-content-between pointer-event text-danger">
                        <h4 className="h5">Logout</h4>
                        <i className="fa-solid fa-angle-right font-h4"></i>
                    </Link>
                </div>

            </div>
    );
}

export default ProfileInfo;
