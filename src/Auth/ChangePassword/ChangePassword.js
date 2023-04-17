import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { UserContext } from "./../../App";
import Swal from "sweetalert2";
import Header from "../../components/header/Header";
import FullContainer from "../../components/FullContainer";
import AuthFooter from "../../components/footer/AuthFooter";
import { Navigate } from 'react-router-dom';

const ChangePassword = () => {
  const [navigate, setNavigate] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const userKey = localStorage.getItem("key");
  const onSubmit = async (data) => {
    // console.log(data)
    const request = await fetch(`https://wirelessbd.com/api/profile/password/update`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userKey}`,
      },
      body: JSON.stringify(data),
    });
    const response = await request.json();
    if (response.status_code === 201) {
        Swal.fire("Good job!", `${response.message}`, "success");
        setNavigate(true)

      } else {
        Swal.fire("OOPS!", `${response.message}`, "error");
      }

    // console.log(data, response);
  };

if(navigate){
    return <Navigate to="/profile"/>
}


  return (
    <>
      
          <Header/>
          <FullContainer>
          <>
            <div className="h-100 justify-content-center flex-column d-flex container">
              <form
                onSubmit={handleSubmit(onSubmit)}
                autoComplete="off"
                className="needs-validation card mt-3"
              >
                <h3 className="text-center heading_text">Change Password</h3>

                <div className={`single_input ${errors.old_password ? "mb-3" : ""}`}>
                  <i className="fa-solid fa-phone"></i>
                  <input
                    {...register("old_password", { required: true })}
                    autoComplete="off"
                    type="tel"
                    placeholder="Old Password"
                    className={`form-control`}
                  />
                  {errors.old_password && (
                    <span className="d-block text-danger w-100 position-absolute">
                      Old is required
                    </span>
                  )}
                </div>

                <div className={`single_input ${errors.password ? "mb-3" : ""}`}>
                  <i className="fa-solid fa-phone"></i>
                  <input
                    {...register("password", { required: true })}
                    autoComplete="off"
                    type="tel"
                    placeholder="Password"
                    className={`form-control`}
                  />
                  {errors.password && (
                    <span className="d-block text-danger w-100 position-absolute">
                      Password is required
                    </span>
                  )}
                </div>

                <div className={`single_input ${errors.password_confirmation ? "mb-3" : ""}`}>
                  <i className="fa-solid fa-phone"></i>
                  <input
                    {...register("password_confirmation", { required: true })}
                    autoComplete="off"
                    type="tel"
                    placeholder="Mobile"
                    className={`form-control`}
                  />
                  {errors.password_confirmation && (
                    <span className="d-block text-danger w-100 position-absolute">
                      Confirm Password is required
                    </span>
                  )}
                </div>

                <div className="condition pt-2">
                  <button type="submit" className="primary_btn">
                    Change Password
                  </button>
                </div>
              </form>
            </div>
          </>
          </FullContainer>
        <AuthFooter footerActive={'profile'}/>
    </>
  );
};

export default ChangePassword;
