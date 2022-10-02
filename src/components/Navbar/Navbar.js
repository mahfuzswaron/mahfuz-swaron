import React, { useEffect, useState } from 'react';
import { AiOutlineFilePdf, AiOutlineHome, AiOutlineUser } from 'react-icons/ai';
import { IoMenu } from "react-icons/io5";
import { TbTriangleSquareCircle } from "react-icons/tb";
import { HiOutlineChatAlt, HiOutlineViewGrid, } from "react-icons/hi";
import { FaTh } from "react-icons/fa";


const Navbar = () => {
    const navLinks = [
        { name: "home", path: "#", icon: AiOutlineHome },
        { name: "about", path: "#about", icon: AiOutlineUser },
        { name: "skills", path: "#skills", icon: TbTriangleSquareCircle },
        { name: "projects", path: "#projects", icon: HiOutlineViewGrid },
        { name: "contact", path: "#contact", icon: HiOutlineChatAlt },
    ];
    return (
        <nav className='w-full h-10 px-5 lg:px-20 py-8 bg-base-100 bg-opacity-50 flex justify-between items-center fixed top-0 z-50 '>
            <h3 className='text-2xl text-primary '>Mahfuz</h3>
            <div className="dropdown dropdown-end">
                <label tabIndex={0} className="cursor-pointer">
                    <FaTh className='text-2xl text-textBase hover:text-primary' />
                </label>
                <ul tabIndex={0} className="dropdown-content grid grid-cols-3 gap-5 p-5 shadow bg-base-100 bg-opacity-50 rounded-box w-52">
                    {
                        navLinks.map(l => (
                            <li>
                                <a
                                    title={l.name}
                                    className='uppercase'
                                    href={l.path}>
                                    <l.icon className={
                                        `
                                        text-3xl text-textBase hover:text-primary 
                                        `
                                    } />  </a>
                            </li>
                        ))
                    }
                    <li>
                        <a
                            title="download resume"
                            className='uppercase '
                            href={"https://drive.google.com/file/d/1DCzhN3Yik5MpzJoV1sns7XJCTy7_-INr/view?usp=sharing"}
                            target="_blank"
                            rel="noreferrer"
                        >

                            <AiOutlineFilePdf className="text-3xl text-textBase hover:text-primary" />
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;