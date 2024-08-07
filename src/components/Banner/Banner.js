import React, { useEffect, useState } from 'react';
import codingImg from "../../images/Code-typing-trans.gif";
import { motion } from 'framer-motion';
import { ANIMATION_DURATION } from "../../utils/constants";

const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const [index, setIndex] = useState(1);
    // const toRotate = ["Web Development", "Migrating to Next.js"];
    const toRotate = ["Web Development", "Migrating to Next.js", "Debugging Application", "Email Signature", "Email Template"];
    const period = 500;
    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => { clearInterval(ticker) };
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setIndex(prevIndex => prevIndex - 1);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setIndex(1);
            setDelta(100);
        } else {
            setIndex(prevIndex => prevIndex + 1);
        }
    }

    return (
        <div id='home' className='grid grid-cols-1 md:grid-cols-2 px-5 lg:px-20 pb-20 pt-20 lg:pt-36 '>
            <div className='flex flex-col gap-y-5 h-[350px] justify-center self-center'>
                <Headline text={text} />

                <div className='flex space-x-5'>
                    <a
                        className='btn btn-primary btn-md w-48'
                        href={"https://calendar.app.google/STztv6tyE4eZ7Txy9"}
                        target="_blank"
                        rel="noreferrer"
                    > Let's discuss </a>
                    <a
                        className='btn btn-outline btn-md w-36 '
                        href={"https://drive.google.com/file/d/1DCzhN3Yik5MpzJoV1sns7XJCTy7_-INr/view?usp=sharing"}
                        target="_blank"
                        rel="noreferrer"
                    > resume </a>
                </div>
            </div>
            <div className='flex md:flex-end xl:justify-center'>
                <motion.img
                    className='w-80 xl:w-96'
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: ANIMATION_DURATION }}
                    src={codingImg}
                    alt='coding' />
            </div>
        </div>
    );
};

export default Banner;

const Headline = ({ text }) => {
    return (
        <div className='leading-tight'>
            <p className='text-[2rem] md:text-[1.8rem] font-light'>Hello, </p>
            <h1 className='text-[2.5rem] md:text-[2rem] font-light'>
                <span>I'm</span>
                <span className='text-primary font-medium'> Mahfuz </span>
                <span>Swaron</span>
            </h1>
            <h2 className='text-[2rem] md:text-[1.8rem] font-light'>
                <span>I can help </span>
                <span className='text-primary'>you </span>
                <span>in</span>
            </h2>
            <h3 className='text-[2.5rem] md:text-[2rem]  font-medium  text-primary '>
                <span>{text} </span>
                <span className='font-thin'>|</span>
            </h3>
        </div>
    )
}