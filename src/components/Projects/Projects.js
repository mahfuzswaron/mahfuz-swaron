import React from 'react';
import Project from './Project';
import { projects } from "../../data"
import { motion } from 'framer-motion';
import SectionHeader from '../shared/SectionHeader';
const Projects = () => {
    return (
        <section id='projects' className='px-5 lg:px-20 py-16 '>
            <SectionHeader title='Projects' />
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-10'>
                {
                    projects.map(p => <Project key={p.id} project={p} />)
                }
            </div>
        </section>
    );
};

export default Projects;
