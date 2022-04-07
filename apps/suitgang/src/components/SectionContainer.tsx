import React from 'react';

type Props = {
  children: React.ReactNode;
  className?: string;
  id: string;
}

const SectionContainer = ({
  id, children, className,
}: Props) => (
  <section id={id} className={`w-full min-h-screen p-4 py-[100px] relative ${className}`}>
    {children}
  </section>
);

export { SectionContainer };
