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

const DashboardFooter = () => {
  return (
    <div className="ds_body img-40 mb-3">
      <div className="d-flex flex-wrap gap-2 justify-content-between">
        {ds_body_data.map((item) => {
          return (
            <Link to={item.route} key={item.id} className="w-48 card gap-2 p-0 flex-row mb-2 d-flex align-items-center">
              <div className="image">
                <img src={item.image} alt={item.title} />
              </div>
              <div className="bg-white">
                <h5 className="text-dark">{item.title}</h5>
                <p className="text-dark">{item.description}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default DashboardFooter;
