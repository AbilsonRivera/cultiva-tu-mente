import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa'

const Frases = () => {
    const frases = [
        {
            id: 1,
            text: "Cuidar tu salud mental también es una forma de amor propio."
        },
        {
            id: 2,
            text: "Está bien descansar. No tienes que ser productivo todo el tiempo para valer"
        },
        {
            id: 3,
            text: "Tu mente también necesita pausas, no solo tu cuerpo"
        },
        {
            id: 4,
            text: "Está bien, no estar bien. Sentir es parte de ser humano."
        },
        {
            id: 5,
            text: "No minimices tus emociones. Lo que sientes importa."
        },
        {
            id: 6,
            text: "Permítete sentir sin juzgarte. Tu dolor también merece compasión."
        },
        {
            id: 7,
            text: "No estás solo. Hablar es un acto de valentía."
        },
        {
            id: 8,
            text: "Pedir ayuda no es debilidad, es un acto de fortaleza."
        },
        {
            id: 9,
            text: "La salud mental es parte integral de la salud; tanto es así que no hay salud sin salud mental."
        },
        {
            id: 10,
            text: "Cuidar de tu mente es tan importante como cuidar de tu cuerpo."
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
                            <p className="text-gray-800 text-lg italic text-center flex-grow flex items-center justify-center">
                                "{frase.text}"
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
