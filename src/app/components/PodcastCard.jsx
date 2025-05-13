import React from 'react';
import { FaPlay } from 'react-icons/fa';

const PodcastCard = ({ image, title, subtitle, description }) => {
    return (
        <div className="rounded-3xl overflow-hidden max-w-sm mx-auto">
            {/* Imagen con botón de reproducción */}
            <div className="relative">
                <img 
                    src={image} 
                    alt={title} 
                    className="w-full h-48 object-cover rounded-t-3xl"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                    <button 
                        className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg"
                        aria-label="Reproducir podcast"
                    >
                        <FaPlay className="text-[#2A8892] ml-1" />
                    </button>
                </div>
            </div>

            {/* Contenido de texto */}
            <div className="p-6 text-white bg-[#2A8892]">
                <span className="text-xl">{subtitle}</span>
                <h3 className="text-4xl font-bold mb-4">{title}</h3>
                <p className="text-lg">{description}</p>
            </div>
        </div>
    );
};

export default PodcastCard;
