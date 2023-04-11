import React from 'react';
import { bd_flag } from '../../assets/images/images';
import { Link } from 'react-router-dom';

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
    {
      id: 5,
      title: "Rule",
      description: "Details rule",
      image: bd_flag,
      route: "/",
    },
    {
      id: 6,
      title: "Rule",
      description: "Details rule",
      image: bd_flag,
      route: "/",
    },
  ];

  
const DashboardHeader = () => {
    return (
        <div className="ds_body img-20 mb-3">
        <h4 className='mb-1'>Bank</h4>
      <div className="d-flex flex-wrap gap-1 justify-content-between">
        {ds_body_data.map((item) => {
          return (
            <Link to={item.route} key={item.id} className="w-30 card gap-2 p-0 flex-row mb-2 d-flex align-items-center">
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
}

export default DashboardHeader;
