import React from 'react';
import { BookOpen } from 'lucide-react';
import { education } from '../data';
import Section from '../components/Section';

function Education() {
  return (
    <Section title="Education" id="education">
      <div className="grid md:grid-cols-2 gap-6">
        {education.map((edu, i) => {
          const CardTag = edu.certificate ? 'a' : 'div';
          const cardProps = edu.certificate
            ? {
                href: edu.certificate,
                target: '_blank',
                rel: 'noopener noreferrer',
              }
            : {};

          return (
            <CardTag
              key={i}
              {...cardProps}
              className="block p-6 bg-card rounded-2xl border border-border hover:border-secondary-foreground/50 transition-colors shadow-sm cursor-pointer"
            >
              <BookOpen className="text-primary mb-4" size={28} />
              <h3 className="text-xl font-bold mb-2 text-foreground">{edu.degree}</h3>
              <p className="text-secondary-foreground font-medium mb-1">{edu.institution}</p>
              <p className="text-muted-foreground text-sm mb-4">
                {edu.location} | {edu.duration}
              </p>

              {edu.details && (
                <span className="inline-block px-3 py-1 bg-secondary text-secondary-foreground text-xs font-mono rounded-full">
                  {edu.details}
                </span>
              )}
            </CardTag>
          );
        })}
      </div>
    </Section>
  );
}

export default Education;