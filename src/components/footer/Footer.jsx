import logo from '../../assets/logo.png'

import { SiDiscord, SiTwitter, SiInstagram } from 'react-icons/si'

export const Footer = () => {
  return (
    <footer className=' md:h-[400px] text-white'>
      <div className="container mx-auto h-full md:flex pt-24">
        <div className=' md:w-1/3 lg:w-1/2 flex items-center justify-center max-md:pb-8'>
          <div className='w-2/4 md:w-2/3 lg:w-2/4'>
            <img src={logo} alt="" />
          </div>
        </div>
        <div className='md:w-2/3 lg:w-1/2 flex flex-col justify-between pb-3'>
          <div className='md:flex justify-between max-md:pb-8'>
            <div className=' grid justify-items-center'>
              <h4 className=' font-exo2 font-bold text-4xl md:text-3xl lg:text-4xl uppercase pb-5'>twitter</h4>
              <SiTwitter className=' text-6xl' />
            </div>
            <div className=' grid justify-items-center'>
              <h4 className=' font-exo2 font-bold text-4xl md:text-3xl lg:text-4xl uppercase pb-5'>discord</h4>
              <SiDiscord className=' text-6xl' />
            </div>
            <div className=' grid justify-items-center'>
              <h4 className=' font-exo2 font-bold text-4xl md:text-3xl lg:text-4xl uppercase pb-5'>instagram</h4>
              <SiInstagram className=' text-6xl' />
            </div>
          </div>
          <div className='max-md:text-center'>
            <h3 className=' font-exo2 font-extrabold text-3xl uppercase'>Terminos y condiciones</h3>
            <p className=' font-nunito '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
