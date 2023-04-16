import React from 'react';
import Header from '../components/header/Header';
import FullContainer from '../components/FullContainer';
import { bkash, logo } from '../assets/images/images';
import AuthFooter from '../components/footer/AuthFooter';
import TermsFooter from '../components/terms/TermsFooter';

const Terms = () => {
    return (
        <>
            <Header/>
            <FullContainer center_xy={true}>
                <div className="text-center mb-3">
                    <img style={{width:'60px'}} src={bkash} alt="" />
                    <h4 className="title my-2 heading_text">title here</h4>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate delectus nostrum pariatur enim doloremque ex aliquid, quasi consequuntur hic fugiat dolorem aperiam nemo veritatis dicta architecto recusandae officia voluptatibus doloribus.</p>
                </div>
                <TermsFooter/>
            </FullContainer>
            <AuthFooter/>
        </>
    );
}

export default Terms;
