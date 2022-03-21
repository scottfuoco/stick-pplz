import Image from 'next/image';
import stickPplzGif from '@/public/images/stickpplz.gif';
import { SectionContainer } from '@/components/SectionContainer';
import styles from './AboutUs.module.scss';

const DividerTop = () => <div className={`${styles['top-divider-background']}`} />;
const DividerBottom = () => <div className={`${styles['bottom-divider-background']}`} />;

const AboutUs = () => (
  <SectionContainer className="relative bg-slate-600">
    <DividerTop />
    <span className="overflow-hidden border-4 border-blue-500 rounded-lg h-[400px] w-[400px] relative">
      <Image
        src={stickPplzGif}
        alt="Hero Image"
        layout="fill"
        objectFit="cover"
        priority
      />
    </span>

    <h2 className="text-center">
      100 Unique NFTs, made just for fun!
    </h2>

    <p className="text-xl text-center">
      This project is grateful for all the resources available from Hashlips and Hashlips Labs.
      <br />
      To show appreciation 5% of any sales will go directly to the Hashlips wallet.
      <br />
    </p>
    <DividerBottom />
  </SectionContainer>
);

export { AboutUs };
