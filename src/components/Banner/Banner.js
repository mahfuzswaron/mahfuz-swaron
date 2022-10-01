import React, { useEffect, useState } from 'react';
import codingImg from "../../images/Code-typing-trans.gif"
const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const [index, setIndex] = useState(1);
    const toRotate = ["Web Developer."];
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
            setDelta(500);
        } else {
            setIndex(prevIndex => prevIndex + 1);
        }
    }

    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 justify-between items-center px-5 lg:px-20 pb-20 pt-36 '>
            <div className=''>
                <p className='text-[5rem] leading-none font-light'>Hello,</p>
                <h1 className='text-[5rem] leading-none font-light'>
                    I'm
                    <span className='text-primary font-medium'> Mahfuz </span>
                    Swaron
                </h1>
                <h3 className='text-[5rem] leading-none  text-primary '>{text}</h3>
            </div>
            <div className='flex justify-center items-center'>
                <img src={codingImg} alt='coding' />
            </div>
        </div>
    );
};

export default Banner;