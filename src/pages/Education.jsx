import React from 'react';
import { GraduationCap, FileText } from 'lucide-react';
import { education } from '../data';
import Section from '../components/Section';
import Reveal from '../components/Reveal';

function Education() {
  return (
    <Section title="Education" id="education" label="education | degrees">
      <ol className="relative space-y-6 border-l-2 border-dashed border-border pl-6 sm:pl-10">
        {education.map((edu, index) => (
          <Reveal as="li" key={edu.institution} delay={index * 80} className="relative">
            <span className="absolute -left-[41px] sm:-left-[57px] top-6 grid h-8 w-8 place-items-center rounded-full border-2 border-background bg-primary text-primary-foreground shadow">
              <GraduationCap size={16} />
            </span>
            <article className="card hover-lift p-6 md:p-8">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <p className="font-mono text-xs text-muted-foreground">{edu.duration}</p>
                  <h3 className="mt-2 text-xl md:text-2xl font-bold text-foreground">{edu.degree}</h3>
                  <p className="mt-1 font-medium text-primary">{edu.institution}</p>
                  <p className="text-sm text-muted-foreground">{edu.location}</p>
                </div>
                {edu.details && (
                  <span className="rounded-full bg-secondary px-3 py-1 font-mono text-xs text-primary">{edu.details}</span>
                )}
              </div>

              {edu.documents?.length > 0 && (
                <div className="mt-6 flex flex-wrap gap-2">
                  {edu.documents.map((doc) => (
                    <a key={doc.label} href={doc.href} target="_blank" rel="noopener noreferrer" className="chip">
                      <FileText size={13} /> {doc.label}
                    </a>
                  ))}
                </div>
              )}
            </article>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}

export default Education;
