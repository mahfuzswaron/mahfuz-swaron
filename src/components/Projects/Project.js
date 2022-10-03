import React from 'react';
import { motion } from 'framer-motion';
import { BsBoxArrowUpRight, BsGithub } from "react-icons/bs";
import { TbTriangleSquareCircle } from "react-icons/tb";
import { TiTick } from "react-icons/ti";

const Project = ({ project }) => {
    const { name, thumbnails, liveLink, githubClient, description, technologies, features } = project;
    return (
        <motion.div
            initial={{ opacity: 0.5, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 0.9 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1 }}
            transition={{ duration: 1 }}
            className="card card-compact w-full bg-primary bg-opacity-30 shadow-xl"
        >
            <figure><img className='w-full ' src={thumbnails[0]} alt={name} /></figure>
            <div className="card-body">

                <div className="flex justify-between">
                    <h2 className="card-title">{name} </h2>
                    <div className="flex justify-start space-x-6">
                        <motion.a
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.5 }}
                            title="open live site"
                            href={liveLink}
                            target="_blank"
                            rel='noreferrer'
                        >
                            < BsBoxArrowUpRight className='text-xl text-textBase hover:text-primary' />
                        </motion.a>
                        <motion.a
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.5 }}
                            title="source code"
                            href={githubClient}
                            target="_blank"
                            rel='noreferrer'
                        >
                            < BsGithub className='text-xl text-textBase hover:text-primary' />
                        </motion.a>
                    </div>
                </div>
                <p>{description} </p>
                {/* <span>Technologies used: </span> */}
                <ul className='flex space-x-3 flex-wrap items-center' >
                    <li>
                        < TbTriangleSquareCircle className="text-2xl text-primary " />
                    </li>
                    {
                        technologies.map(t => <motion.li
                            key={t}
                            className="hover:text-primary"
                        >
                            {t}
                        </motion.li>)
                    }
                </ul>
                {/* <span>Features: </span> */}
                <ul className='mt-1 ' >
                    {
                        features.map(t => <motion.li
                            key={t}
                            className="hover:text-primary flex justify-start items-center space-x-3"
                        >
                            < TiTick className="text-2xl text-primary " />
                            <span>{t} </span>
                        </motion.li>)
                    }
                </ul>
            </div>
        </motion.div>
    );
};

export default Project;