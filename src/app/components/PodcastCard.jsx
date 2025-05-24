import React, { useState, useRef, useEffect } from 'react';
import { FaPlay } from 'react-icons/fa';

const PodcastCard = ({ videoUrl, thumbnailUrl, title, subtitle, description }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [hasOverflow, setHasOverflow] = useState(false);
    const descriptionRef = useRef(null);

    useEffect(() => {
        const checkOverflow = () => {
            if (descriptionRef.current) {
                // Reset expanded state to measure true height
                descriptionRef.current.classList.remove('line-clamp-3');
                const fullHeight = descriptionRef.current.scrollHeight;
                descriptionRef.current.classList.add('line-clamp-3');
                const clampedHeight = descriptionRef.current.clientHeight;
                
                setHasOverflow(fullHeight > clampedHeight);
            }
        };

        checkOverflow();
        window.addEventListener('resize', checkOverflow);
        return () => window.removeEventListener('resize', checkOverflow);
    }, [description]);

    const handleClick = () => {
        window.open(videoUrl, '_blank');
    };

    const toggleDescription = (e) => {
        e.stopPropagation();
        setIsExpanded(!isExpanded);
    };

    return (
        <div className="rounded-3xl overflow-hidden w-full mx-auto">
            {/* Miniatura de YouTube con botón de reproducción */}
            <div className="relative cursor-pointer group" onClick={handleClick}>
                <img 
                    src={thumbnailUrl}
                    alt={title} 
                    className="w-full h-52 md:h-48 object-cover rounded-t-3xl transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/20 transition-colors">
                    <button 
                        className="w-14 h-14 md:w-16 md:h-16 bg-white rounded-full flex items-center justify-center shadow-lg transform transition-transform group-hover:scale-110"
                        aria-label="Ver video en YouTube"
                    >
                        <FaPlay className="text-[#2A8892] ml-1" />
                    </button>
                </div>
            </div>
            {/* Contenido de texto */}
            <div className={`p-4 md:p-6 text-white bg-[#2A8892] ${isExpanded ? 'min-h-[200px] md:min-h-[250px]' : 'h-[200px] md:h-[250px]'} flex flex-col transition-all duration-300`}>
                <div className={`${isExpanded ? '' : 'mb-auto'}`}>
                    <span className="text-base md:text-xl block mb-1">{subtitle}</span>
                    <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-3 line-clamp-2">{title}</h3>
                </div>
                <div className="relative">
                    <p 
                        ref={descriptionRef}
                        className={`text-sm md:text-base leading-tight md:leading-normal ${isExpanded ? '' : 'line-clamp-3'}`}
                    >
                        {description}
                    </p>
                    {(hasOverflow || isExpanded) && (
                        <button 
                            onClick={toggleDescription}
                            className="text-xs md:text-sm text-white/80 hover:text-white mt-2 focus:outline-none underline block"
                        >
                            {isExpanded ? 'Ver menos' : 'Ver más'}
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default PodcastCard;
