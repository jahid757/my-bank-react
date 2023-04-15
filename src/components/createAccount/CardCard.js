import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import SelectValue from "../form/select";
import FullContainer from "../FullContainer";
import {
  createCard,
  fetchBankDataWithAccountType,
} from "../../Auth/CallAPI";
import Swal from "sweetalert2";
import { Navigate } from "react-router-dom";

const CardCreate = () => {
  const [selectValue, setSelectValue] = useState(1);
  const [selectOptions, setSelectOptions] = useState([]);
  const [renderSelectValue, setRenderSelectValue] = useState([]);
  const [navigate,setNavigate] = useState(false);
  const [accountType,setAccountType] = useState([
    {
        name:'Master Card',
        value:'master_card'
    },
    {
        name:'Visa',
        value:'visa'
    }
  ]);
  const [accountTypeValue,setAccountValue] = useState('visa')

  const onSubmit = async (data) => {
    const body = {
      ...data,
      card_type: accountTypeValue
    };

    const create = await createCard(body);
    console.log(create)
    if(create.status_code === 201){
        Swal.fire(
            'Good job!',
            `${create.message}`,
            'success'
          )
          
    }else{
        Swal.fire(
            'OOPS!',
            `${create.message}`,
            'error'
          )
    }
    setNavigate(true)
  };



  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  if(navigate){
    return <Navigate to="/profile"/>
}


  return (
    <FullContainer center_xy={true}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        autoComplete="off"
        className="needs-validation card"
        style={{ marginBottom: "13px" }}
      >
        <h3 className="text-center heading_text">Add Credit Card</h3>

 <div className={`single_input ${errors.card_name ? "mb-3" : ""}`}>
 <i className="fa-solid fa-location-dot"></i>
                <input
                    {...register("card_name", { required: true })}
                    autoComplete="off"
                    type="text"
                    placeholder="Card Name"
                    className="form-control"
                />
                {errors.card_name && (
                    <span className="d-block text-danger w-100 position-absolute">
                    Card name is required
                    </span>
                )}
                </div>
        <div className={`single_input`}>
        <i className="fa-solid fa-coins"></i>
            <SelectValue
              placeholder={"Card Provider"}
              setSelectValue={setAccountValue}
              selectValue={accountTypeValue}
              options={accountType}
            />
          </div>

       

        <div className={`single_input ${errors.card_number ? "mb-3" : ""}`}>
        <i className="fa-solid fa-credit-card"></i>
          <input
            {...register("card_number", { required: true })}
            autoComplete="off"
            type="text"
            placeholder="Account Number"
            className="form-control"
          />
          {errors.card_number && (
            <span className="d-block text-danger w-100 position-absolute">
              Card Number is required
            </span>
          )}
        </div>

        

        

        <div className={`single_input ${errors.total_limit ? "mb-3" : ""}`}>
          <i className="fa-solid fa-bangladeshi-taka-sign"></i>
          <input
            {...register("total_limit", { required: true })}
            autoComplete="off"
            type="number"
            placeholder="Total limit"
            className="form-control"
          />
          {errors.total_limit && (
            <span className="d-block text-danger w-100 position-absolute">
              Total limit is required
            </span>
          )}
        </div>

        <div className={`single_input ${errors.total_bdt_limit ? "mb-3" : ""}`}>
          <i className="fa-solid fa-bangladeshi-taka-sign"></i>
          <input
            {...register("total_bdt_limit", { required: true })}
            autoComplete="off"
            type="number"
            placeholder="Total BDT limit"
            className="form-control"
          />
          {errors.total_bdt_limit && (
            <span className="d-block text-danger w-100 position-absolute">
              Total BDT limit is required
            </span>
          )}
        </div>

        <div className={`single_input ${errors.total_usd_limit ? "mb-3" : ""}`}>
          <i className="fa-solid fa-bangladeshi-taka-sign"></i>
          <input
            {...register("total_usd_limit", { required: true })}
            autoComplete="off"
            type="number"
            placeholder="Total USD limit"
            className="form-control"
          />
          {errors.total_usd_limit && (
            <span className="d-block text-danger w-100 position-absolute">
              Total USD limit is required
            </span>
          )}
        </div>

        <div className={`single_input ${errors.current_balance ? "mb-3" : ""}`}>
          <i className="fa-solid fa-bangladeshi-taka-sign"></i>
          <input
            {...register("current_balance", { required: true })}
            autoComplete="off"
            type="number"
            placeholder="Current Balance"
            className="form-control"
          />
          {errors.current_balance && (
            <span className="d-block text-danger w-100 position-absolute">
              Current Balance is required
            </span>
          )}
        </div>

        <div className={`single_input ${errors.current_bdt_outstanding ? "mb-3" : ""}`}>
          <i className="fa-solid fa-bangladeshi-taka-sign"></i>
          <input
            {...register("current_bdt_outstanding", { required: true })}
            autoComplete="off"
            type="number"
            placeholder="Current Balance"
            className="form-control"
          />
          {errors.current_bdt_outstanding && (
            <span className="d-block text-danger w-100 position-absolute">
              Current BDT Outstanding is required
            </span>
          )}
        </div>

        <div className={`single_input ${errors.current_usd_outstanding ? "mb-3" : ""}`}>
          <i className="fa-solid fa-bangladeshi-taka-sign"></i>
          <input
            {...register("current_usd_outstanding", { required: true })}
            autoComplete="off"
            type="number"
            placeholder="Current Balance"
            className="form-control"
          />
          {errors.current_usd_outstanding && (
            <span className="d-block text-danger w-100 position-absolute">
              Current USD Outstanding is required
            </span>
          )}
        </div>

        <div className="condition">
          <button type="submit" className="primary_btn mb-0">
            Add Credit Card
          </button>
        </div>
      </form>
    </FullContainer>
  );
};

export default CardCreate;
