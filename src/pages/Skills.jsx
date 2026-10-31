import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ExternalLink, Search, X } from 'lucide-react';
import { skills } from '../data';
import { projects } from '../projects';
import Section from '../components/Section';
import Reveal from '../components/Reveal';

const CATEGORY_COLORS = [
  { bar: 'bg-base-a', text: 'text-base-a', ring: 'ring-base-a/40' },
  { bar: 'bg-base-c', text: 'text-base-c', ring: 'ring-base-c/40' },
  { bar: 'bg-base-g', text: 'text-highlight', ring: 'ring-base-g/40' },
  { bar: 'bg-base-t', text: 'text-base-t', ring: 'ring-base-t/40' }
];

const normalize = (text) => text.toLowerCase().replace(/[^a-z0-9+#]+/g, ' ').trim();
const tokens = (text, caseSensitive) =>
  (caseSensitive ? text.replace(/[^A-Za-z0-9+#]+/g, ' ').trim() : normalize(text)).split(' ').filter(Boolean);

// A skill is used by a project when it names the same tool as one of the project's stack entries,
// e.g. "SLURM" matches "SLURM / HPC". Short names compare case-sensitively so the Go language
// does not match "GO / KEGG enrichment" (Gene Ontology).
function usesSkill(stackLabel, skillLabel) {
  const caseSensitive = skillLabel.length <= 3;
  const skill = caseSensitive ? skillLabel : normalize(skillLabel);
  if (tokens(stackLabel, caseSensitive).includes(skill)) return true;
  const stack = normalize(stackLabel);
  return !caseSensitive && (stack === skill || tokens(skillLabel).includes(stack));
}

function Skills() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [query, setQuery] = useState('');

  const categories = Object.keys(skills);

  const allSkills = useMemo(
    () =>
      Object.entries(skills).flatMap(([category, items], categoryIndex) =>
        items.map((item) => ({
          ...item,
          category,
          color: CATEGORY_COLORS[categoryIndex % CATEGORY_COLORS.length],
          projects: projects.filter((project) =>
            project.stack.some((tech) => usesSkill(typeof tech === 'string' ? tech : tech.label, item.label))
          )
        }))
      ),
    []
  );

  const visibleSkills = allSkills.filter(
    (skill) =>
      (activeCategory === 'All' || skill.category === activeCategory) &&
      normalize(`${skill.label} ${skill.category}`).includes(normalize(query))
  );

  const mostUsed = [...allSkills].sort((a, b) => b.projects.length - a.projects.length).slice(0, 3);
  const filterOptions = ['All', ...categories];

  return (
    <Section
      title="Technical arsenal"
      id="skills"
      label={`skills | ${allSkills.length} tools`}
      intro="Filter by area, search for a tool, and see exactly which projects I used it in."
    >
      <div className="space-y-8">
        <Reveal className="grid gap-3 sm:grid-cols-3">
          <div className="card p-5">
            <p className="font-display text-3xl font-bold">{allSkills.length}</p>
            <p className="text-sm text-muted-foreground">tools &amp; techniques</p>
          </div>
          <div className="card p-5 sm:col-span-2">
            <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">Most used across projects</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {mostUsed.map((skill) => (
                <span key={skill.label} className={`chip ring-1 ${skill.color.ring} text-foreground`}>
                  <span className={`h-2 w-2 rounded-full ${skill.color.bar}`} />
                  {skill.label}
                  <span className="text-muted-foreground">×{skill.projects.length}</span>
                </span>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal className="card p-4 sm:p-5 space-y-4 lg:sticky lg:top-20 lg:z-20">
          <label className="relative block">
            <span className="sr-only">Search skills</span>
            <Search size={18} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search e.g. Snakemake, Go, PyTorch…"
              className="w-full rounded-xl border border-border bg-background py-3 pl-11 pr-11 text-base outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
            />
            {query && (
              <button
                type="button"
                onClick={() => setQuery('')}
                aria-label="Clear search"
                className="absolute right-3 top-1/2 -translate-y-1/2 rounded-md p-1 text-muted-foreground hover:text-foreground"
              >
                <X size={16} />
              </button>
            )}
          </label>

          <div className="-mx-1 flex gap-2 overflow-x-auto px-1 pb-1 sm:flex-wrap" role="group" aria-label="Filter by category">
            {filterOptions.map((category) => {
              const isActive = activeCategory === category;
              const count =
                category === 'All' ? allSkills.length : allSkills.filter((skill) => skill.category === category).length;
              const colorIndex = categories.indexOf(category);
              const color = colorIndex >= 0 ? CATEGORY_COLORS[colorIndex % CATEGORY_COLORS.length] : null;
              return (
                <button
                  key={category}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => setActiveCategory(category)}
                  className={`inline-flex shrink-0 items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? 'border-foreground bg-foreground text-background'
                      : 'border-border bg-card text-foreground hover:border-primary'
                  }`}
                >
                  {color && <span className={`h-2 w-2 rounded-full ${color.bar}`} />}
                  {category}
                  <span className={`font-mono text-xs ${isActive ? 'text-background/70' : 'text-muted-foreground'}`}>{count}</span>
                </button>
              );
            })}
          </div>
        </Reveal>

        {visibleSkills.length === 0 ? (
          <div className="card p-10 text-center">
            <p className="font-mono text-sm text-muted-foreground">&gt;no_hits | 0 sequences aligned</p>
            <p className="mt-2 text-foreground">No skill matches “{query}”.</p>
            <button type="button" className="btn btn-outline mt-5" onClick={() => { setQuery(''); setActiveCategory('All'); }}>
              Reset filters
            </button>
          </div>
        ) : (
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {visibleSkills.map((skill) => (
              <li key={`${skill.category}-${skill.label}`} className="card hover-lift relative flex flex-col overflow-hidden p-5 animate-fade-in-up [animation-duration:0.35s]">
                <span className={`absolute inset-y-0 left-0 w-1 ${skill.color.bar}`} aria-hidden="true" />
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-semibold">{skill.label}</h3>
                    <p className={`mt-0.5 font-mono text-[11px] ${skill.color.text}`}>{skill.category}</p>
                  </div>
                  {skill.url && (
                    <a
                      href={skill.url}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${skill.label} documentation`}
                      className="rounded-lg p-1.5 text-muted-foreground transition-colors hover:bg-secondary hover:text-primary"
                    >
                      <ExternalLink size={15} />
                    </a>
                  )}
                </div>

                {skill.projects.length > 0 ? (
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {skill.projects.map((project) => (
                      <Link
                        key={project.id}
                        to={`/experience?project=${project.id}`}
                        className="inline-flex items-center gap-1 rounded-md bg-surface px-2 py-1 text-xs text-foreground/80 transition-colors hover:bg-secondary hover:text-primary"
                      >
                        {project.title}
                        <ArrowUpRight size={12} />
                      </Link>
                    ))}
                  </div>
                ) : (
                  <p className="mt-4 text-xs text-muted-foreground">Part of my everyday toolbox</p>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </Section>
  );
}

export default Skills;
