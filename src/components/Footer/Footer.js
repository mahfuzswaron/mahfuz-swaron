import React from 'react';

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer className='bg-primary bg-opacity-30 py-5 mt-20'>
            <p className='text-textBase text-center ' > &copy; All right reserved by Mahfuz Swaron, {year}</p>
        </footer>
    );
};

export default Footer;