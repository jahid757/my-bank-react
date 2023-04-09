import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { UserContext } from "./../../App";
import { Navigate } from "react-router-dom";
import Container from "../../components/Container";
import VerifyOtp from "../OTP/VerifyOtp";
import UpdatePassword from "./UpdatePassword";

const ResetPasswordForm = () => {
  const [user, setUser] = useContext(UserContext);
  const [verifyCode, setVerifyCode] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const [userMobile, setUserMobile] = useState("");
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

//   console.log(isVerified,verifyCode);
  const onSubmit = async (data) => {
    const request = await fetch(`https://wirelessbd.com/api/reset-password`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const response = await request.json();
    setVerifyCode(response.verifyOtp);
    setUserMobile(response.mobile);

    console.log(data, response, userMobile, isVerified,verifyCode);
  };

  // if (user) {
  //     return <Navigate to="/" />;
  // }
  // console.log(userMobile,response)

  return (
    <>
      {!isVerified ? (
        !verifyCode ? (
          <>
            <div className="h-100 justify-content-center flex-column d-flex container">
              <form
                onSubmit={handleSubmit(onSubmit)}
                autoComplete="off"
                className="needs-validation card mt-3"
              >
                <h3 className="text-center heading_text">Enter Number</h3>

                <div className={`single_input ${errors.mobile ? "mb-3" : ""}`}>
                  <i className="fa-solid fa-phone"></i>
                  <input
                    {...register("mobile", { required: true })}
                    autoComplete="off"
                    type="tel"
                    placeholder="Mobile"
                    className={`form-control`}
                  />
                  {errors.mobile && (
                    <span className="d-block text-danger w-100 position-absolute">
                      Mobile is required
                    </span>
                  )}
                </div>

                <div className="condition pt-2">
                  <button type="submit" className="primary_btn">
                    Login
                  </button>
                </div>
              </form>
            </div>
          </>
        ) : (
          <>
            <div className="h-100 justify-content-center flex-column d-flex container">
              <VerifyOtp setVerified={setIsVerified} />
            </div>
          </>
        )
      ) : (
        <UpdatePassword mobile={userMobile} />
      )}
    </>
  );
};

export default ResetPasswordForm;
