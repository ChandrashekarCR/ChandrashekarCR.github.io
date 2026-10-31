import React from 'react';
import { BookOpen, FileText } from 'lucide-react';
import { education } from '../data';
import Section from '../components/Section';

function Education() {
  return (
    <Section title="Education" id="education">
      <div className="grid md:grid-cols-2 gap-6">
        {education.map((edu) => (
          <article
            key={edu.institution}
            className="p-6 bg-card rounded-2xl border border-border hover:border-secondary-foreground/50 transition-colors shadow-sm"
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

            {edu.documents?.length > 0 && (
              <div className="mt-5 flex flex-wrap gap-2">
                {edu.documents.map((doc) => (
                  <a
                    key={doc.label}
                    href={doc.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-md border border-border px-3 py-1.5 text-xs font-mono text-muted-foreground hover:border-primary hover:text-primary transition-colors"
                  >
                    <FileText size={13} /> {doc.label}
                  </a>
                ))}
              </div>
            )}
          </article>
        ))}
      </div>
    </Section>
  );
}

export default Education;
