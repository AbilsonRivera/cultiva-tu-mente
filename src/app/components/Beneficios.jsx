import React from 'react'

const Beneficios = () => {
        const benefitsList = [
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam",
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam",
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam"
    ];

    return (
        <section id="beneficios" className='text-[#2A8892] mx-auto max-w-4xl w-full py-10 '>
            <div className="flex flex-wrap mx-6">
                <article className="w-full md:w-1/2 flex items-center">
                    <div>
                        <h2 className='font-poppins font-bold text-4xl md:text-[50px] my-4 leading-none'>Beneficios de ser promotor de salud mental</h2>
                        <ol className="flex flex-col gap-4 mt-6">
                            {benefitsList.map((benefit, index) => (
                                <li key={index} className="flex gap-3">
                                    <span className="font-bold text-4xl md:text-[50px]">{index + 1}.</span>
                                    <p>{benefit}</p>
                                </li>
                            ))}
                        </ol>
                    </div>
                </article>
                <figure className="w-full md:w-1/2 flex items-center justify-center mt-6 md:mt-0">
                    <img src="/mapa.png" alt="Mapa de beneficios" className="max-w-full h-auto" />
                </figure>
            </div>
        </section>
    )
}

export default Beneficios
