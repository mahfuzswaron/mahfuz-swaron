import React from 'react';

const Service = ({ service }) => {
    return (
        <div className='card card-compact text-center w-72 border-2 border-transparent hover:border-primary shadow-primary shadow-md rounded-lg p-5 transition duration-500 ease-in-out'>
            <div className='flex justify-center'>
                <service.icon className='w-20 h-20 text-primary text-center' />
            </div>
            <h3 className='card-title justify-center text-center mt-5'>{service.name}</h3>
            <p className='text-xs mt-3'>{service.description}</p>
        </div>
    );
};

export default Service;