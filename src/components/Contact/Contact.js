import React, { useRef } from 'react';
import { IoMdSend } from "react-icons/io";
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "../../index.css";
import { motion } from "framer-motion";

const Link = ({ linkObj }) => {
    const { text, link } = linkObj;
    return <li className='my-5'>
        <a className='text-3xl text-primary hover:border-b-2 border-primary pb-1 ' href={link} rel='noreferrer' target={"_blank"} >
            {text}
        </a>
    </li>
}
const links = [
    { text: "github/mahfuzswaron", link: "http://github.com/mahfuzswaron" },
    { text: "linkedIn/mahfuzswaron", link: "http://linkedIn.com/in/mahfuzswaron" },
    { text: "twitter/mahfuzswaron", link: "http://twitter.com/mahfuzswaron" },
    { text: "email/mahfuzswaron", link: "mailto:mahfuzswaron@gmail.com" },
]

const Contact = () => {
    const form = useRef();
    const showToast = () => {
        toast.dark('Thanks for messaging me. I will reply soon.', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            progressClassName: "fancy-progress-bar"
        });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_77tsa48', 'template_kz0l0ds', form.current, 'dGRT_G2oWNSVKXjej')
            .then((result) => {
                if (result.text.toLowerCase() === 'ok') {
                    toast.dark('Thanks for messaging me. I will reply soon.', {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        progressClassName: "info-progress-bar"
                    });
                }
            }, (error) => {
                toast.error('Sorry, something went wrong', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            });
        e.target.reset();
    }
    return (
        <div id="contact" className='px-5 lg:px-20 py-28 w-full'>
            <h3 onClick={showToast}
                className='text-5xl first-letter:text-primary my-20 '>
                {
                    "Contact".split("").map((l, i) => <span key={l + i} className='-m-[0.4rem] hover:text-primary hover:border-b border-1 border-primary pb-1 hover:text-[3.2rem]' >{l} </span>)
                }
            </h3>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 '>
                <motion.ul
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    {
                        links.map(l => <Link key={l.text} linkObj={l} />)
                    }
                </motion.ul>

                <motion.form
                    initial={{ opacity: 0.5, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    ref={form} onSubmit={handleSubmit} className=' grid grid-cols-1 gap-3 font-sans' >
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-3'>
                        <input required type="text" name="name" id="name" placeholder='Name' className='input input-primary bg-opacity-50 py-3' />
                        <input required type="email" name="email" id="email" placeholder='Email Address' className='input input-primary bg-opacity-50 py-3' />
                    </div>
                    <textarea required name="message" id="message" placeholder='How can I assist you?' className='textarea textarea-primary bg-opacity-50 py-3 h-32' />
                    <button type="submit" className="btn btn-primary w-full">
                        < IoMdSend className="text-3xl text-textBase" />
                    </button>
                </motion.form >

            </div>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            {/* Same as */}
            <ToastContainer />
        </div>
    );
};

export default Contact;