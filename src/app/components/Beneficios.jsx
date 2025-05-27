import React from 'react'
import { motion } from 'framer-motion'
import MapaHuila from './mapaHuila'

const Beneficios = () => {
  const benefitsList = [
    "Descuentos exclusivos con nuestros profesionales en el campo de la psicología y psiquiatría para iniciar procesos de atención.",
    "Talleres gratuitos sobre inteligencia emocional y habilidades blandas para una mejor calidad de vida.",
    "Tips sobre cómo tratar momentos de crisis de ansiedad, estrés y depresión con nuestra línea exclusiva de WhatsApp para promotores.",
    "Material didáctico para replicar información sobre salud mental con redes familiares y amigos que requieran apoyo.",
    "Ser parte de una gran red de apoyo para romper barreras sobre la salud mental en el Huila."
  ];

  return (
    <section aria-labelledby="benefits-heading" className="text-[#2A8892] mx-auto max-w-7xl w-full py-10"id='beneficios'>
      <div className="flex flex-wrap mx-6">
        <article className="w-full md:w-1/2 flex items-center">
          <div>
            <h2 id="benefits-heading" className='font-poppins font-bold text-4xl md:text-[50px] my-4 leading-none'>
              Beneficios de ser promotor de salud mental
            </h2>
            <ol className="flex flex-col gap-4 mt-6">
              {benefitsList.map((benefit, index) => (
                <motion.li
                  key={index}
                  className="flex gap-3"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                >
                  <span className="font-bold text-2xl md:text-[50px]">{index + 1}.</span>
                  <p>{benefit}</p>
                </motion.li>
              ))}
            </ol>
          </div>
        </article>
        <figure className="w-full md:w-1/2 flex items-center justify-center mt-6 md:mt-0">
          <MapaHuila />
        </figure>

      </div>
      
    </section>
  )
}

export default Beneficios
