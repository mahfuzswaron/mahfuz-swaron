import React from 'react';
import { AiOutlineFilePdf, AiOutlineHome, AiOutlineUser } from 'react-icons/ai';
import { TbTriangleSquareCircle } from "react-icons/tb";
import { HiOutlineChatAlt, HiOutlineViewGrid, } from "react-icons/hi";
import { VscMenu } from "react-icons/vsc";


const Navbar = () => {
    const navLinks = [
        { name: "home", path: "#home", icon: AiOutlineHome },
        { name: "about", path: "#about", icon: AiOutlineUser },
        { name: "skills", path: "#skills", icon: TbTriangleSquareCircle },
        { name: "projects", path: "#projects", icon: HiOutlineViewGrid },
        { name: "contact", path: "#contact", icon: HiOutlineChatAlt },
    ];
    return (
        <nav className='w-full h-10 px-5 lg:px-20 py-8 bg-base-100 bg-opacity-50 flex justify-between items-center fixed top-0 z-50 '>
            <h3 className='text-2xl text-primary '>
                <span className='text-white'> {`{ `} </span>
                Mahfuz
                <span className='text-white'> {` }`} </span>
            </h3>
            {/* for desktop */}
            {
                <ul className='hidden lg:flex gap-5 text-xs font-semibold'>
                    {
                        navLinks.map(l => (
                            <li key={l.name} >
                                <a title={l.name} href={l.path} className='flex gap-x-2 items-center text-textBase hover:text-primary'>
                                    <l.icon className={``} />
                                    <span>{l.name.toUpperCase()}</span>
                                </a>
                            </li>
                        ))
                    }
                    <li>
                        <a
                            title="download resume"
                            href={"https://drive.google.com/file/d/1DCzhN3Yik5MpzJoV1sns7XJCTy7_-INr/view?usp=sharing"}
                            target="_blank"
                            rel="noreferrer"
                            className='flex gap-x-2 items-center text-textBase hover:text-primary'
                        >
                            <AiOutlineFilePdf className="" />
                            <span> Resume </span>
                        </a>
                    </li>
                </ul>
            }


            {/* for mobile */}
            <div className="dropdown dropdown-end lg:hidden">
                <label tabIndex={0} className="cursor-pointer">
                    <VscMenu className='text-2xl text-textBase hover:text-primary' />
                </label>
                <ul tabIndex={0} className="dropdown-content grid grid-cols-1 gap-5 p-5 shadow bg-secondary bg-opacity-90 rounded-box w-52">
                    {
                        navLinks.map(l => (
                            <li key={l.name} >
                                <a title={l.name} href={l.path} className='flex gap-x-2 items-center text-textBase hover:text-primary'>
                                    <l.icon className={``} />
                                    <span>{l.name.toUpperCase()}</span>
                                </a>
                            </li>
                        ))
                    }
                    <li>
                        <a
                            title="download resume"
                            href={"https://drive.google.com/file/d/1DCzhN3Yik5MpzJoV1sns7XJCTy7_-INr/view?usp=sharing"}
                            target="_blank"
                            rel="noreferrer"
                            className='flex gap-x-2 items-center text-textBase hover:text-primary'
                        >
                            <AiOutlineFilePdf className="" />
                            <span> Resume </span>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;