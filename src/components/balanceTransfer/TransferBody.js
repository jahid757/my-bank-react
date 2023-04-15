import React, { useState } from "react";
import { useForm } from "react-hook-form";
import SelectValue from "../form/select";

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

const TransferBody = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [selectValue, setSelectValue] = useState("2");
  const [channel, setChannel] = useState("beftn");
  const onSubmit = (data) => {
    data.channel = channel;
    data.receiver = selectValue

    console.log(data)
  };

  return (
    <form className="card mb-3" onSubmit={handleSubmit(onSubmit)}>
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
          placeholder={"Select Account"}
          selectValue={''}
          setSelectValue={setSelectValue}
          options={passions}
        />
      </div>
      <div className="single_input d-flex align-items-center gap-2 justify-content-around border">
        <label
          onClick={() => setChannel("beftn")}
          className="d-flex py-2 align-items-center gap-2"
        >
          <input defaultChecked type="radio" name="bank" />
          BEFTN
        </label>
        <label
          onClick={() => setChannel("npsb")}
          className="d-flex py-2 border-end border-start px-4 align-items-center gap-2"
        >
          <input type="radio" name="bank" />
          NPSB
        </label>
        <label
          onClick={() => setChannel("rtgs")}
          className="d-flex py-2 align-items-center gap-2"
        >
          <input type="radio" name="bank" />
          RTGS
        </label>
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
      <div className="d-flex gap-2 mt-3 bg-light-green p-2">
        <i className="fa-solid fa-triangle-exclamation text-warning"></i>
        <ul className="p-0 m-0">
          <li>* No Transaction Fee</li>
          <li>* Each Transaction 30,000.00 BDT (Max) 100.00 BDT (Min)</li>
          <li>
            * Each Total Amount 500,000.00 BD (Max) Single Day Transaction
          </li>
        </ul>
      </div>

      <button className="primary_btn mb-1">Transfer Money</button>
    </form>
  );
};

export default TransferBody;
