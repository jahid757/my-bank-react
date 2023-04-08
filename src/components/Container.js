import React from 'react';

const Container = ({children}) => {
    return (
        <div className="container h-100">
            {children}
        </div>
    );
}

export default Container;
