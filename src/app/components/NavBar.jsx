'use client'
import React, { useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { FaWheelchair } from "react-icons/fa6";
import Link from 'next/link';

function NavBar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="w-full p-4">

            {/* Main Navbar */}
            <nav className="bg-white  px-12 py-1 sm:px-12 md:px-12 md:py-0 ">
                <div className="mx-auto flex justify-between items-center">
                    <div className="flex items-center">
                        <Link href={'#'}>
                            <img src="./logo.svg" className="object-scale-down w-24 sm:w-32 h-12" alt="Alcaldía de Neiva" />
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



                </div>                {/* Menu Responsive */}
                {menuOpen && (
                    <div className="flex flex-col text-white text-center rounded-sm pb-2 w-1/6 absolute right-16 bg-[#2A8892]">
                        <ul>
                            <Link href={'/'} passHref>
                                <li className="py-2  hover:scale-105">Fundadores</li>
                            </Link>
                            <Link href={'/requestEscenary'} passHref>
                                <li className="py-2  hover:scale-105">Podcast</li>
                            </Link>
                            <Link href={'/'} passHref>
                                <li className="py-2  hover:scale-105">Beneficios</li>
                            </Link>
                            <Link href={'/news'} passHref>
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