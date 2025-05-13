import React from 'react'
import PodcastCard from './PodcastCard'

const Podcast = () => {
    const podcastData = [
        {
            id: 1,
            image: '/podcast-cover.jpg',
            subtitle: 'Lorem ipsum',
            title: 'Lorem ipsum dolor sitamet, consectetuer',
            description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet'
        },
        {
            id: 2,
            image: '/podcast-cover2.jpg',
            subtitle: 'Episodio 2',
            title: 'La importancia de hablar sobre ansiedad',
            description: 'Conversamos sobre cómo identificar y manejar la ansiedad en la vida diaria y qué recursos están disponibles.'
        },
        {
            id: 3,
            image: '/podcast-cover.jpg',
            subtitle: 'Episodio 2',
            title: 'La importancia de hablar sobre ansiedad',
            description: 'Conversamos sobre cómo identificar y manejar la ansiedad en la vida diaria y qué recursos están disponibles.'
        }
    ];

    return (
        <div className='bg-[#2A8892] text-white py-10 px-4' id='podcast'>
            <h2 className='font-poppins text-[50px] text-center font-bold mb-10'>Podcast</h2>
            
            <div className="flex flex-col md:flex-row gap-4">
                {podcastData.map((podcast) => (
                    <PodcastCard 
                        key={podcast.id}
                        image={podcast.image}
                        subtitle={podcast.subtitle}
                        title={podcast.title}
                        description={podcast.description}
                    />
                ))}
            </div>
        </div>
    )
}

export default Podcast
