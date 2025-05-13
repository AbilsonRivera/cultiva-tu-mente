import React from 'react'
import Card from './Card'

const Fundadores = () => {
    const foundersData = [
        {
            id: 1,
            image: '/fundador1.png',
            name: 'Ana María Cortés',
            welcomeText: 'Bienvenidos',
            description: 'Psicóloga con especialidad en salud mental comunitaria. Fundadora del proyecto Cultiva Tu Mente con más de 10 años de experiencia en el trabajo con comunidades vulnerables.',
            socialHandle: '@anamaria.cortes'
        },
        {
            id: 2,
            image: '/fundador2.png',
            name: 'Carlos Mendoza',
            welcomeText: 'Conoce nuestro trabajo',
            description: 'Trabajador social especializado en intervención familiar. Cofundador del proyecto y coordinador de las iniciativas de educación en salud mental para adolescentes.',
            socialHandle: '@carlos.mendoza'
        },
    ];
    
    return (
        <div className="py-10 px-4" id='fundadores'>
            <h1 className="text-3xl font-Poppins font-bold text-center mb-8 text-[#2A8892]">Fundadores del podcast</h1>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                {foundersData.map((founder) => (
                    <Card 
                        key={founder.id}
                        image={founder.image}
                        name={founder.name}
                        welcomeText={founder.welcomeText}
                        description={founder.description}
                        socialHandle={founder.socialHandle}
                    />
                ))}
            </div>
        </div>
    )
}

export default Fundadores
