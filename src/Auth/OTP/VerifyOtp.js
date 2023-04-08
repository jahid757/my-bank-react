import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import OTPInput from 'react-otp-input';

const VerifyOtp = ({authKey}) => {
    const { register, handleSubmit,  watch, formState: { errors }, } = useForm();

      const [verify_code, setVerify_code] = useState('');

    const onSubmit = (data) => {
        fetch("https://wirelessbd.com/api/otp-verify-code", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${authKey}`,
          },
          body: JSON.stringify({verify_code:verify_code}),
        }).then(res =>  res.json())
        .then(code => {
            console.log(code)
        })
        // console.log(JSON.stringify(Number(verify_code)))
      }
    return (
        <div className="card">
        <h5 className='mb-3 text-center'>Enter verification code</h5>
            <form autoComplete="false" className="cs-container" onSubmit={handleSubmit(onSubmit)}>
        <OTPInput
        // register
      value={verify_code}
      onChange={setVerify_code}
      numInputs={6}
      renderSeparator={''}
      renderInput={(props) => <input {...props} />}
    />

        <button className="primary_btn mb-0 w-100 mt-3" type="submit" >Verify OTP</button>
      </form>
        </div>
    );
}

export default VerifyOtp;
