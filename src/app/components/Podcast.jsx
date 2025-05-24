import React from 'react';
import PodcastCard from './PodcastCard';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Podcast = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: true,
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: true,
                }
            }
        ]
    };

    const podcastData = [
        {
            id: 1,
            videoUrl: 'https://youtu.be/8OaxsWnD17k?si=qoVL8zyuQ0-nMcYd',
            thumbnailUrl: 'https://img.youtube.com/vi/8OaxsWnD17k/maxresdefault.jpg',
            subtitle: 'Episodio 1',
            title: 'Cuando los miedos nos invaden',
            description: '¿Ansiedad? No estás solo. En este episodio de Cultiva tu mente, hablamos sobre cómo identificarla, manejarla y cuándo buscar ayuda. ¡Acompáñanos!'
        },
        {
            id: 2,
            videoUrl: 'https://youtu.be/Nde4eRiSriY?si=KEDfTzf145ZEkZ_I',
            thumbnailUrl: 'https://i.ytimg.com/vi/Nde4eRiSriY/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDAPdeho6GH88EUszsaFQk2aluY-A',
            subtitle: 'Episodio 2',
            title: '¿Cómo superar una pérdida?',
            description: 'Perder a alguien puede romperte por dentro. Carlos lo vivió y cayó en lo más profundo… pero logró levantarse. Su historia no solo duele, también inspira. Mira el video, tal vez encuentres las palabras que necesitas hoy.'
        },
        {
            id: 3,
            videoUrl: 'https://youtu.be/buxqME8rIa0?si=2Lejk8EfqBFyRTPR',
            thumbnailUrl: 'https://i.ytimg.com/vi/buxqME8rIa0/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCV4gy8_TOUQ8uz896tAQbpDJCR4A',
            subtitle: 'Episodio 3',
            title: 'Una guerra con el cuerpo',
            description: '¿Hasta dónde llegarías por encajar? Ana solo quería sentirse aceptada… pero terminó hospitalizada. Esta historia no es sobre belleza, es sobre supervivencia. Dale play al episodio y descúbrelo.'
        },
        {
            id: 4,
            videoUrl: 'https://www.youtube.com/watch?v=2utF27gUbG4',
            thumbnailUrl: 'https://i.ytimg.com/vi/2utF27gUbG4/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDuwScbhxXFuF5lSbwlFUpiEFlK6Q',
            subtitle: 'Episodio 4',
            title: 'GHOSTING',
            description: '¿Te han hecho ghosting?  En este episodio de Cultiva tu mente, Natalie y Yamit cuentan una historia real y cómo afecta la salud mental. ¡Dale play y acompáñanos! '
        },
        {
            id: 5,
            videoUrl: 'https://www.youtube.com/watch?v=i6g0u5a13eA&t=3s',
            thumbnailUrl: 'https://i.ytimg.com/vi/i6g0u5a13eA/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCl36z_gLapwZwYZl33vuMhhpcLCw',
            subtitle: 'Episodio 5',
            title: 'Sin trabajo a los 50',
            description: 'En este episodio de Cultiva tu mente, exploramos la historia de Pedro, un hombre que enfrenta los retos de la vejez tras perder su trabajo. Acompáñanos a reflexionar sobre el valor, los cambios y la importancia de construir un propósito en esta etapa de la vida.'
        },
        {
            id: 6,
            videoUrl: 'https://www.youtube.com/watch?v=4z8h_UnxvIM&t=6s',
            thumbnailUrl: 'https://i.ytimg.com/vi/4z8h_UnxvIM/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLChTuGhFQFA_0MLQM7d7fjrskz1Kg',
            subtitle: 'Episodio 6',
            title: 'Salud Mental Escolar',
            description: 'La salud mental en las escuelas es fundamental, pero la violencia sigue afectando a estudiantes y docentes. En este video de Cultiva tu Mente exploramos cómo capacitar a los profesores para ofrecer apoyo emocional con un enfoque restaurativo, usando el arte y la cultura como herramientas para sanar y prevenir conflictos.'
        },
        {
            id: 7,
            videoUrl: 'https://www.youtube.com/watch?v=l1dfL_WIuWE',
            thumbnailUrl: 'https://i.ytimg.com/vi/l1dfL_WIuWE/hqdefault.jpg?sqp=-oaymwEmCOADEOgC8quKqQMa8AEB-AHOBYACgAqKAgwIABABGGUgZShlMA8=&rs=AOn4CLBE9XJFcbi8ZIyGYBcM5rqBefJRtw',
            subtitle: 'Episodio 7',
            title: 'Cuando aparecen los síntomas',
            description: 'En Cultiva a tu mente hablamos de salud mental. Hoy, con el doctor Jesús Mendiola, exploramos cómo la ansiedad puede causar síntomas físicos como insomnio y gastritis, y la importancia de buscar ayuda profesional.'
        }
    ];

    return (
        <div className='bg-[#2A8892] text-white py-10 px-4' id='podcast'>
            <h2 className='font-poppins text-[50px] text-center font-bold mb-10'>Podcast</h2>
            <div className="max-w-7xl mx-auto md:px-4">
                <Slider {...settings} className="podcast-slider">
                    {podcastData.map((podcast) => (
                        <div key={podcast.id} className="px-0 md:px-2">
                            <PodcastCard
                                videoUrl={podcast.videoUrl}
                                thumbnailUrl={podcast.thumbnailUrl}
                                subtitle={podcast.subtitle}
                                title={podcast.title}
                                description={podcast.description}
                            />
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default Podcast;
