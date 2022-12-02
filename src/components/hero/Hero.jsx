import nftHero from '../../assets/nft-hero.png';

import './Hero.scss'

export const Hero = () => {
  return (
    <section className='hero bg-deepViolet'>
      <div className=' container mx-auto h-[650px] md:h-[900px] flex flex-col items-center justify-end text-center text-white relative'>
        <div className=' font-bold font-exo2 absolute max-sm:top-24 top-32'>
          <h2 className=' text-7xl md:text-8xl uppercase drop-shadow-xl'>the</h2>
          <h1 className=' text-8xl md:text-9xl uppercase drop-shadow-xl'>event</h1>
        </div>
        <div className='w-full h-3/4 z-10 box-border md:pr-20 max-md:relative overflow-hidden'>
          <img className='max-sm:min-w-[680px] md:max-w-[960px] absolute left-2/4 -translate-x-[55%] bottom-0 ' src={nftHero} alt="" />
        </div>
      </div>
    </section>
  )
}
