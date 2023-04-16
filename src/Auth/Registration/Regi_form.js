import React, { useContext, useState } from "react";
import Container from "./../../components/Container";
import { Link, Navigate } from "react-router-dom";
import SelectValue from "../../components/form/select";
import { useForm } from "react-hook-form";
import VerifyOtp from "../OTP/VerifyOtp";
import Swal from "sweetalert2";

const passions = [
  {
    name: "Banker",
    value: "banker",
  },
  {
    name: "Gov Employ",
    value: "gov_employ",
  },
];

const RegiForm = () => {
  const [otpVerify, setOtpVerify] = useState();
  const [gender, setGender] = useState("male");
  const [verified,setVerified] = useState(false);
  const [selectValue, setSelectValue] = useState('banker')

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();


  const onSubmit = async (data) => {
    // data.image = null;
    // data.gender = gender;
    // data.profession = selectValue

    const request = await fetch(`https://wirelessbd.com/api/register`, {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify({
            "name": data.name,
            "mobile": data.mobile,
            "email": data.email,
            "password": data.password,
            "password_confirmation": data.password_confirmation,
            "gender": gender,
            "address": data.address,
            "image": null,
            "profession":selectValue,
            "wallet":data.wallet
          })
    });
    const response = await request.json();
    setOtpVerify(response.otpVerifyCode)
    console.log(response)
  };

if(verified.status_code === 201 || verified.status_code === 500){
  if(verified.status_code === 201){
    Swal.fire(
        'Good job!',
        `${verified.message}`,
        'success'
      )
      return <Navigate to="/login"/>
}else{
    Swal.fire(
        'OOPS!',
        `${verified.message}`,
        'error'
      )
}
}

  return (
   <>
    {
        otpVerify ? 
     <>
        <div className="d-flex container justify-content-center flex-column h-100">
            <VerifyOtp setVerified={setVerified}/>
        </div>
    </>
     :
     <>
         <Container>
      <form
        onSubmit={handleSubmit(onSubmit)}
        autoComplete="off"
        className="needs-validation card"
        style={{ marginBottom: "13px" }}
      >
        <h3 className="text-center heading_text">Registration</h3>

        <div className={`single_input ${errors.name ? "mb-3" : ""}`}>
          <i className="fa-solid fa-user"></i>
          <input
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

        <div className={`single_input ${errors.email ? "mb-3" : ""}`}>
          <i className="fa-solid fa-envelope"></i>
          <input
            {...register("email", { required: true })}
            autoComplete="off"
            type="email"
            placeholder="Email"
            className="form-control"
          />
          {errors.email && (
            <span className="d-block text-danger w-100 position-absolute">
              Email is required
            </span>
          )}
        </div>

        <div className="single_input d-flex align-items-center gap-2 gender">
          <Link
            onClick={() => setGender("male")}
            id="male_btn"
            className={`primary_btn d-flex align-items-center justify-content-center m-0 ${
              gender === "male" ? "active" : ""
            }`}
            htmlFor="male"
          >
            <i className="fa-solid fa-mars"></i>Male
          </Link>

          <Link
            onClick={() => setGender("female")}
            id="female_btn"
            className={`primary_btn d-flex align-items-center justify-content-center m-0 ${
              gender === "female" ? "active" : ""
            }`}
            htmlFor="female"
          >
            <i className="fa-solid fa-venus"></i>Female
          </Link>
        </div>

        <div className={`single_input`}>
          {/* <div className={`single_input ${errors.profession ? "mb-3" : ""}`}> */}
          <i className="fa-solid fa-briefcase"></i>
          <SelectValue selectValue={selectValue} setSelectValue={setSelectValue} options={passions} />
          {/* {...register("profession", { required: true })} */}
          {/* {errors.profession && <span className="d-block text-danger w-100 position-absolute">Profession is required</span>} */}
        </div>

        <div className={`single_input ${errors.wallet ? "mb-3" : ""}`}>
        <i className="fa-solid fa-wallet"></i>
          <input
            {...register("wallet", { required: true })}
            autoComplete="off"
            type="text"
            placeholder="Wallet"
            className="form-control"
          />
          {errors.wallet && (
            <span className="d-block text-danger w-100 position-absolute">
              Wallet is required
            </span>
          )}
        </div>

        <div className={`single_input ${errors.address ? "mb-3" : ""}`}>
          <i className="fa-sharp fa-solid fa-location-dot"></i>
          <input
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

        <div className={`single_input ${errors.password ? "mb-3" : ""}`}>
          <i className="fa-solid fa-lock"></i>
          <input
            {...register("password", { required: true })}
            autoComplete="off"
            type="password"
            placeholder="Password"
            className="form-control"
          />
          {errors.password && (
            <span className="d-block text-danger w-100 position-absolute">
              Password is required
            </span>
          )}
        </div>

        <div
          className={`single_input ${
            errors.password_confirmation ? "mb-3" : ""
          }`}
        >
          <i className="fa-solid fa-lock"></i>
          <input
            {...register("password_confirmation", { required: true })}
            autoComplete="off"
            type="password"
            placeholder="Confirm Password"
            className="form-control"
          />
          {errors.password_confirmation && (
            <span className="d-block text-danger w-100 position-absolute">
              Confirm Password is required
            </span>
          )}
        </div>

        <div className="condition">
          <label
            className="d-flex mt-2 align-items-center gap-2"
            htmlFor="role"
          >
            <input
              required
              className="form-check-input m-0"
              type="checkbox"
              name="role"
              id="role"
            />
            Agree with <Link to="/terms">Terms & Conditions</Link>
          </label>
          <button type="submit" className="primary_btn">
            Registration
          </button>
          <label className="mt-2 text-center d-block" htmlFor="login">
            Already have an account? <Link to="/login">login</Link>
          </label>
        </div>
      </form>
    </Container>
    </>
    }
   </>
   
  );
};

export default RegiForm;
