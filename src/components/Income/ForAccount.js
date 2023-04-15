import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import SelectValue from '../form/select';

const passions = [
    {
      name: "IFD",
      value: "1",
    },
    {
      name: "IFD",
      value: "2",
    },
    {
      name: "IFD",
      value: "3",
    },
  ];


const ForAccount = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm();
    const [selectValue, setSelectValue] = useState("");
  const [incomeSource, setIncomeSource] = useState("salary");

  const onSubmit = (data) => {
    data.incomeSource = incomeSource;
    data.receiver = selectValue

    console.log(data)
  };

    return (
        <form className="card mb-3" onSubmit={handleSubmit(onSubmit)}>
        <h4 className='text-center'>Income (For Account)</h4>
      <div className={`single_input`}>
        <i className="fa-solid fa-building-columns"></i>
        <SelectValue
          placeholder={"Select Bank"}
          selectValue={selectValue}
          setSelectValue={setSelectValue}
          options={passions}
        />
      </div>
      <div className={`single_input`}>
        <i className="fa-solid fa-building-columns"></i>
        <SelectValue
          placeholder={"Select Account Number"}
          selectValue={''}
          setSelectValue={setSelectValue}
          options={passions}
        />
      </div>
      <label className='mt-2' htmlFor=""> Source of Income</label>
      <div className="single_input d-flex align-items-center gap-2 justify-content-around border mt-0">
      
        <label
          onClick={() => setIncomeSource("salary")}
          className="d-flex py-2 align-items-center gap-2"
        >
          <input defaultChecked type="radio" name="bank" />
          Salary
        </label>
        <label
          onClick={() => setIncomeSource("business")}
          className="d-flex py-2 border-end border-start px-4 align-items-center gap-2"
        >
          <input type="radio" name="bank" />
          Business
        </label>
        <label
          onClick={() => setIncomeSource("others")}
          className="d-flex py-2 align-items-center gap-2"
        >
          <input type="radio" name="bank" />
          Others
        </label>
      </div>
      <div className={`single_input ${errors.amount ? "mb-3" : ""}`}>
        <i className="fa-solid fa-bangladeshi-taka-sign"></i>
        <input
          {...register("amount", { required: true })}
          type="number"
          name="amount"
          id="amount"
          placeholder="Enter Amount"
        />
        {errors.amount && (
          <span className="d-block text-danger w-100 position-absolute">
            Amount is required
          </span>
        )}
      </div>
      <div className="single_input">
        <textarea
          {...register("note", { required: false })}
          type="text"
          name="note"
          id="note"
          placeholder="Write Note"
        ></textarea>
      </div>

      
      

      <button className="primary_btn mb-1">Transfer Money</button>
    </form>
    );
}

export default ForAccount;
