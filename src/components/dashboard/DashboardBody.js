import React from "react";
import { bd_flag } from "../../assets/images/images";
import { Link } from "react-router-dom";
const ds_body_data = [
  {
    id: 1,
    title: "Rule",
    description: "Details rule",
    image: bd_flag,
    route: "/",
  },
  {
    id: 2,
    title: "Rule",
    description: "Details rule",
    image: bd_flag,
    route: "/",
  },
  {
    id: 3,
    title: "Rule",
    description: "Details rule",
    image: bd_flag,
    route: "/",
  },
  {
    id: 4,
    title: "Rule",
    description: "Details rule",
    image: bd_flag,
    route: "/",
  },
];
const ds_body_data_3 = [
  {
    id: 1,
    title: "Rule",
    description: "Bank Accounts",
    image: bd_flag,
    route: "/account",
  },
  {
    id: 2,
    title: "Rule",
    description: "MFS ",
    image: bd_flag,
    route: "/mobile-banking",
  },
  {
    id: 3,
    title: "Rule",
    description: "Credit Card",
    image: bd_flag,
    route: "/card",
  }
];
const ds_body_data_4 = [
  {
    id: 1,
    title: "Rule",
    description: "Bank Accounts",
    image: bd_flag,
    route: "/income/account",
  },
  {
    id: 2,
    title: "Rule",
    description: "MFS ",
    image: bd_flag,
    route: "/income/mobile-banking",
  },
  {
    id: 3,
    title: "Rule",
    description: "Wallet",
    image: bd_flag,
    route: "/income/card",
  }
];

const ds_body_data_2 = [
    {
      id: 1,
      title: "Rule",
      description: "Details rule",
      image: bd_flag,
      route: "/",
    },
    {
      id: 2,
      title: "Rule",
      description: "Details rule",
      image: bd_flag,
      route: "/",
    },
    {
      id: 3,
      title: "Rule",
      description: "Details rule",
      image: bd_flag,
      route: "/",
    },
    {
      id: 4,
      title: "Rule",
      description: "Details rule",
      image: bd_flag,
      route: "/",
    },
    {
      id: 5,
      title: "Rule",
      description: "Details rule",
      image: bd_flag,
      route: "/",
    },
    {
      id:6,
      title: "Rule",
      description: "Details rule",
      image: bd_flag,
      route: "/",
    },
  ];
  
const ds_body_data_beneficiary = [
  {
    id: 1,
    title: "Rule",
    description: "Bank Beneficiary",
    image: bd_flag,
    route: "/beneficiary",
  },
  {
    id: 2,
    title: "Rule",
    description: "MFS Beneficiary",
    image: bd_flag,
    route: "/beneficiary",
  }
];

const DashboardBody = () => {
  return (
    <>
       

        <div className="ds_body img-40 mb-3">
      <h4 className="mb-1">My Accounts</h4>
      <div className="d-flex flex-wrap flex-row card justify-content-between">
        {ds_body_data_3.map((item) => {
          return (
            <Link
              to={item.route}
              key={item.id}
              className="border-end no-border-last w-30 gap-2 p-0 flex-column d-flex align-items-center"
            >
              <img src={item.image} alt={item.title} />
              <p className="text-dark">{item.description}</p>
            </Link>
          );
        })}
      </div>
    </div>

        <div className="ds_body img-40 mb-3">
      <h4 className="mb-1">Income</h4>
      <div className="d-flex flex-wrap flex-row card justify-content-between">
        {ds_body_data_4.map((item) => {
          return (
            <Link
              to={item.route}
              key={item.id}
              className="border-end no-border-last w-30 gap-2 p-0 flex-column d-flex align-items-center"
            >
              <img src={item.image} alt={item.title} />
              <p className="text-dark">{item.description}</p>
            </Link>
          );
        })}
      </div>
    </div>
    <div className="ds_body img-40 mb-3">
      <h4 className="mb-1">Beneficiary</h4>
      <div className="d-flex flex-wrap flex-row card justify-content-between">
        {ds_body_data_beneficiary.map((item) => {
          return (
            <Link
              to={item.route}
              key={item.id}
              className="w-50 gap-2 p-0 flex-column d-flex align-items-center border-end no-border-last"
            >
              <img src={item.image} alt={item.title} />
              <p className="text-dark">{item.description}</p>
            </Link>
          );
        })}
      </div>
    </div>

 <div className="ds_body img-40 mb-3">
      <h4 className="mb-1">Bank</h4>
      <div className="d-flex flex-wrap flex-row card justify-content-between">
        {ds_body_data.map((item) => {
          return (
            <Link
              to={item.route}
              key={item.id}
              className="w-25 gap-2 p-0 flex-column d-flex align-items-center"
            >
              <img src={item.image} alt={item.title} />
              <p className="text-dark">{item.description}</p>
            </Link>
          );
        })}
      </div>
    </div>



    <div className="ds_body img-40 mb-3">
      <h4 className="mb-1">Bank</h4>
      <div className="d-flex flex-wrap flex-row card justify-content-center">
        {ds_body_data_2.map((item) => {
          return (
            <Link
              to={item.route}
              key={item.id}
              className="w-30 gap-2 p-0 flex-column d-flex align-items-center border-end-bottom"
            >
              <div className="p-2">
                <img src={item.image} alt={item.title} />
                <p className="text-dark">{item.description}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
    </>
  );
};

export default DashboardBody;
