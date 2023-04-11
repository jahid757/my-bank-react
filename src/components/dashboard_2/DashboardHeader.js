import React from "react";
import { kali } from "../../assets/images/images";
import { Link } from "react-router-dom";

const DashboardHeader = () => {
  return (
    <>
      <div className="dashboard_head d-flex align-items-center no_scroll mb-3 justify-content-between">
        <Link to="/" className="ds_item card">
          <img src={kali} alt="kali" />
          <h5 className="text-dark">1 Pis</h5>
          <p className="text-dark">Note Book</p>
        </Link>

        <Link to="/" className="ds_item card">
          <img src={kali} alt="kali" />
          <h5 className="text-dark">1 Pis</h5>
          <p className="text-dark">Note Book</p>
        </Link>

        <Link to="/" className="ds_item card">
          <img src={kali} alt="kali" />
          <h5 className="text-dark">1 Pis</h5>
          <p className="text-dark">Note Book</p>
        </Link>
      </div>
    </>
  );
};

export default DashboardHeader;
