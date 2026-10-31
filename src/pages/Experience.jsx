import React, { useMemo, useState } from 'react';
import { ExternalLink, Code2, FileText, Sparkles } from 'lucide-react';
import Section from '../components/Section';
import bmcGannaPetruk from '../assets/bmc_ganna_petruk.jpg';

function Experience() {
  const projects = useMemo(
    () => [
      {
        id: 'microbiome-forensic-tracker',
        rank: '01',
        title: 'Microbiome Forensic Tracker',
        tagline: 'Predicting where a sample came from — from its microbes alone.',
        role: 'MSc Thesis · BINP51',
        org: 'Dr. Eran Elhaik Lab, Lund University',
        period: 'Dec 2025 – Sep 2026',
        status: 'completed',
        flagship: true,
        github: 'https://github.com/ChandrashekarCR/microbiome-forensic-tracker',
        paper: null,
        problem:
          "Every environment possesses a distinct microbial community that functions as a biological fingerprint. Whether derived from a surface swab, a soil core, or a complex metagenomic sample, a microbiome is fundamentally shaped by its geographic provenance. The core challenge lies in determining whether an unknown sample's microbial profile can accurately predict its precise geographic origin, and whether that prediction can be translated into legally defensible, interpretable forensic evidence.",
        solution:
          'I built and delivered an end-to-end microbial forensics framework: raw FASTQ files go in, latitude and longitude come out. A Snakemake-managed metagenomic inference engine feeds a GPU-accelerated machine learning layer (tracked with MLflow), trained on the Malmö dataset, behind a FastAPI + SQLite backend with map-driven workflows. The finished framework is deployed both on SLURM/HPC and in the cloud.',
        engineering:
          'This project is designed as software architecture, not a one-off analysis: switchable pipeline stages, per-rule HPC resources, Apptainer containers, tests with pytest, and CI gates (Ruff, Black, snakefmt, GitHub Actions) for reproducibility and maintainability — the same code runs on a SLURM cluster and in cloud containers.',
        next:
          'AI integration — exploring an LLM / RAG layer that turns predictions into natural-language, interpretable forensic reports.',
        stack: [
          { label: 'Snakemake', url: 'https://snakemake.readthedocs.io' },
          { label: 'DNABERT-S', url: 'https://github.com/MAGICS-LAB/DNABERT_S' },
          { label: 'PyTorch', url: 'https://pytorch.org/' },
          { label: 'MLflow', url: 'https://mlflow.org/' },
          { label: 'FastAPI', url: 'https://fastapi.tiangolo.com/' },
          { label: 'SQLite', url: 'https://sqlite.org/' },
          { label: 'Apptainer', url: 'https://apptainer.org/' },
          { label: 'SLURM / HPC', url: 'https://slurm.schedmd.com/' }
        ]
      },
      {
        id: 'tel-megiddo-adna',
        rank: '02',
        title: 'Tel-Megiddo Ancient DNA',
        tagline: 'Is the ancient chicken signal real? Authentication before interpretation.',
        role: 'Pipeline Engineering',
        org: 'Tel-Megiddo aDNA Project',
        period: 'Ongoing',
        status: 'learning',
        flagship: false,
        github: 'https://github.com/ChandrashekarCR/tel-megiddo-aDNA',
        paper: null,
        problem:
          'At the Tel-Megiddo archaeological site, ancient DNA reads mapped to chicken-like taxa. Before any biological story can be told, the signal itself has to be trusted: are these reads genuinely ancient Gallus gallus, or modern contamination and misassigned close relatives (jungle fowl, turkey, quail, pheasant)?',
        solution:
          'I am currently learning and building the validation side of this question: proper aDNA authentication (post-mortem damage patterns, fragment-length distributions) and a contamination study, on top of a modular Nextflow workflow with curated reference databases, Kraken2/Bracken classification with aDNA-tuned parameters, and read-complexity QC.',
        engineering:
          'Provenance first: every stage is testable and traceable, so authenticity claims can be audited. It runs on SLURM/HPC with Apptainer containers, reproducible configs, and pinned environments.',
        stack: [
          { label: 'Nextflow', url: 'https://www.nextflow.io/' },
          { label: 'Apptainer', url: 'https://apptainer.org/' },
          { label: 'SLURM', url: 'https://slurm.schedmd.com/' }
        ]
      },
      {
        id: 'rnaseq-shvf18',
        rank: '03',
        title: 'Transcriptomics of an Anti-inflammatory Peptide',
        tagline: 'How a stapled thrombin peptide rewires the lung transcriptome over time.',
        role: 'Summer Research Project',
        org: 'Dr. Ganna Petruk Lab, Dermatology & Venereology, Lund University',
        period: 'Summer 2025',
        status: 'report',
        flagship: false,
        github: null,
        paper: null,
        media: { src: bmcGannaPetruk, alt: 'With Dr. Ganna Petruk in the lab at BMC, Lund' },
        problem:
          'Sepsis kills around 11 million people a year, largely through an overactive immune response. Thrombin-derived C-terminal peptides (TCPs) can dampen that response but degrade quickly. sHVF18 is a hydrocarbon-stapled, protease-resistant TCP analog — the question was what it actually does to gene expression in mouse lung, across six doses (0–500 µg) and two time points (3 h, 20 h).',
        solution:
          'I built the RNA-Seq analysis end to end in R: metadata curation, low-count filtering (57,010 → 29,714 genes), and four competing DESeq2 designs (drug-only, time-only, additive, interaction) compared via PCA variance and biological interpretability. Per-gene linear vs. logarithmic dose-response models and GO / KEGG enrichment (clusterProfiler) revealed a biphasic response: broad, saturable pro-inflammatory activation at 3 h, narrowing to focused regulatory, antiviral, and metabolic programs at 20 h.',
        engineering:
          'Model selection was the core design decision: the interaction model explained the most variance, but only the drug-only model yielded a shared gene signature for functional analysis. Making that trade-off explicit — and explaining why the shared signal vanishes over time — turned a statistical choice into a biological finding.',
        metrics: [
          { label: 'Core genes across all doses (3 h)', value: '17', note: 'all logarithmic dose-response' },
          { label: 'DEGs shared by 100 & 500 µg at 3 h', value: '312', note: 'narrowing to 7 at 20 h' },
          { label: 'Linear dose-response at 20 h', value: 'R² > 0.91', note: 'Acod1, Oas1a, Oas2' }
        ],
        stack: [
          { label: 'R', url: 'https://www.r-project.org/' },
          { label: 'DESeq2', url: 'https://bioconductor.org/packages/DESeq2/' },
          { label: 'clusterProfiler', url: 'https://bioconductor.org/packages/clusterProfiler/' },
          { label: 'GO / KEGG enrichment', url: 'https://www.genome.jp/kegg/' },
          { label: 'Transcriptomics', url: null }
        ]
      },
      {
        id: 'viral',
        rank: '01',
        title: 'Predicting Viral Mutations Before They Emerge',
        tagline: "A genetic score that anticipates pandemic mutations.",
        role: 'Project Intern (~1 year)',
        org: 'NCBS, Bengaluru',
        period: 'Jul 2023 – Jun 2024',
        status: 'published',
        github: 'https://github.com/ChandrashekarCR/foldx',
        paper: 'https://www.sciencedirect.com/science/article/pii/S0022283624003255',
        paperVenue: 'Journal of Molecular Biology (2024)',
        problem:
          'Single-stranded RNA viruses mutate quickly. For pandemic preparedness, the key question is: among all possible mutations, which ones are likely to emerge in reality?',
        solution:
          'I implemented a workflow around a codon-level genetic score and integrated it with FoldX structural impact modeling (ΔΔG, stability, interfaces), then validated it across SARS-CoV-2, Influenza, Ebola, Dengue, and Chikungunya.',
        engineering:
          'The critical work was computational robustness: a parallelized and fault-tolerant FoldX driver that auto-generates mutation jobs, distributes them across CPUs, runs triplicates, flags unstable runs, and aggregates clean outputs for analysis.',
        stack: [
          { label: 'Python', url: 'https://www.python.org/' },
          { label: 'FoldX', url: 'https://foldxsuite.crg.eu/' },
          { label: 'Structural bioinformatics', url: 'https://www.ebi.ac.uk/training/materials/structural-bioinformatics-materials/' },
          { label: 'pandas', url: 'https://pandas.pydata.org/docs/'}, 
          { label: 'Codon analysis', url: 'https://en.wikipedia.org/wiki/Codon_usage_bias'}
        ]
      },
      {
        id: 'mgps',
        rank: '04',
        title: 'mGPS Optimization',
        tagline: 'Metagenomic geolocation, 10× sharper than prior baselines.',
        role: 'Research Project · BINP37',
        org: 'Elhaik Lab, Lund University',
        period: 'Apr 2025 – Aug 2025',
        status: 'report',
        github: 'https://github.com/ChandrashekarCR/mgps_optimization',
        paper: null,
        problem:
          'Given microbial profiles from urban transit systems worldwide (MetaSUB), can we predict continent, city, and precise coordinates from composition alone?',
        solution:
          'I reframed it as a hierarchical prediction system (continent → city → coordinates) and built an ensemble stack with XGBoost, LightGBM, CatBoost, TabPFN, GrowNet, and neural models, with Optuna tuning and feature selection.',
        engineering:
          'The pipeline is modular and experiment-first: models are independently swappable, cross-validation and pruning are automated, and stacking/meta-learning is repeatable for large-scale iterations.',
        metrics: [
          { label: 'Median coordinate error', value: '13.7 km', note: 'vs 137 km baseline' },
          { label: 'Continent accuracy', value: '95%' },
          { label: 'City accuracy', value: '93%' }
        ],
        stack: [{ label: 'PyTorch', url: 'https://pytorch.org/' }, 
                { label: 'scikit-learn', url: 'https://scikit-learn.org/stable/' }, 
                { label: 'TabPFN', url: 'https://github.com/PriorLabs/tabpfn' }, 
                { label: 'Optuna', url: "https://github.com/optuna/optuna" }, 
                { label: 'GeoPandas', url: "https://geopandas.org/en/stable/"}
              ]
      },
      {
        id: 'hotdog-proteins',
        rank: '05',
        title: 'Hot Dog Proteins',
        tagline: 'Predicting function from fold, not sequence.',
        role: 'Bachelor Thesis',
        org: 'MS Ramaiah Institute of Technology',
        period: '2022 – 2023',
        status: 'report',
        flagship: false,
        github: 'https://github.com/ChandrashekarCR/hotdog_proteins',
        paper: null,
        problem:
          'Hot-dog-fold proteins often show low sequence similarity despite strong structural conservation, making sequence-only annotation unreliable. Many remain labeled as hypothetical proteins with unknown function.',
        solution:
          'I built a structure-first pipeline combining MSA interpretation (JalView), DALI-based structural similarity matrices, phylogenetic reconstruction from structural distances, and scikit-learn SVM classification with clustering to infer functional classes. Structures were processed with Biopython and visualized in PyMOL.',
        engineering:
          'This was an early end-to-end integration of structural bioinformatics and machine learning. It showed that fold-aware features can recover functional signals where sequence homology is weak, and it shaped my systems-thinking approach to protein-focused modeling.',
        stack: [
          { label: 'Biopython', url: "https://biopython.org/wiki/Documentation" },
          { label: 'scikit-learn', url: 'https://scikit-learn.org/stable/' },
          { label: 'PyMOL', url: 'https://pymol.org/' },
          { label: 'DALI server', url: "http://ekhidna2.biocenter.helsinki.fi/dali/"},
          { label: 'Phylogenetics', url: "https://www.ebi.ac.uk/training/online/courses/introduction-to-phylogenetics/what-is-phylogenetics/"},
          { label: 'Structural bioinformatics', url: 'https://www.ebi.ac.uk/training/materials/structural-bioinformatics-materials/' }
        ],
        highlights: [
          'Function prediction from structure, not sequence',
          'DALI structural-distance phylogenetics',
          'SVM classification of hypothetical proteins',
          'Recovered chaperone / lyase / hydrolase / transferase roles'
        ]
      },
      {
        id: 'tpmt',
        rank: '06',
        title: 'TPMT Pharmacogenomics',
        tagline: 'Where computation met a clinically relevant biological question.',
        role: 'Undergraduate Research',
        org: 'MS Ramaiah Institute of Technology',
        period: 'Apr 2021 – Aug 2021',
        status: 'published',
        github: null,
        paper: 'https://www.nature.com/articles/s41598-022-23488-z',
        paperVenue: 'Scientific Reports (2022)',
        problem:
          'TPMT variants strongly affect thiopurine drug metabolism and toxicity risk. The task was to identify previously uncharacterized high-risk variants.',
        solution:
          'I built a validated in-silico screening funnel combining sequence-level predictors, structure-based stability analysis, conservation, binding-pocket assessment, and molecular dynamics to prioritize pathogenic SNPs.',
        engineering:
          'This project taught a core principle I still follow: validate the pipeline on known cases first, then trust new predictions. Reproducibility before claims.',
          stack: [
            { label: 'GROMACS', url: 'https://www.gromacs.org/' },
            { label: 'PyMOL', url: 'https://pymol.org/' },
            { label: 'Web-based bioinformatics tools', url: null },
          ]
      }
    ],
    []
  );

  const researchProjects = useMemo(
    () => projects.filter((project) => project.id !== 'viral'),
    [projects]
  );
  const paidExperience = useMemo(
    () => projects.find((project) => project.id === 'viral'),
    [projects]
  );

  const [activeId, setActiveId] = useState(researchProjects[0].id);
  const activeProject = researchProjects.find((project) => project.id === activeId) ?? researchProjects[0];

  return (
    <Section title="Experience & Projects" id="experience">
      <div className="space-y-12">
        <div>
          <p className="font-mono text-xs uppercase tracking-wider text-secondary-foreground">// projects</p>
          <h3 className="mt-2 text-2xl md:text-3xl font-bold text-foreground">
            A biological story, told through software.
          </h3>
          <p className="mt-3 max-w-3xl text-muted-foreground">
            {researchProjects.length} projects, one philosophy: convert a biological question into a reproducible,
            interpretable, and deployable computational system.
          </p>
        </div>

        <div className="space-y-4">
          <h4 className="text-lg font-semibold text-foreground">Research Projects</h4>
          <div className="grid gap-6 md:grid-cols-[280px_1fr]">
          <nav className="space-y-2 md:sticky md:top-24 self-start">
            {researchProjects.map((project) => {
              const isActive = project.id === activeId;
              return (
                <button
                  key={project.id}
                  onClick={() => setActiveId(project.id)}
                  className={`w-full rounded-xl border p-4 text-left transition-all ${
                    isActive
                      ? 'border-primary bg-primary/10 text-foreground'
                      : 'border-border bg-card text-muted-foreground hover:border-primary/60 hover:text-foreground'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <span className="font-mono text-xs text-secondary-foreground">{project.rank}</span>
                    <div>
                      <p className="text-sm font-semibold">{project.title}</p>
                      <p className="mt-1 text-xs">{project.role}</p>
                    </div>
                  </div>
                </button>
              );
            })}
          </nav>

          <article className="rounded-2xl border border-border bg-card p-6 md:p-8 space-y-6">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <h4 className="text-2xl font-bold text-foreground">{activeProject.title}</h4>
                <p className="mt-1 text-secondary-foreground">{activeProject.tagline}</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  {activeProject.org} · {activeProject.period}
                </p>
              </div>

              {activeProject.status === 'active' ? (
                <span className="inline-flex items-center rounded-full border border-emerald-400/40 bg-emerald-500/10 px-3 py-1 text-xs font-mono text-emerald-300">
                  ● Active
                </span>
              ) : activeProject.status === 'completed' ? (
                <span className="inline-flex items-center rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs font-mono text-primary">
                  ✓ Completed
                </span>
              ) : activeProject.status === 'learning' ? (
                <span className="inline-flex items-center rounded-full border border-amber-400/40 bg-amber-500/10 px-3 py-1 text-xs font-mono text-amber-300">
                  ◐ In progress · learning
                </span>
              ) : activeProject.status === 'published' ? (
                <span className="inline-flex items-center rounded-full border border-border px-3 py-1 text-xs font-mono text-muted-foreground">
                  Published
                </span>
              ) : null}
            </div>

            {activeProject.metrics && (
              <div className="grid gap-3 sm:grid-cols-3">
                {activeProject.metrics.map((metric, index) => (
                  <div key={index} className="rounded-xl border border-border bg-background/50 p-4">
                    <p className="text-2xl font-extrabold text-primary">{metric.value}</p>
                    <p className="mt-1 text-xs text-muted-foreground">{metric.label}</p>
                    {metric.note && <p className="mt-1 text-[11px] text-secondary-foreground">{metric.note}</p>}
                  </div>
                ))}
              </div>
            )}

            <div className="space-y-4">
              <div>
                <p className="flex items-center gap-2 text-xs font-mono uppercase tracking-wide text-foreground">
                  <Sparkles size={13} className="text-primary" /> The biological problem
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{activeProject.problem}</p>
              </div>

              <div>
                <p className="flex items-center gap-2 text-xs font-mono uppercase tracking-wide text-foreground">
                  <Sparkles size={13} className="text-secondary-foreground" /> The engineering solution
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{activeProject.solution}</p>
              </div>

              <div>
                <p className="flex items-center gap-2 text-xs font-mono uppercase tracking-wide text-foreground">
                  <Sparkles size={13} className="text-purple-300" /> Why it matters as software
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{activeProject.engineering}</p>
              </div>

              {activeProject.next && (
                <div className="rounded-xl border border-dashed border-primary/50 bg-primary/5 p-4">
                  <p className="text-xs font-mono uppercase tracking-wide text-primary">What&apos;s next</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{activeProject.next}</p>
                </div>
              )}
            </div>

            {activeProject.media && (
              <img
                src={activeProject.media.src}
                alt={activeProject.media.alt}
                loading="lazy"
                className="w-full max-h-96 rounded-xl border border-border object-cover"
              />
            )}

            <div className="flex flex-wrap gap-2">
              {activeProject.stack.map((techItem) => {
                const tech = typeof techItem === 'string' ? { label: techItem, url: null } : techItem;
                return tech.url ? (
                  <a
                    key={tech.label}
                    href={tech.url}
                    target="_blank"
                    rel="noreferrer"
                    className="group rounded-md border border-border bg-background/40 px-2.5 py-1 text-xs font-mono text-muted-foreground transition-colors hover:border-primary/60 hover:text-primary hover:bg-primary/10 inline-flex items-center gap-1"
                  >
                    {tech.label}
                    <ExternalLink size={11} className="opacity-0 transition-opacity group-hover:opacity-100" />
                  </a>
                ) : (
                  <span
                    key={tech.label}
                    className="rounded-md border border-border bg-background/40 px-2.5 py-1 text-xs font-mono text-muted-foreground"
                  >
                    {tech.label}
                  </span>
                );
              })}
            </div>

            <div className="flex flex-wrap gap-3">
              {activeProject.github && (
                <a
                  href={activeProject.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-primary bg-primary px-4 py-2 text-sm font-medium text-black hover:bg-transparent hover:text-primary transition-colors"
                >
                  <Code2 size={16} /> View code
                </a>
              )}
              {activeProject.paper && (
                <a
                  href={activeProject.paper}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm text-muted-foreground hover:border-primary/60 hover:text-primary transition-colors"
                >
                  <FileText size={16} />
                  {activeProject.paperVenue ? `Read paper · ${activeProject.paperVenue}` : 'Read paper'}
                  <ExternalLink size={14} />
                </a>
              )}
            </div>
          </article>
          </div>
        </div>

        {paidExperience && (
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Professional Experience</h4>
            <article className="rounded-2xl border border-border bg-card p-6 md:p-8 space-y-6">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <h4 className="text-2xl font-bold text-foreground">{paidExperience.title}</h4>
                  <p className="mt-1 text-secondary-foreground">{paidExperience.tagline}</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {paidExperience.org} · {paidExperience.period}
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">{paidExperience.role}</p>
                </div>

                {paidExperience.status === 'published' ? (
                  <span className="inline-flex items-center rounded-full border border-border px-3 py-1 text-xs font-mono text-muted-foreground">
                    Published
                  </span>
                ) : (
                  <span className="inline-flex items-center rounded-full border border-border px-3 py-1 text-xs font-mono text-muted-foreground">
                    {paidExperience.status}
                  </span>
                )}
              </div>

              <div className="space-y-4">
                <div>
                  <p className="flex items-center gap-2 text-xs font-mono uppercase tracking-wide text-foreground">
                    <Sparkles size={13} className="text-primary" /> The biological problem
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{paidExperience.problem}</p>
                </div>

                <div>
                  <p className="flex items-center gap-2 text-xs font-mono uppercase tracking-wide text-foreground">
                    <Sparkles size={13} className="text-secondary-foreground" /> The engineering solution
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{paidExperience.solution}</p>
                </div>

                <div>
                  <p className="flex items-center gap-2 text-xs font-mono uppercase tracking-wide text-foreground">
                    <Sparkles size={13} className="text-purple-300" /> Why it matters as software
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{paidExperience.engineering}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {paidExperience.stack.map((techItem) => {
                  const tech = typeof techItem === 'string' ? { label: techItem, url: null } : techItem;
                  return tech.url ? (
                    <a
                      key={tech.label}
                      href={tech.url}
                      target="_blank"
                      rel="noreferrer"
                      className="group rounded-md border border-border bg-background/40 px-2.5 py-1 text-xs font-mono text-muted-foreground transition-colors hover:border-primary/60 hover:text-primary hover:bg-primary/10 inline-flex items-center gap-1"
                    >
                      {tech.label}
                      <ExternalLink size={11} className="opacity-0 transition-opacity group-hover:opacity-100" />
                    </a>
                  ) : (
                    <span
                      key={tech.label}
                      className="rounded-md border border-border bg-background/40 px-2.5 py-1 text-xs font-mono text-muted-foreground"
                    >
                      {tech.label}
                    </span>
                  );
                })}
              </div>

              <div className="flex flex-wrap gap-3">
                {paidExperience.github && (
                  <a
                    href={paidExperience.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-primary bg-primary px-4 py-2 text-sm font-medium text-black hover:bg-transparent hover:text-primary transition-colors"
                  >
                    <Code2 size={16} /> View code
                  </a>
                )}
                {paidExperience.paper && (
                  <a
                    href={paidExperience.paper}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm text-muted-foreground hover:border-primary/60 hover:text-primary transition-colors"
                  >
                    <FileText size={16} />
                    {paidExperience.paperVenue
                      ? `Read paper · ${paidExperience.paperVenue}`
                      : 'Read paper'}
                    <ExternalLink size={14} />
                  </a>
                )}
              </div>
            </article>
          </div>
        )}
      </div>
    </Section>
  );
}

export default Experience;
