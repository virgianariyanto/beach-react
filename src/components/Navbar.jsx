import React from "react";
import { MdPerson } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { MdMenu } from "react-icons/md";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleNav = () => {
        setNav(!nav)
    }

    return (
        <nav className="navbar flex justify-between items-center h-20 text-white absolute z-10 w-full">
            <div>
                <h1 className="font-bold md:px-16 px-4 text-2xl">LITTORAL.</h1>
            </div>
            <ul className="nav-links hidden md:flex space-x-4">
                <li><a className="font-bold" href="#home">Home</a></li>
                <li><a className="font-bold" href="#about">About</a></li>
                <li><a className="font-bold" href="#services">Services</a></li>
                <li><a className="font-bold" href="#contact">Contact</a></li>
            </ul>
            <div className="icons px-16 space-x-3 hidden md:flex">
                <MdPerson className="cursor-pointer" size={20}/>
                <FaSearch className="cursor-pointer" size={16}/>
            </div>
            <div onClick={handleNav} className="menu-icon md:hidden px-4">
                {nav ? <AiOutlineClose className="cursor-pointer" size={24}/> : <MdMenu className="cursor-pointer" size={24} />}
            </div>
            <div onClick={handleNav} className={`z-50 md:hidden absolute top-20 left-0 w-full transform transition-all duration-300 ease-in-out ${nav ? "translate-y-0 opacity-100" : "-translate-y-5 opacity-0 pointer-events-none"}`}>
                {/* <ul className="nav-links md:hidden flex flex-col space-y-2 absolute left-0 bg-white w-full p-4 shadow-lg">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul> */}

                <ul className="flex flex-col">
                    {["Home", "About", "Services", "Contact"].map((item, index) => (
                        <li key={index}>
                            <a
                                href={`#${item.toLowerCase()}`}
                                className="block px-4 py-4 text-white font-medium hover:text-blue-600 transition-colors duration-200"
                            >
                                {item}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;