import React from 'react';
import { ChevronRight } from 'lucide-react';
import Section from '../components/Section';
import { aboutSection } from '../data';
import bmcPic from "../assets/bmc_selfie.jpg"


function About() {
  return (
    <Section title={aboutSection.title} id="about">
      <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-10 items-start">
        <div className="space-y-5 text-muted-foreground leading-relaxed">
          {aboutSection.paragraphs.map((paragraph, index) => (
            <p key={index} className="text-base">
              {paragraph}
            </p>
          ))}
        </div>

        <aside className="self-start bg-card border border-border rounded-2xl p-6 space-y-6">
          <img
            src={bmcPic}
            alt="Chandrashekar CR - Lab Portrait"
            className="w-full h-auto rounded-lg object-cover"
          />
          <h3 className="text-sm font-mono text-secondary-foreground uppercase tracking-widest">
            Quick facts
          </h3>
          <ul className="space-y-3">
            {aboutSection.quickFacts.map((fact, index) => (
              <li key={index} className="flex gap-3 text-sm text-muted-foreground">
                <ChevronRight size={16} className="text-primary shrink-0 mt-0.5" />
                <span>{fact}</span>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </Section>
  );
}

export default About;
