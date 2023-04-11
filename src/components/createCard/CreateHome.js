import React from 'react';
import FullContainer from '../FullContainer';
import { Link } from 'react-router-dom';

const CreateHome = ({setBankType,setAllowToCreate}) => {
    const handelBankType = (type) => {
        setBankType(type);
        setAllowToCreate(true)
    }
    return (
        <FullContainer center_xy={true}>
            <div className="single_input d-flex align-items-center gap-2 gender">
          <Link
            onClick={() => handelBankType("bank")}
            id="bank"
            className={`primary_btn d-flex align-items-center justify-content-center m-0 gap-2 active`}
            htmlFor="bank"
          >
            <i className="fa-solid fa-building-columns text-white mt-m-6"></i><span>Bank</span>
          </Link>

          <Link
            onClick={() => handelBankType("mobile")}
            id="mobile"
            className={`primary_btn d-flex align-items-center justify-content-center m-0 gap-2 active`}
            htmlFor="mobile"
          >
            <i className="fa-solid fa-piggy-bank text-white mt-m-6"></i><span>Mobile Bank</span>
          </Link>
        </div>
        </FullContainer>
    );
}

export default CreateHome;
