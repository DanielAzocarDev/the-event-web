
import metamask from '../../assets/metamask-icon.svg'

export const Navbar = () => {
  return (
    <nav className=" w-full  h-[70px] text-lg fixed top-0 left-0 right-0  backdrop-blur-lg z-20">
      <div className=" container mx-auto h-full flex justify-between items-center">
        <h2 className=" font-exo2 font-bold text-2xl uppercase  text-gray-200 hover:text-cta cursor-pointer">The Event</h2>
        <div className='flex gap-3 text-cta hover:text-gray-200 cursor-pointer'>
          <p className=" font-nunito font-thin uppercase">be the event</p>
          <img className=' w-6' src={metamask} alt="" />
        </div>
      </div>
    </nav>
  )
}
