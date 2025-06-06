import { FaInstagram, FaYoutube } from "react-icons/fa";
import React, { useState } from 'react';
import { FaHandFist } from "react-icons/fa6";

const Card = ({ image, name, welcomeText, description, socialHandle, socialLink }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleCard = () => {
        setIsExpanded(!isExpanded);
    };

    const isYoutubeLink = socialLink?.includes('youtu');

    return (
        <div className="border border-[#2A8892] rounded-3xl max-w-lg w-full md:w-1/2 lg:w-1/4 overflow-hidden transition-all duration-300 relative">
            <div className="py-6 px-4 flex flex-col items-center">
                {/* Ícono de liderazgo en la esquina superior */}
                <div className="absolute top-7 right-7 text-xl text-[#2A8892]">
                    <div className="flex flex-col items-center">
                        <FaHandFist />
                        <span className="text-xs font-medium">Liderazgo</span>
                    </div>
                </div>                <div className="relative">
                    {/* Imagen de perfil con fondo circular */}
                    <div className="w-56 h-56 bg-[#2A8892] rounded-full flex items-center justify-center relative">
                        <img
                            src={image}
                            alt={name}
                            className="w-52 h-52 object-contain absolute bottom-0"
                        />
                    </div>
                </div>

                {/* Nombre y texto de bienvenida */}
                <div className="flex gap-3">
                    <section>
                    <h2 className="text-center text-2xl font-bold mt-4">{name}</h2>
                    <p className="text-center text-[#2A8892] text-lg">{welcomeText}</p>
                    </section>
                    {/* Botón para expandir/contraer */}
                    <button
                        onClick={toggleCard}
                        className="mt-4 w-12 h-12 bg-[#2A8892] text-white rounded-full flex items-center justify-center transition-transform duration-300"
                        style={{ transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)' }}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                    </button>

                    
                </div>
                {/* Contenido expandible */}
                    {isExpanded && (
                        <div className="mt-4 animate-fadeIn">                            {socialHandle && (
                                <a 
                                    href={socialLink} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="flex gap-2 items-center mb-2 hover:opacity-80 transition-opacity"
                                >
                                    <div className="p-1 bg-black rounded-full">
                                        {isYoutubeLink ? (
                                            <FaYoutube className="text-white bg-black" />
                                        ) : (
                                            <FaInstagram className="text-white bg-black" />
                                        )}
                                    </div>
                                    <span className="inline-flex items-center hover:underline">
                                        {socialHandle}
                                    </span>
                                </a>
                            )}
                            <p className="text-sm leading-relaxed mt-2">{description}</p>
                        </div>
                    )}

            </div>
        </div>
    );
};

export default Card;
