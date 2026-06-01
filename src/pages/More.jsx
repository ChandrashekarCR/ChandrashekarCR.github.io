import React from 'react';
import { BookOpen, Activity, ChevronRight } from 'lucide-react';
import { moreSections } from '../data';
import Section from '../components/Section';

const sectionIcons = {
  teaching: BookOpen,
  extracurriculars: Activity
};

function MediaGallery({ media = [] }) {
  if (!media.length) return null;

  return (
    <div className="space-y-3">
      {media.map((item) => (
        <figure
          key={item.src}
          className={`overflow-hidden rounded-2xl border border-border bg-background/40 ${item.className ?? ''}`}
        >
          <img
            src={item.src}
            alt={item.alt}
            className="block w-full h-full object-cover"
            loading="lazy"
          />
          {item.caption && (
            <figcaption className="border-t border-border/60 bg-background/70 px-3 py-2 text-[11px] font-mono text-muted-foreground">
              {item.caption}
            </figcaption>
          )}
        </figure>
      ))}
    </div>
  );
}

function More() {
  const teachingSection = moreSections.find((section) => section.id === 'teaching');
  const extracurricularSection = moreSections.find((section) => section.id === 'extracurriculars');

  return (
    <Section title="Beyond the Code" id="more">
      <div className="space-y-12">
        {[teachingSection, extracurricularSection]
          .filter(Boolean)
          .map((section) => {
            const Icon = sectionIcons[section.id] ?? BookOpen;

            return (
              <section key={section.id} className="space-y-6">
                <div className="flex flex-wrap items-end justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-bold flex items-center gap-2 text-foreground">
                      <Icon className="text-secondary-foreground" /> {section.title}
                    </h3>
                    <p className="mt-2 text-sm font-mono uppercase tracking-[0.24em] text-secondary-foreground">
                      {section.eyebrow}
                    </p>
                  </div>
                  <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
                    {section.summary}
                  </p>
                </div>

                <div className="space-y-6">
                  {section.items.map((item, itemIndex) => (
                    <article
                      key={`${section.id}-${item.title ?? item.role ?? itemIndex}`}
                      className="overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition-colors hover:border-secondary-foreground/40"
                    >
                      <div className="grid gap-0 lg:grid-cols-[1.1fr_0.9fr] items-start">
                        <div className="space-y-4 p-6 md:p-7">
                          <div>
                            <h4 className="text-xl font-bold text-foreground">{item.title ?? item.role}</h4>
                            {item.institution && (
                              <p className="mt-1 text-sm font-medium text-secondary-foreground">
                                {item.institution}
                              </p>
                            )}
                            {item.duration && (
                              <p className="mt-1 text-xs font-mono text-muted-foreground">{item.duration}</p>
                            )}
                          </div>

                          {item.description && (
                            <p className="text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                          )}

                          {item.points?.length > 0 && (
                            <ul className="space-y-2">
                              {item.points.map((pt, pointIndex) => (
                                <li key={pointIndex} className="flex gap-3 text-sm text-muted-foreground">
                                  <ChevronRight size={16} className="mt-0.5 shrink-0 text-primary" />
                                  <span>{pt}</span>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>

                        <div className="self-start border-t border-border/70 bg-background/20 p-3 md:p-4 lg:border-l lg:border-t-0">
                          <MediaGallery media={item.media} />
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            );
          })}
      </div>
    </Section>
  );
}

export default More;
