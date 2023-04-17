import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from './../../App';
import { Link, Navigate } from 'react-router-dom';
import Swal from 'sweetalert2'

const EditProfileForm = () => {
    const user = useContext(UserContext);
    const {name, gender, address,profession} = user[0];
    const [changeGender, setChangeGender] = useState(gender);
    const [userKey,setUserKey] = useState('')
    const [navigate,setNavigate] = useState(false)

    const {register,handleSubmit,watch,formState: { errors }, } = useForm();

    const loginByAuth = () => {
        const userKey = localStorage.getItem("key");
        setUserKey(userKey)
      };
    
    useEffect(()=>{loginByAuth()},[])

    const onSubmit = async (data) => {
        const request = await fetch('https://wirelessbd.com/api/profile/update',{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
                Authorization: `Bearer ${userKey}`,
            },
            body:JSON.stringify({
                "name":data.name,
                "gender":changeGender,
                "image":null,
                "address":data.address,
                "profession":profession
            })
        })
        const response = await request.json();
        console.log(response,data)
        if(response.status_code === 201){
            Swal.fire(
                'Good job!',
                `${response.message}`,
                'success'
              )
              setNavigate(true)
        }else{
            Swal.fire(
                'OOPS!',
                `${response.message}`,
                'error'
              )
        }

    }
    if(navigate){
        return <Navigate to="/profile"/>
        // console.log(navigate)
    }

    return (
        <form className='card' onSubmit={handleSubmit(onSubmit)}>
            <div className={`single_input ${errors.name ? "mb-4" : ""}`}>
          <i className="fa-solid fa-user"></i>
          <input
            defaultValue={name}
            {...register("name", { required: true })}
            autoComplete="off"
            className="form-control"
            type="text"
            placeholder="Name"
          />

          {errors.name && (
            <span className="d-block text-danger w-100 position-absolute">
              Name is required
            </span>
          )}
        </div>
        <div className="single_input d-flex align-items-center gap-2 gender">
          <Link
            onClick={() => setChangeGender("male")}
            id="male_btn"
            className={`primary_btn d-flex align-items-center justify-content-center m-0 ${
              changeGender === "male" ? "active" : ""
            }`}
            htmlFor="male"
          >
            <i className="fa-solid fa-mars"></i>Male
          </Link>

          <Link
            onClick={() => setChangeGender("female")}
            id="female_btn"
            className={`primary_btn d-flex align-items-center justify-content-center m-0 ${
              changeGender === "female" ? "active" : ""
            }`}
            htmlFor="female"
          >
            <i className="fa-solid fa-venus"></i>Female
          </Link>
        </div>
        <div className={`single_input ${errors.address ? "mb-4" : ""}`}>
          <i className="fa-sharp fa-solid fa-location-dot"></i>
          <input
          defaultValue={address}
            {...register("address", { required: true })}
            autoComplete="off"
            type="text"
            placeholder="Address"
            className="form-control"
          />
          {errors.address && (
            <span className="d-block text-danger w-100 position-absolute">
              Address is required
            </span>
          )}
        </div>
        <button type="submit" className="primary_btn">
            Update Profile
          </button>
        </form>
    );
}

export default EditProfileForm;
