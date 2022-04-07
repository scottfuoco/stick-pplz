import Image from 'next/image';
import { SectionContainer } from '../components/SectionContainer';
import backgroundImage from '@/public/images/faq-background.png';

const FAQ = () => (
  <SectionContainer id="faq">
    <div className="inline-block p-4 mb-4 text-white bg-gray-800 bg-opacity-50 rounded-lg">
      <h2 className="inline-block text-6xl font-black">
        FAQ
      </h2>
    </div>

    <ul>
      <li>
        <h3>Blockchain</h3>
        <p>Ethereum</p>
      </li>
      <li>
        <h3>Collection Size</h3>
        <p>10,000</p>
      </li>
      <li>
        <h3>Royalty</h3>
        <p>99%</p>
      </li>
      <li>
        <h3>OpenSea</h3>
        <p>www.opensea.com</p>
      </li>
    </ul>

    <div className="absolute inset-0 z-[-1] w-full min-h-screen overflow-hidden">
      <Image
        src={backgroundImage}
        alt="Team Background"
        priority
        layout="fill"
        objectFit="cover"
        quality={100}
      />
    </div>

  </SectionContainer>
);

export { FAQ };
