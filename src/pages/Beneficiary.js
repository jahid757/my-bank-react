import React, { useState } from 'react';
import Header from '../components/header/Header';
import AuthFooter from '../components/footer/AuthFooter';
import FullContainer from '../components/FullContainer';
import BeneficiaryHead from '../components/beneficiary/BeneficiaryHead';
import SingleBeneficiaryMFS from '../components/beneficiary/singleBeneficiaryMFS';

const Beneficiary = () => {
    const [beneficiary,setBeneficiary] = useState('bank')
    return (
        <>
        <Header/>
            <FullContainer center_xy={false}>
                <BeneficiaryHead beneficiary={beneficiary} setBeneficiary={setBeneficiary}/>
                {/* <div className="pay_card"> */}
                {/* { */}
                    <SingleBeneficiaryMFS/>
                    <SingleBeneficiaryMFS/>
                    <SingleBeneficiaryMFS/>
                    <SingleBeneficiaryMFS/>
                {/* } */}
                {/* </div> */}
            </FullContainer>
        <AuthFooter footerActive={'dashboard'}/>
        </>
    );
}

export default Beneficiary;
