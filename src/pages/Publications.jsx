import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { publications } from '../data';
import Section from '../components/Section';
import Reveal from '../components/Reveal';

function Publications() {
  return (
    <Section title="Publications & IP" id="publications" label={`publications | ${publications.length} records`}>
      <ol className="space-y-4">
        {publications.map((pub, index) => (
          <Reveal as="li" key={pub.title} delay={index * 60}>
            <a
              href={pub.link}
              target="_blank"
              rel="noreferrer"
              className="card hover-lift group grid gap-4 p-5 sm:grid-cols-[3rem_1fr_auto] sm:items-center md:p-6"
            >
              <span className="font-display text-3xl font-bold text-border group-hover:text-primary transition-colors">
                {String(index + 1).padStart(2, '0')}
              </span>
              <div>
                <h3 className="text-base md:text-lg font-semibold leading-snug text-foreground group-hover:text-primary transition-colors">
                  {pub.title}
                </h3>
                <p className="mt-2 font-mono text-xs text-muted-foreground">{pub.venue}</p>
              </div>
              <ArrowUpRight className="hidden sm:block text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary" />
            </a>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}

export default Publications;
