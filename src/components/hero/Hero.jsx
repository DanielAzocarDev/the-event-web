import { motion, useTransform, useScroll } from "framer-motion"
import nftHero from '../../assets/nft-hero.png';

import './Hero.scss'


export const Hero = () => {


  const { scrollYProgress } = useScroll()

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  return (
    <section className='hero bg-deepViolet overflow-hidden'>
      <div className=' container mx-auto h-[650px] md:h-[900px] flex flex-col items-center justify-end text-center text-white relative'>
        <div className=' font-bold font-exo2 absolute max-sm:top-24 top-32'>
          <motion.h2 initial={{ y: -200, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.8 }} className=' text-7xl md:text-8xl uppercase drop-shadow-xl'>the</motion.h2>
          <motion.h1 initial={{ y: -300, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 1 }} className=' text-8xl md:text-9xl uppercase drop-shadow-xl'>event</motion.h1>
        </div>
        <motion.div initial={{ y: 10000, opacity: 0, scale: 1.5 }} animate={{ y: 120, opacity: 1 }} transition={{
          delay: 1,
          duration: 1
        }} className='w-full h-3/4 z-10 box-border md:pr-20 max-md:relative overflow-hidden'>
          <img className='max-sm:min-w-[680px] md:max-w-[960px] absolute left-2/4 -translate-x-[55%] bottom-0 ' src={nftHero} alt="" />
        </motion.div>
      </div>
    </section>
  )
}
