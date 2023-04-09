import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Navigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { UserContext } from '../../App';

const UpdatePassword = ({mobile}) => {
    const [user,setUser] = useContext(UserContext)
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm();

      const onSubmit = async (data) => {
        const request = await fetch(`https://wirelessbd.com/api/update-password`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
        const response = await request.json();
        // console.log(response)
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
        <div className="h-100 justify-content-center flex-column d-flex container">
            <form
              onSubmit={handleSubmit(onSubmit)}
              autoComplete="off"
              className="needs-validation card mt-3"
            >
              <h3 className="text-center heading_text">Update Password</h3>

              <div className={`single_input ${errors.mobile ? "mb-3" : ""}`}>
                <i className="fa-solid fa-phone"></i>
                <input
                  value={mobile}
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

              <div className="condition pt-2">
                <button type="submit" className="primary_btn">
                  Update Password
                </button>
              </div>
            </form>
          </div>
    );
}

export default UpdatePassword;
