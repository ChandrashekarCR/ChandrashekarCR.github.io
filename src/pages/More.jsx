import React from 'react';
import { BookOpen, Activity, ChevronRight } from 'lucide-react';
import { moreSections } from '../data';
import Section from '../components/Section';
import Reveal from '../components/Reveal';

const sectionIcons = {
  teaching: BookOpen,
  extracurriculars: Activity
};

function MediaGallery({ media = [] }) {
  if (!media.length) return null;

  return (
    <div className={media.length > 1 ? 'grid gap-3 sm:grid-cols-2 lg:grid-cols-1' : 'space-y-3'}>
      {media.map((item) => (
        <figure
          key={item.src}
          className={`group overflow-hidden rounded-2xl border border-border bg-surface ${item.className ?? ''} relative`}
        >
          <img
            src={item.src}
            alt={item.alt}
            className="block w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            loading="lazy"
          />
          {item.caption && (
            <figcaption className="absolute inset-x-2 bottom-2 rounded-lg bg-card/90 px-3 py-1.5 font-mono text-[11px] text-foreground shadow-sm backdrop-blur">
              {item.caption}
            </figcaption>
          )}
        </figure>
      ))}
    </div>
  );
}

function More() {
  return (
    <Section title="Beyond the code" id="more" label="more | teaching & life">
      <div className="space-y-16">
        {moreSections.map((section) => {
          const Icon = sectionIcons[section.id] ?? BookOpen;

          return (
            <section key={section.id} className="space-y-6">
              <Reveal className="flex flex-wrap items-end justify-between gap-4">
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">{section.eyebrow}</p>
                  <h3 className="mt-2 text-2xl md:text-3xl font-bold flex items-center gap-3 text-foreground">
                    <span className="grid h-10 w-10 place-items-center rounded-xl bg-secondary text-primary">
                      <Icon size={20} />
                    </span>
                    {section.title}
                  </h3>
                </div>
                <p className="max-w-xl text-sm leading-relaxed text-muted-foreground">{section.summary}</p>
              </Reveal>

              <div className="space-y-6">
                {section.items.map((item, itemIndex) => (
                  <Reveal
                    as="article"
                    key={`${section.id}-${item.title ?? item.role ?? itemIndex}`}
                    className="card overflow-hidden"
                  >
                    <div className="grid gap-0 lg:grid-cols-[1.1fr_0.9fr] items-start">
                      <div className="space-y-4 p-6 md:p-8">
                        <div>
                          <h4 className="text-xl font-bold text-foreground">{item.title ?? item.role}</h4>
                          {item.institution && (
                            <p className="mt-1 text-sm font-medium text-primary">{item.institution}</p>
                          )}
                          {item.duration && (
                            <p className="mt-1 font-mono text-xs text-muted-foreground">{item.duration}</p>
                          )}
                        </div>

                        {item.description && (
                          <p className="text-[15px] leading-relaxed text-muted-foreground">{item.description}</p>
                        )}

                        {item.points?.length > 0 && (
                          <ul className="space-y-2">
                            {item.points.map((pt) => (
                              <li key={pt} className="flex gap-3 text-sm text-foreground/80">
                                <ChevronRight size={16} className="mt-0.5 shrink-0 text-primary" />
                                <span>{pt}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>

                      <div className="self-start border-t border-border bg-surface/60 p-3 md:p-4 lg:border-l lg:border-t-0">
                        <MediaGallery media={item.media} />
                      </div>
                    </div>
                  </Reveal>
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
