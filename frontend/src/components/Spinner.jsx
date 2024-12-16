import React from 'react';

const colorVariants = {
    'primary': 'border-primary',
    'black': 'border-gray-900',
    'warning': 'border-red-500',
}

const Spinner = ({color = 'primary'}) => {
    const colorVariant = colorVariants[color] || colorVariants.primary;

    return (
        <div className="w-full h-full flex justify-center items-center">
            <span className={`w-8 h-8 border-2 rounded-full border-b-transparent animate-spin ${colorVariant}`}></span>
        </div>
    );
};

export default Spinner;