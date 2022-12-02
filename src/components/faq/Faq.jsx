import { IoAdd } from 'react-icons/io5'

export const Faq = () => {
  return (
    <section className=" bg-deepViolet text-white pt-56 pb-28">
      <div className="container mx-auto flex">
        <div className=" w-1/2">
          <h2 className=" font-exo2 font-extrabold text-9xl mb-9">F.A.Q.</h2>
          <p className="w-2/3 font-nunito uppercase">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
        <div className="w-1/2">
          <div className='w-full mb-16'>
            <div className=' w-11/12 flex items-center justify-between font-exo2 font-extrabold text-3xl mb-6'>
              <h4>Lorem ipsum dolor sit amet?</h4>
              <IoAdd />
            </div>

            <hr />
          </div>
          <div className='w-full mb-16'>
            <div className=' w-11/12 flex items-center justify-between font-exo2 font-extrabold text-3xl mb-6'>
              <h4>Lorem ipsum dolor sit amet?</h4>
              <IoAdd />
            </div>

            <hr />
          </div>
          <div className='w-full mb-16'>
            <div className=' w-11/12 flex items-center justify-between font-exo2 font-extrabold text-3xl mb-6'>
              <h4>Lorem ipsum dolor sit amet?</h4>
              <IoAdd />
            </div>

            <hr />
          </div>
          <div className='w-full mb-16'>
            <div className=' w-11/12 flex items-center justify-between font-exo2 font-extrabold text-3xl mb-6'>
              <h4>Lorem ipsum dolor sit amet?</h4>
              <IoAdd />
            </div>

            <hr />
          </div>
        </div>
      </div>
    </section>
  )
}
