import React from 'react';
import { motion } from 'framer-motion';
import { BsBoxArrowUpRight, BsGithub } from "react-icons/bs";
import { ANIMATION_DURATION } from '../../utils/constants';


const Project = ({ project }) => {
    const { name, thumbnails, liveLink, githubClient, description, technologies, features } = project;
    return (
        <div
            className="card card-compact w-full sm:max-w-[80vw] md:w-80 lg:w-96 border-2 border-transparent hover:border-primary shadow-primary shadow-md rounded-lg p-5 transition duration-500 ease-in-out"
        >
            {/* aspect-video overflow-hidden max-h-fit */}
            <div
                className='aspect-[4/3] h-full w-full'
            >
                {
                    thumbnails.map(t =>
                        <img className='h-full w-full' src={t} alt="thumbnail" />
                    )
                }
            </div>

            <div className="card-body">
                <div className="flex justify-between">
                    <h2 className="card-title">{name}</h2>
                    <div className="flex justify-start space-x-6">
                        <motion.a
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: ANIMATION_DURATION }}
                            title="open live site"
                            href={liveLink}
                            target="_blank"
                            rel='noreferrer'
                        >
                            < BsBoxArrowUpRight className='text-xl text-textBase hover:text-primary' />
                        </motion.a>
                        <motion.a
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: ANIMATION_DURATION }}
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
            </div>
        </div>
    );
};

export default Project;