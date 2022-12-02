import { motion, useTransform, useScroll } from "framer-motion"
import { useMemo, useRef } from "react";

import nftHero from '../../assets/nft-hero.png';

import './Hero.scss'

function useParallax(value, distance) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

export const Hero = () => {

  const ref = useRef(null)

  const memoRef = useMemo(() => ref, [])
  const { scrollYProgress } = useScroll({ target: memoRef })

  const y = useParallax(scrollYProgress, -50)

  return (
    <section className='hero bg-deepViolet'>
      <div className=' container mx-auto h-[650px] md:h-[900px] flex flex-col items-center justify-end text-center text-white relative'>
        <div className=' font-bold font-exo2 absolute max-sm:top-24 top-32'>
          <motion.h2 initial={{ y: -200, color: '' }} animate={{ y: 0, color: '#fff' }} transition={{ delay: 0.8 }} className=' text-7xl md:text-8xl uppercase drop-shadow-xl'>the</motion.h2>
          <motion.h1 initial={{ y: -300, color: 'none' }} animate={{ y: 0, color: '#fff' }} transition={{ delay: 1 }} className=' text-8xl md:text-9xl uppercase drop-shadow-xl'>event</motion.h1>
        </div>
        <motion.div ref={ref} className='w-full h-3/4 z-10 box-border mt-6 md:pr-20 max-md:relative overflow-hidden'>
          <motion.div style={{ y, }} className='h-full absolute left-2/4 -translate-x-[55%] -bottom-4'>
            <img className='max-sm:min-w-[680px] md:max-w-[960px] absolute left-2/4 -translate-x-[55%] bottom-0 ' src={nftHero} alt="" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
