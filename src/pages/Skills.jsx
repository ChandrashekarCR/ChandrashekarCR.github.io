import React from 'react';
import { ExternalLink } from 'lucide-react';
import { skills } from '../data';
import Section from '../components/Section';

function Skills() {
  return (
    <Section title="Technical Arsenal" id="skills">
      <div className="grid md:grid-cols-2 gap-8">
        {Object.entries(skills).map(([category, items], i) => (
          <div key={i} className="space-y-4">
            <h3 className="text-lg font-bold text-foreground border-b border-border pb-2 inline-block relative after:content-[''] after:absolute after:bottom-[-1px] after:left-0 after:w-1/2 after:h-px after:bg-primary">
              {category}
            </h3>

            <div className="flex flex-wrap gap-2">
              {items.map((skill) => {
                const item = typeof skill === 'string' ? { label: skill, url: null } : skill;
                const baseClass =
                  "inline-flex items-center gap-1 px-3 py-1.5 bg-card border border-border text-muted-foreground text-sm font-medium rounded-md transition-colors";

                return item.url ? (
                  <a
                    key={item.label}
                    href={item.url}
                    target="_blank"
                    rel="noreferrer"
                    className={`${baseClass} hover:text-primary hover:border-primary hover:bg-primary/10 group`}
                  >
                    {item.label}
                    <ExternalLink size={11} className="opacity-0 transition-opacity group-hover:opacity-100" />
                  </a>
                ) : (
                  <span key={item.label} className={baseClass}>
                    {item.label}
                  </span>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

export default Skills;


/*
{items.map((skill) => (
                <a
                  key={skill.label}
                  href={skill.url}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-1 px-3 py-1.5 bg-card border border-border text-muted-foreground text-sm font-medium rounded-md hover:text-primary hover:border-primary transition-colors"
                >
                  {skill.label}
                  <ExternalLink size={11} className="opacity-0 transition-opacity group-hover:opacity-100" />
                </a>
              ))}
*/