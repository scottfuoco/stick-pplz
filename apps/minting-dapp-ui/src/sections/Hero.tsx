import Countdown from 'react-countdown';
import CustomCountdown from '@/components/Countdown';
import { Web3ModalButton } from '../components/Web3ModalButton';
import styles from './Hero.module.scss';
import { ContractData } from '../components/ContractData';

const date = new Date(2022, 2, 20);

const Hero = () => (
  <section className={`${styles['gradient-background']} flex flex-col gap-5 items-center justify-center w-full min-h-screen text-2xl`}>
    <h2 className="mb-4 leading-normal text-center text-8xl">
      Stick Ppl stick together!
    </h2>
    <h3 className="text-4xl">Join the club</h3>
    <Web3ModalButton />

    <Countdown date={date} renderer={CustomCountdown} />
    <ContractData />

  </section>
);

export { Hero };
