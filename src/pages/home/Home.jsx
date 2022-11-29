import React from 'react'
import { Carousel } from '../../components/carousel/Carousel'
import { Cta } from '../../components/cta/Cta'
import { Hero } from '../../components/hero/Hero'
import { Highlight } from '../../components/highlight/Highlight'
import { Navbar } from '../../components/navbar/Navbar'

export const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Highlight />
      <Cta />
      <Carousel />
    </>
  )
}