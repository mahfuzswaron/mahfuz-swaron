import React from 'react';
import { services } from '../../data';
import SectionHeader from '../shared/SectionHeader';
import Service from './Service';

const Services = () => {
    // const services = services
    return (
        <section id='services' className='px-5 lg:px-20 py-16 '>
            <SectionHeader title='Services' />
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10'>
                {services.map(service => <Service key={service.id} service={service} />)}
            </div>
        </section>
    );
};

export default Services;