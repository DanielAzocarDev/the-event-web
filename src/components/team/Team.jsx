import nft1 from '../../assets/nft1.jpeg';
import nft2 from '../../assets/nft2.jpeg';
import nft3 from '../../assets/nft3.jpeg';
import nft4 from '../../assets/nft4.jpeg';
import nft5 from '../../assets/nft5.jpeg';
import { TeamCard } from '../teamCard/teamCard';

export const Team = () => {
  return (
    <section>
      <div className=' container mx-auto pb-20 text-white'>
        <h1 className=' mb-20 font-exo2 font-extrabold text-5xl text-center uppercase'>our team</h1>
        <div className=' grid content-center justify-items-stretch gap-9 md:grid-cols-3 max-sm:px-4'>
          <TeamCard image={nft1} name='joe doe' jobTitle='co-founder' description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora nisi cumque facilis doloremque placeat laborum ipsa, dolorem vel, rerum distinctio id sint voluptatum, nulla numquam similique asperiores temporibus eligendi. Excepturi.' />
          <TeamCard image={nft1} name='joe doe' jobTitle='co-founder' description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora nisi cumque facilis doloremque placeat laborum ipsa, dolorem vel, rerum distinctio id sint voluptatum, nulla numquam similique asperiores temporibus eligendi. Excepturi.' />
          <TeamCard image={nft1} name='joe doe' jobTitle='co-founder' description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora nisi cumque facilis doloremque placeat laborum ipsa, dolorem vel, rerum distinctio id sint voluptatum, nulla numquam similique asperiores temporibus eligendi. Excepturi.' />
          <TeamCard image={nft1} name='joe doe' jobTitle='co-founder' description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora nisi cumque facilis doloremque placeat laborum ipsa, dolorem vel, rerum distinctio id sint voluptatum, nulla numquam similique asperiores temporibus eligendi. Excepturi.' />
          <TeamCard image={nft1} name='joe doe' jobTitle='co-founder' description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora nisi cumque facilis doloremque placeat laborum ipsa, dolorem vel, rerum distinctio id sint voluptatum, nulla numquam similique asperiores temporibus eligendi. Excepturi.' />
          <TeamCard image={nft1} name='joe doe' jobTitle='co-founder' description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora nisi cumque facilis doloremque placeat laborum ipsa, dolorem vel, rerum distinctio id sint voluptatum, nulla numquam similique asperiores temporibus eligendi. Excepturi.' />
        </div>
      </div>
    </section>
  )
}
