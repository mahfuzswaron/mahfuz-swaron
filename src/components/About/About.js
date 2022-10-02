import React from 'react';
import mahfuzImg from "../../images/mahfuz-image.jpg"
import { motion } from 'framer-motion';

const About = () => {
    return (
        <div className='px-5 lg:px-20 py-28 w-full'>
            <h3 className='text-5xl first-letter:text-primary my-20 '>
                {
                    "About".split("").map((l, i) => <span key={l + i} className='hover:opacity-50 -m-[0.3rem]' >{l} </span>)
                }
            </h3>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 '>
                <motion.div
                    className='relative '
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <motion.div
                        className='border border-primary w-64 h-72 lg:w-96 lg:h-96 rounded-2xl relative lg:top-16 -top-5'
                        whileHover={{ scale: 0.9 }}
                        transition={{ duration: 0.5 }}
                    ></motion.div>
                    <motion.figure
                        className=' w-64 h-72 lg:w-96 lg:h-96 rounded-2xl absolute top-0 lg:top-24 lg:left-8 left-5 bg-white flex justify-center'
                        whileHover={{ scale: 0.9 }}
                        transition={{ duration: 0.5 }}
                    >
                        <img className='h-full w-auto rounded-2xl' src={mahfuzImg} alt="mahfuz" />
                    </motion.figure>
                </motion.div>
                <div className="" >
                    <p className='whitespace-pre-line  text-xl leading-relaxed  font-sans '>
                        {

                            `"Who am I", You ask?
                    Mahfuz Swaron, a Web developer. Coding is my language. Keyboard is my mice. Linux is my home. Code with VsCode.

                    "What do I know", you know?
                    I know React.js, JavaScript, HTML, CSS, Express.js. 
                    Familiar with Firebase, MongoDB, Heroku, and GitHub. Learning TypeScript, Node.js, and Next.js

                    "Why do I code", you ask?
                    I love to program machiene. Coding is the way for that. So, I express my thoughts in code.

                    "How can I help you", You know?
                    As a web developer I will develop excellent sites and feauters. And as a man, I will give my full effort with sincerity and honesty to take the company to the next level.
                        `
                        }
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;