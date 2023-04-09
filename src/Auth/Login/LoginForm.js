import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { UserContext } from './../../App';
import { Navigate } from "react-router-dom";
import Swal from "sweetalert2";

const LoginForm = () => {
    const [user, setUser] = useContext(UserContext)
    const {register,handleSubmit, watch,formState: { errors },} = useForm();

    const setAuthKeyInLocal = (key) => {
        localStorage.setItem('key',key)
    }

    const onSubmit = async (data) => {
        const request = await fetch(`https://wirelessbd.com/api/login`,{
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        })
        const response = await request.json();
        if(response.status_code === 201){
            setUser(response.userData)
            setAuthKeyInLocal(response.access_token)
            Swal.fire(
                'Good job!',
                `${response.message}`,
                'success'
              )
        }else{
            Swal.fire(
                'OOPS!',
                `${response.message}`,
                'error'
              )
        }
    };
    
    if (user) {
        return <Navigate to="/" />;
    }
    
    return (
        <div className="h-100 justify-content-center flex-column d-flex container">
            <form onSubmit={handleSubmit(onSubmit)} autoComplete="off" className="needs-validation card mt-3">
               
               <h3 className="text-center heading_text">Login</h3>
           
               <div className={`single_input ${errors.mobile ? "mb-3" : ""}`}>
                   <i className="fa-solid fa-phone"></i>
                   <input  {...register("mobile", { required: true })} autoComplete="off" type="tel" placeholder="Mobile"  className={`form-control`} />
                   {errors.mobile && <span className="d-block text-danger w-100 position-absolute">Mobile is required</span>}
               </div>
           
           
               <div className={`single_input ${errors.password ? "mb-3" : ""}`}>
                   <i className="fa-solid fa-lock"></i>
                   <input {...register("password", { required: true })} autoComplete="off" type="password" placeholder="Password"  className="form-control"/>
                   {errors.password && <span className="d-block text-danger w-100 position-absolute">Password is required</span>}
               </div>
           
               <div className="condition pt-2">
                   <div className="d-flex align-items-center justify-content-between">
                   <label className="d-flex align-items-center gap-2" htmlFor="role"><input type="checkbox" name="role" id="role"/>Remember me</label>
                       <label className="mt-0" htmlFor="login"><a href="/forget">Forget Password</a></label>
                   </div>
                   <button type="submit" className="primary_btn">Login</button>
                   <label className="mt-2 text-center d-block" htmlFor="login">Don't have an account? <a href="/registration">Register</a></label>
               </div>
           </form>
        </div>
    );
}

export default LoginForm;
