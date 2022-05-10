import React from 'react';

const PrimaryBtn = ({children}) => {
    return (
        <div>
           <button class="btn btn-primary bg-gradient-to-r from-secondary to-primary text-white uppercase font-bold">{children}</button> 
        </div>
    );
};

export default PrimaryBtn;