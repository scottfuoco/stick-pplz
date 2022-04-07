import React from 'react';

import { Nav } from '@/src/sections/Nav';
import { Team } from '@/src/sections/Team';
import { Footer } from '@/src/sections/Footer';
import { Hero } from '@/src/sections/Hero';
import { RoadMap } from '@/src/sections/RoadMap';
import { FAQ } from '@/src/sections/FAQ';
import { SectionDivider } from '../components/SectionDivider';
import { Strategy } from '../sections/Strategy';

const Home = () => (
  <>
    <Nav />

    <main className="flex flex-col min-h-screen">
      <Hero />
      <SectionDivider />
      <Team />
      <SectionDivider />
      <Strategy />
      <SectionDivider />
      <RoadMap />
      <SectionDivider />
      <FAQ />
    </main>

    <Footer />
  </>
);

export default Home;
