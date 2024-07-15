import React from 'react';
import { motion } from 'framer-motion';
import { BsBoxArrowUpRight, BsGithub } from "react-icons/bs";
import { ANIMATION_DURATION } from '../../utils/constants';


const Project = ({ project }) => {
    const { name, thumbnails, liveLink, githubClient, description, technologies, features } = project;
    return (
        <motion.div
            initial={{ opacity: 0.5, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 0.9 }}
            whileHover={{ scale: 0.8 }}
            viewport={{ once: true }}
            transition={{ duration: ANIMATION_DURATION }}
            className="card w-full h-full bg-primary bg-opacity-30 shadow-xl"
        >
            {/* aspect-video overflow-hidden max-h-fit */}
            <div
                className='aspect-[4/3] h-full w-full border border-primary'
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
        </motion.div>
    );
};

export default Project;