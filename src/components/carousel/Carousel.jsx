import nft1 from '../../assets/nft1.jpeg';
import nft2 from '../../assets/nft2.jpeg';
import nft3 from '../../assets/nft3.jpeg';
import nft4 from '../../assets/nft4.jpeg';
import nft5 from '../../assets/nft5.jpeg';

import './Carousel.scss'

export const Carousel = () => {
  return (
    <section className=' w-full py-24 relative'>
      <h2 className='carousel__title font-exo2 font-extrabold text-[150px] text-center text-white uppercase absolute'>150 models</h2>
      <div className='slider'>
        <div className='slider__track-a'>
          <div className='slider__item'>
            <img src={nft1} alt="" />
          </div>
          <div className='slider__item'>
            <img src={nft2} alt="" />
          </div>
          <div className='slider__item'>
            <img src={nft3} alt="" />
          </div>
          <div className='slider__item'>
            <img src={nft4} alt="" />
          </div>
          <div className='slider__item'>
            <img src={nft5} alt="" />
          </div>
          <div className='slider__item'>
            <img src={nft1} alt="" />
          </div>
          <div className='slider__item'>
            <img src={nft2} alt="" />
          </div>
          <div className='slider__item'>
            <img src={nft3} alt="" />
          </div>
          <div className='slider__item'>
            <img src={nft4} alt="" />
          </div>
          <div className='slider__item'>
            <img src={nft5} alt="" />
          </div>
        </div>
        <div className='slider__track-b'>
          <div className='slider__item'>
            <img src={nft1} alt="" />
          </div>
          <div className='slider__item'>
            <img src={nft2} alt="" />
          </div>
          <div className='slider__item'>
            <img src={nft3} alt="" />
          </div>
          <div className='slider__item'>
            <img src={nft4} alt="" />
          </div>
          <div className='slider__item'>
            <img src={nft5} alt="" />
          </div>
          <div className='slider__item'>
            <img src={nft1} alt="" />
          </div>
          <div className='slider__item'>
            <img src={nft2} alt="" />
          </div>
          <div className='slider__item'>
            <img src={nft3} alt="" />
          </div>
          <div className='slider__item'>
            <img src={nft4} alt="" />
          </div>
          <div className='slider__item'>
            <img src={nft5} alt="" />
          </div>
        </div>
      </div>
      <div></div>
    </section>
  )
}
