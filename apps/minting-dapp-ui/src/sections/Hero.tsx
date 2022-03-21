import { useEthers } from '@usedapp/core';
import { Web3ModalButton } from '../components/Web3ModalButton';
import styles from './Hero.module.scss';

const Hero = () => {
  const { account } = useEthers();
  return (
    <section className={`${styles['gradient-background']} flex flex-col gap-5 items-center justify-center w-full min-h-screen text-2xl`}>
      <h2 className="mb-4 leading-normal text-center text-8xl">
        Stick Ppl stick together!
      </h2>
      <h3 className="text-4xl">Join the club</h3>
      <Web3ModalButton />

    </section>
  );
};

export { Hero };
