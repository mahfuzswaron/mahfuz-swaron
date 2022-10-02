import React, { useState } from 'react';
import { motion } from "framer-motion";
import { skills } from "../../data";

const Skill = ({ s }) => {
    const [show, setShow] = useState(false);
    return (
        <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onMouseOver={() => setShow(true)}
            onMouseLeave={() => setShow(false)}
            onClick={() => setShow(!show)}
            className={`bg-primary bg-opacity-30 w-20 h-20 lg:w-28 lg:h-28 p-5 rounded-full flex justify-center items-center `}>

            {
                show ?
                    <motion.p
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className='text-xs' >{s.name}</motion.p>
                    : <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        < s.icon className='text-5xl' />
                    </motion.div>
            }
        </motion.div >
    )
}

const Skills = () => {

    return (
        <section id='skills' className='px-5 lg:px-20 py-28'>
            <h3 className='text-5xl first-letter:text-primary my-20 '>
                {
                    "Skills".split("").map((l, i) => <span key={l + i} className='hover:opacity-50 -m-[0.3rem]' >{l} </span>)
                }
            </h3>
            <div className='flex flex-wrap justify-center gap-10 my-10'>
                {
                    skills.map(s => <Skill key={s.name} s={s} />)
                }
            </div>
        </section>
    );
};



export default Skills;