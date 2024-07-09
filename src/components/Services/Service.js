import React from 'react';

const Service = ({ service }) => {
    return (
        <div className='card card-compact w-full bg-primary bg-opacity-30 shadow-xl rounded-lg p-5'>
            <img src={service.image} alt={service.name} className='w-full h-40 object-contain rounded-lg' />
            <h3 className='card-title  mt-5'>{service.name}</h3>
            <p className='text-xs mt-3'>{service.description}</p>
        </div>
    );
};

export default Service;