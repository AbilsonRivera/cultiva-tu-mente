"use client"
import { useState } from 'react';
import ContactModal from './ContactModal';

const Hero = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };
    
    return (
        <div
            id='home'
            className='h-[70vh] relative'>
            {/* Fondo con overlay */}
            <div className='absolute inset-0 bg-[url(/hero.png)] bg-cover bg-center bg-no-repeat'>
                <div className='absolute inset-0 bg-black/40'></div>
            </div>
            {/* Contenido */}
            <div className='relative h-full flex flex-col gap-4 justify-center items-center text-white'>
                <p className='font-Poppins font-semibold text-shadow-lg mx-6 text-6xl'>Todos podemos hablar de salud mental</p>
                <button
                    onClick={openModal}
                    className='bg-[#2A8892] px-5 py-3 text-white text-lg font-medium rounded-xl hover:bg-[#1e6670] transition-colors shadow-md'
                >
                    VINCÚLATE
                </button>
            </div>

            {/* Modal de contacto */}
            <ContactModal 
                isOpen={isModalOpen} 
                onClose={closeModal} 
            />
        </div>
    )
}

export default Hero
