import React from 'react'

export const Cta = () => {
  return (
    <section className='bg-cta'>
      <div className='container mx-auto py-20 text-center text-white uppercase'>
        <h2 className=' text-7xl font-extrabold font-exo2'>Lorem ipsum dolor sit amet.</h2>
        <p className=' w-3/4 mx-auto my-9 leading-6  text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>

        <button className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-125 duration-300 py-5 px-12 rounded-3xl bg-deepPurple hover:bg-indigo-800 font-exo2 font-bold text-3xl uppercase'>get yours</button>
      </div>
    </section>
  )
}
