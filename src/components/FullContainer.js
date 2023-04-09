import React from 'react';

const FullContainer = ({children}) => {
    return (
        <div className="h-100 justify-content-center flex-column d-flex container">
            {children}
        </div>
    );
}

export default FullContainer;
