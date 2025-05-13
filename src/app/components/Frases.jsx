import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa'

const Frases = () => {
    const frases = [
        {
            id: 1,
            text: "La salud mental es fundamental para nuestro bienestar general y nuestra capacidad de disfrutar de la vida.",
            author: "OMS"
        },
        {
            id: 2,
            text: "El primer paso para buscar ayuda es reconocer que la necesitas.",
            author: "Anónimo"
        },
        {
            id: 3,
            text: "No hay salud sin salud mental.",
            author: "Organización Mundial de la Salud"
        },
        {
            id: 4,
            text: "Tu valor no disminuye por la batalla que estás enfrentando.",
            author: "Anónimo"
        },
        {
            id: 5,
            text: "Hablar de tus sentimientos no es una señal de debilidad; es parte de tu camino hacia la recuperación.",
            author: "Psicólogo John Grohol"
        },
        {
            id: 6,
            text: "La salud mental no es un destino, sino un proceso. Se trata del cómo llegas, no de a dónde llegas.",
            author: "Noam Shpancer"
        },
        {
            id: 7,
            text: "Mereces un espacio para ser escuchado.",
            author: "Anónimo"
        },
        {
            id: 8,
            text: "Tu historia puede ser el capítulo que cambie la vida de alguien más.",
            author: "Anónimo"
        },
        {
            id: 9,
            text: "La salud mental es parte integral de la salud; tanto es así que no hay salud sin salud mental.",
            author: "Dr. Brock Chisholm"
        },
        {
            id: 10,
            text: "Cuidar de tu mente es tan importante como cuidar de tu cuerpo.",
            author: "Anónimo"
        }
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <section className='bg-[#2A8892] py-12 px-14'>
            <h2 className='font-poppins text-4xl font-bold text-white text-center mb-10'>Frases Inspiradoras</h2>
            
            <Slider {...settings} className="frases-slider">
                {frases.map((frase) => (
                    <div key={frase.id} className="px-2">
                        <div className="bg-white rounded-3xl p-6 h-72 flex flex-col">
                            <div className="text-[#2A8892] mb-4 flex gap-2">
                                <FaQuoteLeft size={30} />
                                <FaQuoteRight size={30} />
                            </div>
                            <p className="text-gray-800 flex-grow text-lg italic">
                                "{frase.text}"
                            </p>
                            <p className="text-[#2A8892] font-bold text-right mt-4">
                                - {frase.author}
                            </p>
                        </div>
                    </div>
                ))}
            </Slider>
            
            <style jsx global>{`
                .frases-slider .slick-dots li button:before {
                    color: white;
                    opacity: 0.5;
                }
                .frases-slider .slick-dots li.slick-active button:before {
                    color: white;
                    opacity: 1;
                }
                .frases-slider .slick-prev:before, 
                .frases-slider .slick-next:before {
                    color: white;
                    font-size: 24px;
                }
            `}</style>
        </section>
    )
}

export default Frases
