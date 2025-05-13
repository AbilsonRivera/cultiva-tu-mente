'use client'
import React, { useState } from 'react'
import ContactModal from './ContactModal'

const Contacto = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <section id="contactenos" className='text-[#2A8892] mx-auto max-w-4xl w-full my-20'>
            <div className="flex flex-col md:flex-row gap-3">
                <figure className="w-full md:w-1/2 flex items-center justify-center mt-6 md:mt-0">
                    <img src="/contacto.jpg" className="max-w-full rounded-xl mx-4 h-auto" alt="Contáctanos" />
                </figure>
                <article className="w-full md:w-1/2 flex items-center">
                    <div className="w-full px-4">
                        <h2 className='font-poppins font-bold text-4xl md:text-[50px] my-4 leading-none'>Contáctanos</h2>
                        <p className="text-gray-700 mb-6">
                            ¿Tienes preguntas o quieres formar parte de nuestra comunidad? Déjanos tus datos y nos pondremos en contacto contigo pronto.
                        </p>
                        <button 
                            onClick={openModal} 
                            className='bg-[#2A8892] w-full p-3 text-white rounded-2xl my-4 font-medium hover:bg-[#1e6670] transition-colors'
                        >
                            VINCÚLATE
                        </button>
                    </div>
                </article>
            </div>

            {/* Modal de contacto */}
            <ContactModal 
                isOpen={isModalOpen} 
                onClose={closeModal} 
            />
        </section>
    )
}

export default Contacto
