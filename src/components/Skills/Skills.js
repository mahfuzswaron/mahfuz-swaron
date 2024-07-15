import React, { useState } from 'react';
import { motion } from "framer-motion";
import { skills } from "../../data";
import { ANIMATION_DURATION } from "../../utils/constants";

const Skill = ({ s }) => {
    const [show, setShow] = useState(false);
    return (
        <motion.div
            whileHover={{ scale: 1 }}
            whileTap={{ scale: 0.9 }}
            durattion={ANIMATION_DURATION}
            onMouseOver={() => setShow(true)}
            onMouseLeave={() => setShow(false)}
            onClick={() => setShow(!show)}
            className={`bg- bg-opacity-30 w-20 h-20 lg:w-28 lg:h-28 p-5 rounded-full flex justify-center items-center shadow-primary shadow-md  transition duration-500 ease-in-out`}>

            {
                show ?
                    <p className="text-xs">{s.name}</p>
                    :
                    < s.icon className='text-5xl text-primary' />
            }
        </motion.div >
    )
}

const Skills = () => {

    return (
        <section id='skills' className='px-5 lg:px-20 py-16'>
            <h3 className='text-5xl first-letter:text-primary my-20 '>
                {
                    "Skills".split("").map((l, i) => <span key={l + i} className='-m-[0.4rem] hover:text-primary hover:border-b border-1 border-primary pb-1 hover:text-[3.2rem] ' >{l} </span>)
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