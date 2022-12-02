import logo from '../../assets/logo.png'

import { SiDiscord, SiTwitter, SiInstagram } from 'react-icons/si'

export const Footer = () => {
  return (
    <footer className=' h-[400px] text-white'>
      <div className="container mx-auto h-full flex pt-24">
        <div className='md:w-1/2 flex items-center justify-center '>
          <div className=' w-2/4'>
            <img src={logo} alt="" />
          </div>
        </div>
        <div className='md:w-1/2 flex flex-col justify-between pb-3'>
          <div className='flex justify-between'>
            <div className=' grid justify-items-center'>
              <h4 className=' font-exo2 font-bold text-4xl uppercase pb-5'>twitter</h4>
              <SiTwitter className=' text-6xl' />
            </div>
            <div className=' grid justify-items-center'>
              <h4 className=' font-exo2 font-bold text-4xl uppercase pb-5'>discrod</h4>
              <SiDiscord className=' text-6xl' />
            </div>
            <div className=' grid justify-items-center'>
              <h4 className=' font-exo2 font-bold text-4xl uppercase pb-5'>instagram</h4>
              <SiInstagram className=' text-6xl' />
            </div>
          </div>
          <div>
            <h3 className=' font-exo2 font-extrabold text-3xl uppercase'>Terminos y condiciones</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
