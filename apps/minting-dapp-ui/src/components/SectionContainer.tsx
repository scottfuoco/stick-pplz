import React from 'react';

type Props = {
  children: React.ReactNode;
  className: string;
}

const SectionContainer = ({ children, className }: Props) => (
  <section className={`flex flex-col items-center text-blue-500 justify-center w-full min-h-screen gap-8 p-8 ${className}`}>
    {children}
  </section>
);

export { SectionContainer };
