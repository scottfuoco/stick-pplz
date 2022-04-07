import Image from 'next/image';
import { useState } from 'react';
import cn from 'classnames';
import { SectionContainer } from '../components/SectionContainer';
import backgroundImage from '@/public/images/faq-background.png';

import data from '@/data/strategy.tsx';

const Strategy = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { title, slides } = data;

  const nextSlide = () => {
    setCurrentSlide((current) => (current + 1) % slides.length);
  };

  const prevSlide = () => {
    if (currentSlide - 1 >= 0) {
      setCurrentSlide((current) => current - 1);
    } else {
      setCurrentSlide(() => slides.length - 1);
    }
  };
  return (
    <SectionContainer id="strategy" className="overflow-hidden">
      <div className="inline-block p-4 mb-4 text-white bg-gray-800 bg-opacity-50 rounded-lg">
        <h2 className="inline-block text-6xl font-black">
          {title}
        </h2>
      </div>
      <div className="grid grid-cols-2 min-h-[300px]">
        <ul className="relative">
          {slides.map((slide, i) => {
            const isActive = i === currentSlide;

            return (
              <li key={slide.slideTitle} className={cn({ 'strategy-left-side-in': true, active: isActive })}>
                <h3 className="text-3xl bold">{slide.slideTitle}</h3>
                <p>{slide.description}</p>
              </li>
            );
          })}
        </ul>

        <div className="relative">
          {slides.map((slide, i) => {
            const isActive = i === currentSlide;

            return (
              <div key={slide.slideTitle} className={cn({ 'strategy-right-side-in': true, active: isActive })}>
                <Image
                  src={slide.image}
                  alt="Team Background"
                  priority
                  height={300}
                  objectFit="contain"
                  quality={100}
                />
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex gap-4">
        <button className="p-2 rounded-md bg-slate-400 hover:bg-slate-500" type="button" onClick={prevSlide}>Prev</button>
        <button className="p-2 rounded-md bg-slate-400 hover:bg-slate-500" type="button" onClick={nextSlide}>Next</button>
      </div>

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
};

export { Strategy };
