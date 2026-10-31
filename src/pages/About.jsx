import React from 'react';
import { ChevronRight } from 'lucide-react';
import Section from '../components/Section';
import Reveal from '../components/Reveal';
import { aboutSection } from '../data';
import bmcPic from '../assets/bmc_selfie.jpg';

function About() {
  const [lead, ...paragraphs] = aboutSection.paragraphs;

  return (
    <Section title={aboutSection.title} id="about" label="about | who_am_i">
      <div className="grid lg:grid-cols-[1.25fr_0.75fr] gap-10 items-start">
        <div className="space-y-5">
          <Reveal as="p" className="text-xl md:text-2xl font-display font-medium leading-snug text-foreground">
            {lead}
          </Reveal>
          {paragraphs.map((paragraph, index) => (
            <Reveal as="p" key={index} delay={index * 40} className="text-base leading-relaxed text-muted-foreground">
              {paragraph}
            </Reveal>
          ))}
        </div>

        <Reveal as="aside" className="card self-start overflow-hidden lg:sticky lg:top-24">
          <img
            src={bmcPic}
            alt="Chandrashekar CR in the lab at BMC, Lund"
            className="aspect-[4/3] w-full object-cover"
          />
          <div className="p-6">
            <p className="fasta-label">quick_facts</p>
            <ul className="mt-4 space-y-3">
              {aboutSection.quickFacts.map((fact) => (
                <li key={fact} className="flex gap-3 text-sm text-foreground/80">
                  <ChevronRight size={16} className="text-primary shrink-0 mt-0.5" />
                  <span>{fact}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

export default About;
