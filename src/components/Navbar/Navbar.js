import React from 'react';
import { IoMenu } from "react-icons/io5";
const Navbar = () => {
    const navLinks = [
        { name: "home", path: "#", },
        { name: "skills", path: "#skills" },
        { name: "about", path: "#about", },
        { name: "projects", path: "#projects", },
        { name: "contact", path: "#contact", },
    ]
    return (
        <nav className='w-full h-10 px-5 lg:px-20 py-8 bg-base-100 bg-opacity-50 flex justify-between items-center fixed top-0  '>
            <h3 className='text-2xl text-primary '>Mahfuz</h3>
            <div className="dropdown dropdown-end">
                <label tabIndex={0} className="cursor-pointer">
                    <IoMenu className='text-2xl text-textBase' />
                </label>
                <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                    {
                        navLinks.map(l => (
                            <li>
                                <a
                                    className='uppercase'
                                    href={l.path}> {l.name}</a>
                            </li>
                        ))
                    }
                    <li>
                        <a
                            className='uppercase'
                            href={"https://drive.google.com/file/d/1DCzhN3Yik5MpzJoV1sns7XJCTy7_-INr/view?usp=sharing"}
                            target="_blank"
                            rel="noreferrer"
                        >
                            resume
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;