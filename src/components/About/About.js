import React from 'react';
import mahfuzImg from "../../images/about-me/mahfuz-outline.jpg"
import { motion } from 'framer-motion';
import { aboutQnAs } from '../../data';
import { ANIMATION_DURATION } from '../../utils/constants';
import SectionHeader from '../shared/SectionHeader';

const About = () => {
    return (
        <div id="about" className='px-5 lg:px-20 py-16 w-full'>
            <SectionHeader title='About' />
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 place-items-center'>
                <AboutImage />
                <div className="" >
                    <p className='whitespace-pre-line leading-relaxed font-sans '>
                        {
                            aboutQnAs.map((qna, i) => <AboutQnA key={i} qna={qna} />)
                        }
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;


const AboutQnA = ({ qna }) => {
    const { question, subQuestion, answer } = qna;

    return <div className='my-4'>
        <span className='text-xl font-semibold block'>
            <span className='text-primary'>{question}</span>
            <span>, </span>
            <span>{subQuestion}</span>
            <span>?</span>
        </span>
        <span className='text-sm opacity-80'>
            {answer}
        </span>
    </div>
}

const AboutImage = () => {
    return (
        <motion.div
            className='relative '
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: ANIMATION_DURATION }}
        >
            <motion.div
                className='bg-primary opacity-5 border border-primary w-64 h-72 lg:w-96 lg:h-96 rounded-2xl relative -top-5 lg:top-0'
                whileHover={{ scale: 0.9 }}
                transition={{ duration: ANIMATION_DURATION }}
            ></motion.div>
            <motion.figure
                className='aspect-[4/3] overflow-clip w-64 h-72 lg:w-96 lg:h-96 rounded-2xl absolute top-0 lg:top-10 lg:left-10 left-5 flex justify-center'
                whileHover={{ scale: 0.9 }}
                transition={{ duration: ANIMATION_DURATION }}
            >
                <img className='w-full h-auto object-cover rounded-2xl border border-primary' src={mahfuzImg} alt="mahfuz" />
            </motion.figure>
        </motion.div>
    )
}