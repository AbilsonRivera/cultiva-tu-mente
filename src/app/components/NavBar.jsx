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
                        className=" text-[#2A8892] font-bold focus:outline-none w-full justify-end flex"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        <GiHamburgerMenu />
                    </button>



                </div>                {/* Menu Responsive */}                {menuOpen && (
                    <div className="flex flex-col text-white text-center rounded-sm pb-2 px-6 md:px-0 md:w-1/6 absolute  right-5 bg-[#2A8892]">
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