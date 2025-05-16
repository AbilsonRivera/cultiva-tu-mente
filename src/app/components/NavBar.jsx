'use client'
import React, { useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { FaWheelchair } from "react-icons/fa6";
import Link from 'next/link';

function NavBar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="w-full  sticky top-0 z-50">

            {/* Main Navbar */}
            <nav className="bg-white px-12 py-1 sm:px-12 md:px-12 md:py-0 shadow-md">
                <div className="mx-auto flex justify-between items-center">
                    <div className="flex items-center">
                        <Link href={'#'}>
                            <img src="./logo.svg" className="object-scale-down w-24 sm:w-32 h-12 my-2" alt="Alcaldía de Neiva" />
                        </Link>
                    </div>

                    {/* Hamburger Menu */}
                    <button
                        aria-label='hamburgerMenu'
                        className=" text-[#2A8892] font-bold focus:outline-none w-full justify-end flex md:hidden"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        <GiHamburgerMenu />
                    </button>

                    {/* Menu */}
                    <ul
                        className={`${menuOpen ? 'hidden' : 'hidden'} md:flex gap-2 md:gap-8 text-center items-center md:text-sm lg:text-base absolute md:static font-semibold text-[#2A8892] bg-white w-full md:w-auto top-full left-0 md:top-auto md:left-auto md:bg-transparent shadow md:shadow-none`}
                    >
                        <Link href={'/'} passHref>
                            <li className="py-2 px-4 md:px-2 hover:text-gray-500 lg:py-0">Inicio</li>
                        </Link>
                        <Link href={'#fundadores'} passHref>
                            <li className="py-2 px-4 md:px-2 hover:text-gray-500 lg:py-0">Fundadores</li>
                        </Link>
                        <Link href={'#podcast'} passHref>
                            <li className="py-2 px-4 md:px-2 hover:text-gray-500 lg:py-0">Podcast</li>
                        </Link>
                        <Link href={'#beneficios'} passHref>
                            <li className="py-2 px-4 md:px-2 hover:text-gray-500 lg:py-0">Beneficios</li>
                        </Link>
                        <Link href={'#contactenos'} passHref>
                            <li className="py-2 px-4 md:px-2 hover:text-gray-500 lg:py-0">Contáctanos</li>
                        </Link>
                    </ul>




                </div>                {/* Menu Responsive */}                {menuOpen && (
                    <div className="flex flex-col md:hidden text-white text-center rounded-sm pb-2 px-6 md:px-0 md:w-1/6 absolute  right-5 bg-[#2A8892]">
                        <ul>
                            <Link href={'#fundadores'} passHref onClick={() => setMenuOpen(false)}>
                                <li className="py-2  hover:scale-105">Fundadores</li>
                            </Link>
                            <Link href={'#podcast'} passHref onClick={() => setMenuOpen(false)}>
                                <li className="py-2  hover:scale-105">Podcast</li>
                            </Link>
                            <Link href={'#beneficios'} passHref onClick={() => setMenuOpen(false)}>
                                <li className="py-2  hover:scale-105">Beneficios</li>
                            </Link>
                            <Link href={'#contactenos'} passHref onClick={() => setMenuOpen(false)}>
                                <li className="py-2  hover:scale-105">Contáctanos</li>
                            </Link>
                        </ul>
                    </div>
                )}
            </nav>
        </header>
    );
}

export default NavBar;


