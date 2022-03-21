import Image from 'next/image';
import stickGuy from '@/public/images/stickguy.png';

const Header = () => (
  <header className="fixed z-20 flex items-center justify-between w-full h-20 px-8 my-4">

    <div className="flex">
      <h2>Stick Pplz</h2>
      <Image
        src={stickGuy}
        alt="Hero Image"
        height={100}
        width={100}
        priority
        placeholder="blur"
      />
    </div>

    <div className="font-bold text-yellow-700 ">
      <h4 className="text-lg">Available on OpenSea Soon!</h4>
    </div>
  </header>
);

export { Header };
