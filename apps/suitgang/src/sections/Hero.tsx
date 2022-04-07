import Image from 'next/image';
import hero from '@/public/images/hero.png';

const Hero = () => (
  <section id="hero" className="mt-[56px] w-full h-screen text-2xl relative flex items-end justify-center">

    <div className="grid justify-center align-bottom">
      <h1 className="inline-block px-4 py-2 font-bold text-center bg-gray-900 rounded-lg text-7xl bg-opacity-70 text-cyan-400">SUIT GANG</h1>
    </div>

    <div className="absolute inset-0 z-[-1] w-full min-h-screen overflow-hidden">
      <Image
        src={hero}
        alt="Hero Image"
        priority
        layout="fill"
        objectFit="cover"
        quality={100}
      />
    </div>

  </section>
);

export { Hero };
