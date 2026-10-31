import React from 'react';
import { ExternalLink } from 'lucide-react';
import { skills } from '../data';
import Section from '../components/Section';
import Reveal from '../components/Reveal';

function Skills() {
  return (
    <Section title="Technical arsenal" id="skills" label="skills | toolbox">
      <div className="grid md:grid-cols-2 gap-6">
        {Object.entries(skills).map(([category, items], index) => (
          <Reveal key={category} delay={index * 60} className="card p-6">
            <h3 className="text-lg font-bold text-foreground">{category}</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {items.map((item) =>
                item.url ? (
                  <a key={item.label} href={item.url} target="_blank" rel="noreferrer" className="chip group">
                    {item.label}
                    <ExternalLink size={11} className="opacity-40 transition-opacity group-hover:opacity-100" />
                  </a>
                ) : (
                  <span key={item.label} className="chip">
                    {item.label}
                  </span>
                )
              )}
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export default Skills;
