import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import SelectValue from "../form/select";
import FullContainer from "../FullContainer";
import {
  createAccount,
  fetchBankDataWithAccountType,
} from "../../Auth/CallAPI";
import Swal from "sweetalert2";
import { Navigate } from "react-router-dom";

const BankCreate = () => {
  const [selectValue, setSelectValue] = useState(1);
  const [selectOptions, setSelectOptions] = useState([]);
  const [renderSelectValue, setRenderSelectValue] = useState([]);
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
  const [accountTypeValue,setAccountValue] = useState('savings')

  const onSubmit = async (data) => {
    const body = {
      ...data,
      bank_id: selectValue,
      bank_account_type: accountTypeValue,
      mobile_wallet_id: null,
    };

    const create = await createAccount(body);
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

  function loadingData() {
    const selectOptionData = [];
    const accountType = async () => {
      const account = await fetchBankDataWithAccountType("Banks");
      setSelectOptions(account.data);

      selectOptions.forEach((item) => {
        const selectObject = {
          name: item.bank_name,
          value: `${item.id}`,
        };
        selectOptionData.push(selectObject);
        setRenderSelectValue(selectOptionData);
      });
    };
    accountType();
    // console.log("calling");
  }

  renderSelectValue.length < 1 ? loadingData() : console.log();

  return (
    <FullContainer center_xy={true}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        autoComplete="off"
        className="needs-validation card"
        style={{ marginBottom: "13px" }}
      >
        <h3 className="text-center heading_text">Add Bank Account</h3>

        {renderSelectValue.length > 0 ? (
          <div className={`single_input`}>
          <i className="fa-solid fa-piggy-bank"></i>
            <SelectValue
              placeholder={"Bank Name"}
              setSelectValue={setSelectValue}
              selectValue={selectValue}
              options={renderSelectValue.length > 0 ? renderSelectValue : []}
            />
          </div>
        ) : (
          "Bank type loading..."
        )}
 <div className={`single_input ${errors.branch ? "mb-3" : ""}`}>
 <i className="fa-solid fa-location-dot"></i>
                <input
                    {...register("branch", { required: true })}
                    autoComplete="off"
                    type="text"
                    placeholder="Branch"
                    className="form-control"
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
          />
          {errors.current_balance && (
            <span className="d-block text-danger w-100 position-absolute">
              Current Balance is required
            </span>
          )}
        </div>

        <div className="condition">
          <button type="submit" className="primary_btn mb-0">
            Add Bank Account
          </button>
        </div>
      </form>
    </FullContainer>
  );
};

export default BankCreate;
