import React from 'react';

import { Header } from '@/src/sections/Header';
import { AboutUs } from '@/src/sections/AboutUs';
import { Footer } from '@/src/sections/Footer';
import { Hero } from '@/src/sections/Hero';
import { RoadMap } from '@/src/sections/RoadMap';

const Home = () => (
  <>
    <Header />

    <main className="flex flex-col min-h-screen">
      <Hero />
      <AboutUs />
      <RoadMap />
    </main>

    <Footer />
  </>
);

export default Home;
