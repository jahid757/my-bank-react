import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import SelectValue from "../form/select";
import FullContainer from "../FullContainer";

import Swal from "sweetalert2";
import { Navigate, useParams } from "react-router-dom";
import { getAccountDataById, updateAccountData } from "../../Auth/CallAPI";

const UpdateAccountForm = () => {
  const {id} = useParams()
  const [selectValue, setSelectValue] = useState();
  const [navigate,setNavigate] = useState(false);
  const [accountType,setAccountType] = useState([
    {
        name:'Savings',
        value:'savings'
    },
    {
        name:'Current',
        value:'current'
    }
  ]);
  const [accountTypeValue,setAccountValue] = useState('');
  const [singleAccountData,setSingleAccountData] = useState({})

  const onSubmit = async (data) => {
    const body = {
      ...data,
      bank_id: selectValue,
      bank_account_type: accountTypeValue,
      mobile_wallet_id: null,
    };

    const update = await updateAccountData(body,id)
    console.log(update)
    if(update.status_code === 201){
        Swal.fire(
            'Good job!',
            `${update.message}`,
            'success'
          )
          
    }else{
        Swal.fire(
            'OOPS!',
            `${update.message}`,
            'error'
          )
    }
    setNavigate(true)
  };

  async function loadAccountData(){
    const data = await getAccountDataById(id);
    // console.log(data)
    setSingleAccountData(data.singleAccountData);
    setAccountValue('current');
  }
useEffect(() => {
  loadAccountData();
},[])



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
        <h3 className="text-center heading_text">Create Bank Account</h3>

 <div className={`single_input ${errors.branch ? "mb-3" : ""}`}>
 <i className="fa-solid fa-location-dot"></i>
                <input
                    {...register("branch", { required: true })}
                    autoComplete="off"
                    type="text"
                    placeholder="Branch"
                    className="form-control"
                    defaultValue={singleAccountData.branch}
                />
                {errors.branch && (
                    <span className="d-block text-danger w-100 position-absolute">
                    Branch is required
                    </span>
                )}
                </div>
        <div className={`single_input`}>
        <i className="fa-solid fa-coins"></i>
            <SelectValue
              placeholder={"Account Type"}
              setSelectValue={setAccountValue}
              selectValue={accountTypeValue}
              options={accountType}
            />
          </div>

       

        <div className={`single_input ${errors.account_number ? "mb-3" : ""}`}>
        <i className="fa-solid fa-credit-card"></i>
          <input
            {...register("account_number", { required: true })}
            autoComplete="off"
            type="text"
            placeholder="Account Number"
            className="form-control"
            defaultValue={singleAccountData.account_number}
          />
          {errors.account_number && (
            <span className="d-block text-danger w-100 position-absolute">
              Account Number is required
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
            defaultValue={singleAccountData.current_balance}
          />
          {errors.current_balance && (
            <span className="d-block text-danger w-100 position-absolute">
              Current Balance is required
            </span>
          )}
        </div>

        <div className="condition">
          <button type="submit" className="primary_btn mb-0">
            Create Wallet
          </button>
        </div>
      </form>
    </FullContainer>
  );
};

export default UpdateAccountForm;
