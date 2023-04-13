import React from "react";

const SingleTransaction = ({type}) => {
    
  return (
   <>
    {
        type === 'all' ?

        <>
        <div
      className=""
    >
      <div className="card transaction p-0 mb-3">
        <div className="d-flex align-items-center justify-content-between p-2">
          <div className="d-flex flex-column">
            <h6>Transaction for mobile banking</h6>
            <p className="text-secondary fw-light">Tran ID: 10JD3920MB3230H</p>
          </div>
          <div className="d-flex flex-column">
            <p className="text-secondary fw-light">3 Apr 2023 10:49PM</p>
            <h4 className="h5 text-danger">
              <sup>Dr</sup>1840.00
            </h4>
          </div>
        </div>
        <div className="bg-secondary p-2">
          <p className="h5 m-0">CRD: Card Payment: 1893*****983: thanks </p>
        </div>
      </div>
    </div>
    <div
      className=""
    >
      <div className="card transaction p-0 mb-3">
        <div className="d-flex align-items-center justify-content-between p-2">
          <div className="d-flex flex-column">
            <h6>Transaction for mobile banking</h6>
            <p className="text-secondary fw-light">Tran ID: 10JD3920MB3230H</p>
          </div>
          <div className="d-flex flex-column">
            <p className="text-secondary fw-light">3 Apr 2023 10:49PM</p>
            <h4 className="h5 text-success">
              <sup>Dr</sup>1500.00
            </h4>
          </div>
        </div>
        <div className="bg-secondary p-2">
          <p className="h5 m-0">CRD: Card Payment: 1893*****983: thanks </p>
        </div>
      </div>
    </div>
        </> :''
    }
    {
        type === 'credit' ?

        <>
        <div
      className=""
    >
      <div className="card transaction p-0 mb-3">
        <div className="d-flex align-items-center justify-content-between p-2">
          <div className="d-flex flex-column">
            <h6>Transaction for mobile banking</h6>
            <p className="text-secondary fw-light">Tran ID: 10JD3920MB3230H</p>
          </div>
          <div className="d-flex flex-column">
            <p className="text-secondary fw-light">3 Apr 2023 10:49PM</p>
            <h4 className="h5 text-success">
              <sup>Dr</sup>1830.00
            </h4>
          </div>
        </div>
        <div className="bg-secondary p-2">
          <p className="h5 m-0">CRD: Card Payment: 1893*****983: thanks </p>
        </div>
      </div>
    </div>
        </> :''
    }
    {
        type === 'debit' ?

        <>
        <div
      className=""
    >
      <div className="card transaction p-0 mb-3">
        <div className="d-flex align-items-center justify-content-between p-2">
          <div className="d-flex flex-column">
            <h6>Transaction for mobile banking</h6>
            <p className="text-secondary fw-light">Tran ID: 10JD3920MB3230H</p>
          </div>
          <div className="d-flex flex-column">
            <p className="text-secondary fw-light">3 Apr 2023 10:49PM</p>
            <h4 className="h5 text-danger">
              <sup>Dr</sup>1840.00
            </h4>
          </div>
        </div>
        <div className="bg-secondary p-2">
          <p className="h5 m-0">CRD: Card Payment: 1893*****983: thanks </p>
        </div>
      </div>
    </div>
        </> :''
    }
   </>
  );
};

export default SingleTransaction;
