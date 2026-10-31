import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, GitBranch, Link2, Mail, MapPin } from 'lucide-react';
import { personalInfo, publications } from '../data';
import { researchProjects } from '../projects';
import DnaHelix from '../components/DnaHelix';
import Reveal from '../components/Reveal';
import StatusBadge from '../components/StatusBadge';
import selfie from '../assets/caps_selfie.jpeg';
import labWork from '../assets/bmc_lab_work.jpg';
import ruleGraph from '../assets/rulegraph.png';

const BASE_CLASSES = { A: 'text-base-a', C: 'text-base-c', G: 'text-base-g', T: 'text-base-t' };
const READ = 'GATTACACGTTAGCCATGCAGTCAGT';

const pipelineSteps = [
  { id: 'reads', label: 'Raw reads', tool: 'FASTQ · fastp', color: 'bg-base-a' },
  { id: 'workflow', label: 'Workflow', tool: 'Snakemake · Nextflow', color: 'bg-base-c' },
  { id: 'model', label: 'Model', tool: 'PyTorch · scikit-learn', color: 'bg-base-g' },
  { id: 'service', label: 'Service', tool: 'FastAPI · SQLite', color: 'bg-base-t' },
  { id: 'deploy', label: 'Deploy', tool: 'SLURM · Cloud · Apptainer', color: 'bg-primary' }
];

function ColoredRead({ sequence }) {
  return (
    <span className="break-all">
      {sequence.split('').map((base, index) => (
        <span key={index} className={BASE_CLASSES[base]}>
          {base}
        </span>
      ))}
    </span>
  );
}

function Home() {
  const featured = researchProjects.slice(0, 3);
  const stats = [
    { value: researchProjects.length, label: 'research projects' },
    { value: publications.filter((pub) => !pub.venue.startsWith('Copyright')).length, label: 'peer-reviewed papers' },
    { value: 'MSc', label: 'Bioinformatics, Lund' }
  ];

  return (
    <>
      <section className="max-w-6xl mx-auto px-5 sm:px-6 pt-10 md:pt-16">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div className="animate-fade-in-up">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-secondary px-3 py-1 text-xs font-medium text-primary">
              <span className="status-dot" /> {personalInfo.availability}
            </span>

            <p className="mt-6 font-mono text-sm text-muted-foreground">Hej! I am</p>
            <h1 className="mt-2 text-5xl sm:text-6xl md:text-7xl font-bold leading-[1.02] text-foreground">
              {personalInfo.name}
            </h1>
            <p className="mt-4 text-2xl md:text-3xl font-display font-semibold text-foreground/80 leading-snug">
              {personalInfo.tagline.replace(personalInfo.taglineAccent, '')}
              <span className="bg-gradient-to-r from-base-a via-base-c to-primary bg-clip-text text-transparent">
                {personalInfo.taglineAccent}
              </span>
            </p>
            <p className="mt-5 max-w-2xl text-base md:text-lg leading-relaxed text-muted-foreground">
              {personalInfo.about}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link to="/contact" className="btn btn-primary">
                <Mail size={18} /> Get in touch
              </Link>
              <Link to="/experience" className="btn btn-outline">
                See my work <ArrowRight size={16} />
              </Link>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-2">
              <a href={personalInfo.github} target="_blank" rel="noreferrer" className="chip">
                <GitBranch size={13} /> GitHub
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="chip">
                <Link2 size={13} /> LinkedIn
              </a>
              <span className="chip">
                <MapPin size={13} /> {personalInfo.location}
              </span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md animate-fade-in-up [animation-delay:150ms]">
            <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-base-a/15 via-base-c/10 to-base-g/15 blur-2xl" />
            <div className="card overflow-hidden p-2">
              <img
                src={selfie}
                alt={`${personalInfo.name} at graduation`}
                className="aspect-[4/3] w-full rounded-[1rem] object-cover"
              />
              <div className="px-3 pb-3 pt-4 font-mono text-[11px] leading-relaxed sm:text-xs">
                <p className="text-muted-foreground">@CR_read:1 | role=bioinformatics_engineer</p>
                <ColoredRead sequence={READ} />
                <p className="text-muted-foreground">+</p>
                <p className="text-muted-foreground/70 break-all">IIIIIIIIIIIIIIIIIIIIIIIIII</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-3 gap-3 sm:gap-6">
          {stats.map((stat, index) => (
            <Reveal key={stat.label} delay={index * 80} className="card px-4 py-5 text-center sm:text-left sm:px-6">
              <p className="font-display text-2xl sm:text-4xl font-bold text-foreground">{stat.value}</p>
              <p className="mt-1 text-xs sm:text-sm text-muted-foreground">{stat.label}</p>
            </Reveal>
          ))}
        </div>

        <DnaHelix className="mt-12 opacity-70" />
      </section>

      <section className="max-w-6xl mx-auto px-5 sm:px-6 py-16 md:py-20">
        <Reveal className="max-w-2xl">
          <p className="fasta-label">how_i_work</p>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold">From raw reads to a deployed answer.</h2>
          <p className="mt-4 text-muted-foreground">
            I build the whole path, not just the analysis: every project is a pipeline that someone else can
            rerun, scale and trust.
          </p>
        </Reveal>

        <ol className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {pipelineSteps.map((step, index) => (
            <Reveal as="li" key={step.id} delay={index * 70} className="card hover-lift group relative p-5">
              <span className={`block h-1.5 w-10 rounded-full ${step.color} transition-all duration-300 group-hover:w-full`} />
              <p className="mt-4 font-mono text-xs text-muted-foreground">step_{index + 1}</p>
              <p className="mt-1 font-display text-lg font-semibold">{step.label}</p>
              <p className="mt-1 text-sm text-muted-foreground">{step.tool}</p>
            </Reveal>
          ))}
        </ol>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <Reveal as="figure" className="card overflow-hidden">
            <div className="aspect-[4/3] bg-white">
              <img src={ruleGraph} alt="Snakemake rule graph from the Microbiome Forensic Tracker pipeline" className="h-full w-full object-contain p-4" loading="lazy" />
            </div>
            <figcaption className="border-t border-border px-5 py-3 text-sm text-muted-foreground">
              <span className="font-mono text-xs text-primary">dry lab</span> — the real Snakemake DAG behind my MSc thesis.
            </figcaption>
          </Reveal>
          <Reveal as="figure" delay={100} className="card overflow-hidden">
            <div className="aspect-[4/3]">
              <img src={labWork} alt={`${personalInfo.name} working in the wet lab`} className="h-full w-full object-cover object-[center_30%]" loading="lazy" />
            </div>
            <figcaption className="border-t border-border px-5 py-3 text-sm text-muted-foreground">
              <span className="font-mono text-xs text-highlight">wet lab</span> — I know where the data comes from.
            </figcaption>
          </Reveal>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-5 sm:px-6 pb-8">
        <Reveal className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="fasta-label">featured_projects</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold">Selected work</h2>
          </div>
          <Link to="/experience" className="btn btn-outline">
            All projects <ArrowRight size={16} />
          </Link>
        </Reveal>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {featured.map((project, index) => (
            <Reveal key={project.id} delay={index * 80}>
              <Link
                to={`/experience?project=${project.id}`}
                className="card hover-lift group flex h-full flex-col p-6"
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="font-mono text-xs text-muted-foreground">{project.rank}</span>
                  <StatusBadge status={project.status} />
                </div>
                <h3 className="mt-4 text-xl font-bold leading-snug group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="mt-2 flex-1 text-sm text-muted-foreground">{project.tagline}</p>
                <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                  Read the story <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}

export default Home;
