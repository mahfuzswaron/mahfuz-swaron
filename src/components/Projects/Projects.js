import React from 'react';
import Project from './Project';
import { projects } from "../../data"
import { motion } from 'framer-motion';
const Projects = () => {
    return (
        <section id='projects' className='px-5 lg:px-20 py-36 '>
            <h3 className='text-5xl first-letter:text-primary my-20 '>
                {
                    "Projects".split("").map((l, i) => <motion.span
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                        key={l + i}
                        className=' -m-[0.3rem] hover:text-primary hover:border-b border-1 border-primary pb-3 hover:text-[3.2rem]' >{l} </motion.span>)
                }
            </h3>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
                {
                    projects.map(p => <Project key={p.id} project={p} />)
                }
            </div>
        </section>
    );
};

export default Projects;