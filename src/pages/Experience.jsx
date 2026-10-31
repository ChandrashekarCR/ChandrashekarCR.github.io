import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ExternalLink, Code2, FileText, Microscope, Wrench, Cpu, Compass } from 'lucide-react';
import Section from '../components/Section';
import Reveal from '../components/Reveal';
import StatusBadge from '../components/StatusBadge';
import { researchProjects, professionalExperience } from '../projects';

const storyBlocks = [
  { key: 'problem', label: 'The biological problem', Icon: Microscope, color: 'text-base-a' },
  { key: 'solution', label: 'The engineering solution', Icon: Wrench, color: 'text-base-c' },
  { key: 'engineering', label: 'Why it matters as software', Icon: Cpu, color: 'text-base-t' }
];

function TechChips({ stack }) {
  return (
    <div className="flex flex-wrap gap-2">
      {stack.map((techItem) => {
        const tech = typeof techItem === 'string' ? { label: techItem, url: null } : techItem;
        return tech.url ? (
          <a key={tech.label} href={tech.url} target="_blank" rel="noreferrer" className="chip group">
            {tech.label}
            <ExternalLink size={11} className="opacity-40 transition-opacity group-hover:opacity-100" />
          </a>
        ) : (
          <span key={tech.label} className="chip">
            {tech.label}
          </span>
        );
      })}
    </div>
  );
}

function ProjectDetail({ project }) {
  return (
    <article className="card p-6 md:p-8 space-y-7">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div className="min-w-0">
          <p className="font-mono text-xs text-muted-foreground">
            {project.role} · {project.period}
          </p>
          <h3 className="mt-2 text-2xl md:text-3xl font-bold text-foreground">{project.title}</h3>
          <p className="mt-2 text-lg text-primary font-medium">{project.tagline}</p>
          <p className="mt-1 text-sm text-muted-foreground">{project.org}</p>
        </div>
        <StatusBadge status={project.status} />
      </div>

      {project.metrics && (
        <div className="grid gap-3 sm:grid-cols-3">
          {project.metrics.map((metric) => (
            <div key={metric.label} className="rounded-xl border border-border bg-surface p-4">
              <p className="font-display text-2xl font-bold text-primary">{metric.value}</p>
              <p className="mt-1 text-xs text-foreground/80">{metric.label}</p>
              {metric.note && <p className="mt-1 font-mono text-[11px] text-muted-foreground">{metric.note}</p>}
            </div>
          ))}
        </div>
      )}

      <div className="space-y-6">
        {storyBlocks.map(({ key, label, Icon, color }) => (
          <div key={key} className="grid gap-2 sm:grid-cols-[2rem_1fr]">
            <span className={`hidden sm:grid h-8 w-8 place-items-center rounded-lg bg-surface ${color}`}>
              <Icon size={16} />
            </span>
            <div>
              <p className="font-mono text-xs uppercase tracking-wider text-foreground">{label}</p>
              <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">{project[key]}</p>
            </div>
          </div>
        ))}

        {project.next && (
          <div className="rounded-xl border border-dashed border-primary/50 bg-secondary/60 p-4 sm:ml-10">
            <p className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-primary">
              <Compass size={14} /> What&apos;s next
            </p>
            <p className="mt-2 text-sm leading-relaxed text-foreground/80">{project.next}</p>
          </div>
        )}
      </div>

      {project.media && (
        <img
          src={project.media.src}
          alt={project.media.alt}
          loading="lazy"
          className="w-full max-h-96 rounded-xl border border-border object-cover"
        />
      )}

      <TechChips stack={project.stack} />

      {(project.github || project.paper) && (
        <div className="flex flex-col gap-3 border-t border-border pt-6 sm:flex-row sm:flex-wrap">
          {project.github && (
            <a href={project.github} target="_blank" rel="noreferrer" className="btn btn-primary">
              <Code2 size={16} /> View code
            </a>
          )}
          {project.paper && (
            <a href={project.paper} target="_blank" rel="noreferrer" className="btn btn-outline">
              <FileText size={16} />
              {project.paperVenue ? `Read paper · ${project.paperVenue}` : 'Read paper'}
              <ExternalLink size={14} />
            </a>
          )}
        </div>
      )}
    </article>
  );
}

function Experience() {
  const [searchParams, setSearchParams] = useSearchParams();
  const requestedId = searchParams.get('project');
  const activeProject = researchProjects.find((project) => project.id === requestedId) ?? researchProjects[0];

  // Deep links to professional experience scroll to that card instead of selecting a research project.
  useEffect(() => {
    if (!professionalExperience.some((project) => project.id === requestedId)) return undefined;
    const frame = requestAnimationFrame(() =>
      document.getElementById(requestedId)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    );
    return () => cancelAnimationFrame(frame);
  }, [requestedId]);

  // Keep the selected card visible in the horizontal mobile scroller.
  const scrollIntoViewOnMobile = (node) => {
    const strip = node?.parentElement;
    if (strip && strip.scrollWidth > strip.clientWidth) {
      strip.scrollTo({ left: node.offsetLeft - strip.offsetLeft - 20, behavior: 'smooth' });
    }
  };

  const selectProject = (id) => setSearchParams({ project: id }, { replace: true, preventScrollReset: true });

  return (
    <Section
      title="A biological story, told through software."
      id="experience"
      label={`experience | ${researchProjects.length} projects`}
      intro={`${researchProjects.length} projects, one philosophy: convert a biological question into a reproducible, interpretable, and deployable computational system.`}
    >
      <div className="space-y-16">
        <div className="space-y-5">
          <h3 className="text-xl font-bold text-foreground">Research projects</h3>
          <div className="grid gap-6 lg:grid-cols-[300px_1fr]">
            <nav
              aria-label="Research projects"
              className="-mx-5 flex snap-x snap-mandatory gap-2 overflow-x-auto px-5 pb-2 sm:-mx-6 sm:px-6 lg:sticky lg:top-24 lg:mx-0 lg:block lg:space-y-2 lg:self-start lg:overflow-visible lg:px-0 lg:pb-0 [scrollbar-width:thin]"
            >
              {researchProjects.map((project) => {
                const isActive = project.id === activeProject.id;
                return (
                  <button
                    ref={isActive ? scrollIntoViewOnMobile : undefined}
                    key={project.id}
                    type="button"
                    onClick={() => selectProject(project.id)}
                    aria-current={isActive ? 'true' : undefined}
                    className={`w-64 shrink-0 snap-start rounded-xl border p-4 text-left transition-all lg:w-full ${
                      isActive
                        ? 'border-primary bg-card shadow-md ring-1 ring-primary/30'
                        : 'border-border bg-card/60 hover:border-primary/50 hover:bg-card'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <span className={`font-mono text-xs ${isActive ? 'text-primary' : 'text-muted-foreground'}`}>
                        {project.rank}
                      </span>
                      <div className="min-w-0">
                        <p className="text-sm font-semibold text-foreground">{project.title}</p>
                        <p className="mt-1 text-xs text-muted-foreground">{project.role}</p>
                      </div>
                    </div>
                  </button>
                );
              })}
            </nav>

            <div key={activeProject.id} className="animate-fade-in-up min-w-0">
              <ProjectDetail project={activeProject} />
            </div>
          </div>
        </div>

        {professionalExperience.length > 0 && (
          <div className="space-y-5">
            <h3 className="text-xl font-bold text-foreground">Professional experience</h3>
            {professionalExperience.map((project) => (
              <Reveal key={project.id} id={project.id} className="scroll-mt-24">
                <ProjectDetail project={project} />
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </Section>
  );
}

export default Experience;
