import React from 'react';

import { Footer } from '@/src/sections/Footer';
import { MintNav } from '../sections/MintNav';

const Home = () => (
  <>
    <MintNav />

    <main className="grid min-h-screen place-items-center bg-cyan-300">
      <h2 className="text-5xl  bold">
        MINT PAGE COMING SOON!
      </h2>
    </main>

    <Footer />
  </>
);

export default Home;
