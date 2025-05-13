"use client"
import React from 'react'
import Hero from './components/Hero'
import Fundadores from './components/Fundadores'
import Podcast from './components/Podcast'
import Beneficios from './components/Beneficios'
import Frases from './components/Frases'
import Contacto from './components/Contacto'
import Footer from './components/Footer'

const page = () => {
  return (
    <div>
      <Hero/>
      <Fundadores/>
      <Podcast/>
      <Beneficios/>
      <Frases/>
      <Contacto/>
      <Footer/>
    </div>
  )
}

export default page
