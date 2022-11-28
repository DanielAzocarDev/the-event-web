import nftHero from '../../assets/nft-hero.png';

import './Hero.scss'

export const Hero = () => {
  return (
    <section className='hero bg-deepViolet'>
      <div className=' container mx-auto h-[900px] flex flex-col items-center justify-end text-center text-white relative'>
        <div className=' font-bold font-exo2 absolute top-32'>
          <h2 className=' text-8xl uppercase drop-shadow-xl'>the</h2>
          <h1 className=' text-9xl uppercase drop-shadow-xl'>event</h1>
        </div>
        <div className=' h-3/4 z-10 box-border pr-20'>
          <img className=' h-full' src={nftHero} alt="" />
        </div>
      </div>
    </section>
  )
}
