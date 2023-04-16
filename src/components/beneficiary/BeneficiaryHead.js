import React from 'react';

const BeneficiaryHead = ({beneficiary,setBeneficiary}) => {
    
    return (
        <div className='d-flex align-items-center justify-content-between gap-2 btn-no-color mb-3'>
            <button onClick={()=> setBeneficiary('bank')} className={`primary_btn ${beneficiary === 'bank' ? 'active':''}`}>Bank Beneficiary</button>
            <button onClick={()=> setBeneficiary('mfs')} className={`primary_btn ${beneficiary === 'mfs' ? 'active':''}`}>MFS Beneficiary</button>
        </div>
    );
}

export default BeneficiaryHead;
