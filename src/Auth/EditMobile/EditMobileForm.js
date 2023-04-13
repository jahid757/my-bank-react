import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import VerifyOtp from "../OTP/VerifyOtp";
import OTPInput from "react-otp-input";

const EditMobileForm = () => {
  const [verifyOtpCode, setVerifyOtpCode] = useState(false);
  const [verified, setVerified] = useState(false);
  const [code, setCode] = useState("");
  const [mobile,setMobile] = useState('')

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const userKey = localStorage.getItem("key");
    const request = await fetch(
      `https://wirelessbd.com/api/profile/mobile/update`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userKey}`,
        },
        body: JSON.stringify(data),
      }
    );
    const response = await request.json();
    setMobile(response.mobile)
    if (response.status_code === 201) {
      Swal.fire("Good job!", `${response.message}`, "success");
      setVerifyOtpCode(true);
    } else {
      Swal.fire("OOPS!", `${response.message}`, "error");
    }
  };

  // if(verified){
  //     if(verified.status_code === 201){
  //         Swal.fire(
  //             'Good job!',
  //             `${verified.message}`,
  //             'success'
  //           )
  //     }else{
  //         Swal.fire(
  //             'OOPS!',
  //             `${verified.message}`,
  //             'error'
  //           )
  //     }
  // }
  const updateMobile = async () => {
    const userKey = localStorage.getItem("key");
    const request = await fetch(
      `https://wirelessbd.com/api/profile/mobile/verify`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userKey}`,
        },
        body: JSON.stringify({
            "mobile":{mobile},
            "verify_code": {code}
        }),
      }
    );
    const response = await request.json();
    console.log(response)
    if (response.status_code === 201) {
      Swal.fire("Good job!", `${response.message}`, "success");
      setVerifyOtpCode(true);
    } else {
      Swal.fire("OOPS!", `${response.message}`, "error");
    }
  }

  return (
    <>
      {verifyOtpCode ? (
        <div className="card">
        <div className="cs-container mb-2">
        <h5 className='mb-3 text-center'>Update Mobile</h5>
          <OTPInput 

        value={code}
      onChange={setCode}
      numInputs={6}
      renderSeparator={''}
      renderInput={(props) => <input {...props} />}
          />
          
        </div><input
            type="text"
            className="form-control"
            placeholder="Mobile"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            readOnly
          />
          <button onClick={updateMobile} className="primary_btn mb-0 w-100 mt-3" type="submit" >Update Mobile</button>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit(onSubmit)}
          autoComplete="off"
          className="needs-validation card mt-3"
        >
          <h3 className="text-center heading_text">Update Mobile</h3>

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
              Send OTP
            </button>
          </div>
        </form>
      )}
    </>
  );
};

export default EditMobileForm;
