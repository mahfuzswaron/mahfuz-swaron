import React from 'react';
import Project from './Project';
import { projects } from "../../data"
import SectionHeader from '../shared/SectionHeader';
const Projects = () => {
    return (
        <section id='projects' className='px-5 lg:px-20 py-16 '>
            <SectionHeader title='Projects' />
            <div className='flex gap-10 lg:gap-20 flex-wrap sm:justify-center lg:justify-start'>
                {
                    projects.map(p => <Project key={p.id} project={p} />)
                }
            </div>
        </section>
    );
};

export default Projects;
