import React from 'react';

const Spinner = () => {
    return (
        <div className="w-full h-full flex justify-center items-center">
            <span className="w-8 h-8 border-2 border-primary rounded-full border-b-transparent animate-spin"></span>
        </div>
    );
};

export default Spinner;