import React from "react";

const TransactionHead = ({type,setType}) => {
  return (
    <div className="mb-3 btn-no-color d-flex align-items-center gap-1 justify-content-between">
      <button onClick={() => setType('all')} className={`primary_btn ${type==='all' ? 'active':''}`}>All</button>
      <button onClick={() => setType('credit')} className={`primary_btn ${type==='credit' ? 'active':''}`}>Credit</button>
      <button onClick={() => setType('debit')} className={`primary_btn ${type==='debit' ? 'active':''}`}>Debit</button>
    </div>
  );
};

export default TransactionHead;
