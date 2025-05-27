import React from 'react'
import Card from './Card'

const Fundadores = () => {
    const foundersData = [
        {
            id: 1,
            image: '/LEYDY_ZAPATA_SIN_FONDO.png',
            name: 'Leydy Zapata',
            welcomeText: 'Conoce más',
            description: 'Psicóloga, Mg en Salud Mental Comunitaria de la Universidad El Bosque. Mg en Neuropsicología con experiencia clínica con niños, niñas y adolescentes con discapacidad, trabajo comunitario con población vulnerable y en salud pública.',
            socialHandle: '@vanezalo05',
            socialLink: 'https://instagram.com/vanezalo05'
        },
        {
            id: 2,
            image: '/YAMID_SANABRIA_FOTO_SIN FONDO.png',
            name: 'Yamid Sanabria',
            welcomeText: 'Conoce más',
            description: 'Politólogo, especialista, exconcejal de Neiva, Fundador de la Organización Jóvenes Adelante, creador de la política pública de salud mental de Neiva.',
            socialHandle: '@CultivaTuMente',
            socialLink: 'https://youtu.be/l1dfL_WIuWE?si=2GLXMCUNFV651hm4'
        },
        {
            id: 3,
            image: '/IMG_7088-sin fondo.png',
            name: 'Nathaly Salas',
            welcomeText: 'Conoce más',
            description: 'Psicóloga, magíster en salud mental comunitaria y feminista. Con experiencia en coordinación de programas de salud mental para Instituciones Prestadoras de Salud (IPS) y en psicoterapia individual, familiar y grupal desde un enfoque humanista y de género.',
            socialHandle: '@nathsalasc',
            socialLink: 'https://www.instagram.com/nathsalasc?igsh=MXE1MTRjMjR5OGYxdw=='
        },
    ];
    
    return (
        <div className="py-10 px-4" id='fundadores'>
            <h1 className="text-3xl font-Poppins font-bold text-center mb-8 text-[#2A8892]">Fundadores del podcast</h1>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-8">                {foundersData.map((founder) => (
                    <Card 
                        key={founder.id}
                        id={founder.id}
                        image={founder.image}
                        name={founder.name}
                        welcomeText={founder.welcomeText}
                        description={founder.description}
                        socialHandle={founder.socialHandle}
                        socialLink={founder.socialLink}
                    />
                ))}
            </div>
        </div>
    )
}

export default Fundadores
