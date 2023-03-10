import React from 'react'
import { Carousel } from '../../components/carousel/Carousel'
import { Cta } from '../../components/cta/Cta'
import { Faq } from '../../components/faq/Faq'
import { Footer } from '../../components/footer/Footer'
import { Hero } from '../../components/hero/Hero'
import { Highlight } from '../../components/highlight/Highlight'
import { Navbar } from '../../components/navbar/Navbar'
import { Team } from '../../components/team/Team'

export const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Highlight />
      <Cta />
      <Carousel />
      <Team />
      <Faq />
      <Footer />
    </>
  )
}
