import React from 'react';
import Project from './Project';
import { projects } from "../../data"

const Projects = () => {
    return (
        <section id='projects' className='px-5 lg:px-20 pb-20 pt-36 '>
            <h3 className='text-5xl first-letter:text-primary my-20 '>
                {
                    "Projects".split("").map((l, i) => <span key={l + i} className='hover:opacity-50 -m-[0.3rem]' >{l} </span>)
                }
            </h3>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-16'>
                {
                    projects.map(p => <Project key={p.id} project={p} />)
                }
            </div>
        </section>
    );
};

export default Projects;