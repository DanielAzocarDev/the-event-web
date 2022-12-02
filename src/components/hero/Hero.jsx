import nftHero from '../../assets/nft-hero.png';

import './Hero.scss'

export const Hero = () => {
  return (
    <section className='hero bg-deepViolet'>
      <div className=' container mx-auto h-[650px] md:h-[900px] flex flex-col items-center justify-end text-center text-white relative'>
        <div className=' font-bold font-exo2 absolute top-32'>
          <h2 className=' text-7xl md:text-8xl uppercase drop-shadow-xl'>the</h2>
          <h1 className=' text-8xl md:text-9xl uppercase drop-shadow-xl'>event</h1>
        </div>
        <div className='w-full h-[675px] flex items-stretch z-10 box-border max-md:relative'>
          <img className='max-sm:min-w-[600px] max-sm:-right-16 w-full  max-md:absolute max-md:bottom-0' src={nftHero} alt="" />
        </div>
      </div>
    </section>
  )
}
