import React from 'react';

const FullContainer = ({center_xy,children,...rest}) => {
    return (
        <div {...rest} className={`h-100 container ${center_xy ? 'justify-content-center flex-column d-flex' : ''}`}>
            {children}
        </div>
    );
}

export default FullContainer;
