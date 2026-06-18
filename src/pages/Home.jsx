import React from 'react';
import { Link } from 'react-router-dom';
import { personalInfo } from '../data';
import { GitBranch, Link2, Mail, ArrowRight, Dna, Cpu, Microscope, Sparkles, Code2, Workflow, Layers3 } from 'lucide-react';
import selfie from "../assets/caps_selfie.jpeg"
import labWork from "../assets/bmc_lab_work.jpg"
import ruleGraph from "../assets/rulegraph.png"

function Home() {
  return (
    <main className="px-6 max-w-6xl mx-auto min-h-[90vh] flex flex-col justify-center">
      <div className="hero-grid lg:grid-cols-[1.1fr_0.9fr] items-center">
        <div className="space-y-6 animate-fade-in-up">
          <span className="kicker">
            <Sparkles size={14} /> Biology + Software + Systems Thinking
          </span>
          <p className="text-secondary-foreground font-mono font-medium tracking-wide">
            Hej! I am
          </p>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-foreground">
            {personalInfo.name}.
          </h1>
          <h2 className="text-3xl md:text-5xl font-bold text-muted-foreground max-w-3xl leading-tight">
            {personalInfo.tagline}
          </h2>
          <p className="max-w-2xl text-lg text-muted-foreground leading-relaxed pt-2">
            {personalInfo.about}
          </p>

          <div className="pt-8 pb-4">
            <div className="bio-orbit relative mx-auto w-full max-w-sm aspect-square overflow-visible">
              <div className="absolute inset-0 rounded-full bg-surface/20 ring-1 ring-border/60" />

              <svg
                className="bio-ring absolute inset-0 h-full w-full"
                viewBox="0 0 400 400"
                aria-hidden="true"
              >
                <circle
                  cx="200"
                  cy="200"
                  r="132"
                  fill="none"
                  stroke="rgba(42,61,72,0.65)"
                  strokeWidth="24"
                />
                <circle
                  cx="200"
                  cy="200"
                  r="132"
                  fill="none"
                  stroke="rgba(116,215,182,0.35)"
                  strokeWidth="24"
                  strokeDasharray="140 690"
                  strokeDashoffset="20"
                  transform="rotate(-90 200 200)"
                />
                <circle
                  cx="200"
                  cy="200"
                  r="132"
                  fill="none"
                  stroke="rgba(143,214,255,0.28)"
                  strokeWidth="24"
                  strokeDasharray="120 710"
                  strokeDashoffset="190"
                  transform="rotate(-90 200 200)"
                />
                <circle
                  cx="200"
                  cy="200"
                  r="132"
                  fill="none"
                  stroke="rgba(200,169,106,0.22)"
                  strokeWidth="24"
                  strokeDasharray="110 720"
                  strokeDashoffset="370"
                  transform="rotate(-90 200 200)"
                />
              </svg>

              <a
                href="https://pmc.ncbi.nlm.nih.gov/articles/PMC1122955/"
                target="_blank"
                rel="noreferrer"
                className="bio-center flex h-32 w-32 items-center justify-center px-4 text-center text-base font-semibold text-foreground focus-visible:ring-2 focus-visible:ring-primary/70 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                Bioinformatics
              </a>

              <div className="bio-label absolute left-1/2 top-5 -translate-x-1/2 pointer-events-none">
                <span className="pill text-xs md:text-sm">
                  <Dna size={13} /> Biology
                </span>
              </div>

              <div className="bio-label absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none">
                <span className="pill text-xs md:text-sm">
                  <Code2 size={13} /> Software
                </span>
              </div>

              <div className="bio-label absolute left-1/2 bottom-5 -translate-x-1/2 pointer-events-none">
                <span className="pill text-xs md:text-sm">
                  <Workflow size={13} /> Pipelines
                </span>
              </div>

              <div className="bio-label absolute left-5 top-1/2 -translate-y-1/2 pointer-events-none">
                <span className="pill text-xs md:text-sm">
                  <Layers3 size={13} /> Systems
                </span>
              </div>
            </div>

            <p className="mt-4 text-center text-sm text-muted-foreground">
              Tap the center to open the bioinformatics article.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 pt-6">
            <a href={personalInfo.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-secondary text-secondary-foreground px-5 py-2.5 rounded-lg font-medium hover:bg-secondary/80 transition-colors border border-border">
              <GitBranch size={20} />
              GitHub
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-secondary text-secondary-foreground px-5 py-2.5 rounded-lg font-medium hover:bg-secondary/80 transition-colors border border-border">
              <Link2 size={20} />
              LinkedIn
            </a>
            <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-lg font-medium hover:bg-primary/90 transition-colors">
              <Mail size={20} />
              Get In Touch
            </a>
          </div>
        </div>

        <div className="space-y-6">
          <div className="glow-card hover-lift p-6">
            <img
              src={selfie}
              alt="Chandrashekar CR - Portrait"
              className="w-full h-auto rounded-lg object-cover"
            />
          </div>
          <div className="bio-grid md:grid-cols-2 gap-6">
            <div className="glow-card hover-lift p-4">
              <div className="relative w-full aspect-[4/5] overflow-hidden rounded-lg">
                <img
                  src={labWork}
                  alt="Chandrashekar CR - Wet Lab Work"
                  className="absolute inset-0 w-full h-full object-contain"
                />
              </div>
            </div>

            <div className="glow-card hover-lift p-4">
              <div className="relative w-full aspect-[4/5] overflow-hidden rounded-lg bg-white">
                <img
                  src={ruleGraph}
                  alt="Chandrashekar CR - Rule Graph"
                  className="absolute inset-0 w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16 grid md:grid-cols-3 gap-6">
        <Link to="/experience" className="group p-6 rounded-2xl border border-border bg-card hover:border-primary transition-colors hover-lift">
          <h3 className="text-lg font-semibold text-foreground mb-2">Experience</h3>
          <p className="text-sm text-muted-foreground mb-4">Research, internships, and applied ML work.</p>
          <span className="inline-flex items-center gap-2 text-primary text-sm font-medium">
            Explore <ArrowRight size={16} />
          </span>
        </Link>
        <Link to="/skills" className="group p-6 rounded-2xl border border-border bg-card hover:border-primary transition-colors hover-lift">
          <h3 className="text-lg font-semibold text-foreground mb-2">Skills</h3>
          <p className="text-sm text-muted-foreground mb-4">Bioinformatics, ML, software, and wet lab.</p>
          <span className="inline-flex items-center gap-2 text-primary text-sm font-medium">
            Explore <ArrowRight size={16} />
          </span>
        </Link>
        <Link to="/publications" className="group p-6 rounded-2xl border border-border bg-card hover:border-primary transition-colors hover-lift">
          <h3 className="text-lg font-semibold text-foreground mb-2">Publications</h3>
          <p className="text-sm text-muted-foreground mb-4">Peer-reviewed work and IP.</p>
          <span className="inline-flex items-center gap-2 text-primary text-sm font-medium">
            Explore <ArrowRight size={16} />
          </span>
        </Link>
        <Link to="/more" className="group p-6 rounded-2xl border border-border bg-card hover:border-primary transition-colors hover-lift">
          <h3 className="text-lg font-semibold text-foreground mb-2">More</h3>
          <p className="text-sm text-muted-foreground mb-4">Intrests and other soft skills.</p>
          <span className="inline-flex items-center gap-2 text-primary text-sm font-medium">
            Explore <ArrowRight size={16} />
          </span>
        </Link>
      </div>
    </main>
  );
}

export default Home;
