import React from 'react';
import Reveal from './Reveal';

function Section({ title, id, label, intro, children }) {
  return (
    <section id={id} className="py-14 md:py-20">
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <Reveal className="mb-10 md:mb-14 max-w-3xl">
          <p className="fasta-label">{label ?? id}</p>
          <h2 className="mt-3 text-3xl md:text-5xl font-bold text-foreground">{title}</h2>
          <div className="base-strip mt-5 w-24" />
          {intro && <p className="mt-5 text-base md:text-lg leading-relaxed text-muted-foreground">{intro}</p>}
        </Reveal>
        {children}
      </div>
    </section>
  );
}

export default Section;
