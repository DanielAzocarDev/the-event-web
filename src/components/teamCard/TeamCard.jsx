

export const TeamCard = ({ image, name, jobTitle, description }) => {
  return (
    <div className='justify-self-stretch'>
      <div className=' mb-6'>
        <img className=' w-full' src={image} alt="" />
      </div>
      <div className=' text-center'>
        <h3 className=' font-exo2 font-extrabold text-4xl uppercase'>{name}</h3>
        <h4 className=' font-nunito font-bold text-cta uppercase mb-4'>{jobTitle}</h4>
        <p className=' font-nunito font-light  tracking-wide'>{description}</p>
      </div>
    </div>
  )
}
