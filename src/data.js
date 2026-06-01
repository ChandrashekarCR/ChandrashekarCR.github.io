import msritCertificate from './assets/msrit_degree.pdf';
import lundTranscript from './assets/lund_transcript.pdf';
import copyRightSoftware from './assets/copyrights_software.pdf';
import fullPortrait from './assets/full_portait.jpg';
import taLundUniversity from './assets/ta_lund_university.webp';
import violinPics from './assets/violin_pics.jpg';
import centralVtuSingleShot from './assets/central_vtu_single_shot.jpeg';
import vtuFootballChampions from './assets/vtu_football_champions.jpg';

export const personalInfo = {
  name: 'Chandrashekar CR',
  role: 'Bioinformatics Solution Architect',
  tagline: 'Bioinformatics, built as end-to-end systems.',
  about:
    'Bioinformatician with experience in applying machine learning to biological problems, from predicting viral mutations in pandemic response to building ensemble models for metagenomic analysis. Comfortable working across the data science pipeline—feature engineering, model selection, hyperparameter tuning, and error analysis.',
  email: 'shekarlp18@gmail.com',
  phone: '+91-8431982577 / +46-768953677',
  linkedin: 'https://www.linkedin.com/in/chandrashekar-c-r/',
  github: 'https://github.com/ChandrashekarCR',
  location: 'Lund, Sweden / Bengaluru, India'
};

export const aboutSection = {
  title: 'Bioinformatics as systems design',
  paragraphs: [
    'I am a bioinformatics engineer focused on developing practical solutions for biological research. My work combines bioinformatics, machine learning, scientific computing, and software engineering to support data-intensive biology.',
    'Through my training in biotechnology, I built a strong foundation in biology. I also expanded my technical background through self-learning and elective coursework in computer science.',
    'My view of bioinformatics is that it is discipline for answering meaningful biological questions through computer science, not just a collection of tools.',
    'I approach bioinformatics with a strong emphasis on workflow design, data analysis, and research automation.',
    'I specialize in building end-to-end bioinformatics pipelines for biological data, integrating workflow orchestration, machine learning, backend systems, APIs, and scientific infrastructure.',
    'What shapes my work is the combination of biological understanding and engineering thinking, which helps me design solutions that are robust and adaptable.',
    'I am also interested in improving my knowledge of software engineering, computational infrastructure, and advanced bioinformatics methods.',
    'My long-term interests include bioinformatics infrastructure, AI-driven bioinformatics systems, workflow orchestration, and scientific platform engineering.'
  ],
  quickFacts: [
    'Based in Lund, Sweden',
    'MSc Bioinformatics, Lund University (2024–2026)',
    'BE Biotechnology, MSRIT — CGPA 9.2/10',
    'Teaching Assistant — Python, Bash, sequence analysis',
    'Carnatic classical violinist',
    'VTU Central Zone football winners 2023; State Football Runners-up 2023'
  ]
};

export const education = [
  {
    institution: 'Lund University',
    location: 'Lund, Sweden',
    degree: 'MSc Bioinformatics',
    duration: '2024 - 2026',
    certificate: lundTranscript
  },
  {
    institution: 'MS Ramaiah Institute of Technology',
    location: 'Bengaluru, India',
    degree: 'BE Biotechnology',
    duration: '2019 - 2023',
    details: 'CGPA: 9.2/10.0',
    certificate: msritCertificate
  }
];

export const moreSections = [
  {
    id: 'teaching',
    title: 'Teaching',
    eyebrow: 'Lund University',
    summary:
      'Direct technical support, mentorship, and hands-on guidance in reproducible bioinformatics workflows.',
    items: [
      {
        role: 'Teaching Assistant (Technical Support & Mentorship)',
        institution: 'Lund University',
        duration: 'Aug 2025 - Present',
        points: [
          'Provided direct technical support to 30+ students in Python, Bash scripting, and sequence analysis.',
          'Guided students in algorithmic frameworks for population genetics and deploying Streamlit apps.'
        ],
        media: [
          {
            src: taLundUniversity,
            alt: 'Teaching assistant work at Lund University',
            caption: 'TA work at Lund University',
            className: 'aspect-[16/9]'
          }
        ]
      }
    ]
  },
  {
    id: 'extracurriculars',
    title: 'Extracurriculars',
    eyebrow: 'Beyond Work',
    summary:
      'Music and football — the parts of my life that keep the work grounded.',
    items: [
      {
        title: 'Carnatic Classical Violinist',
        description:
          'Student of renowned violinist Shri HK Venkatram. Performed in concerts for Raagamalika in Sweden, Art to Heart Institute in Norway, Sadhakam and Nrityapada in Denmark.',
        media: [
          {
            src: violinPics,
            alt: 'Carnatic violin performance photo',
            caption: 'Violin performance',
            className: 'aspect-[2/3]'
          }
        ]
      },
      {
        title: 'Football',
        description:
          "Played for Blitz 'C' division and Ramaiah Institute of Technology. Winners of VTU Central Zone and Runners-up in State-level Engineering Tournament.",
        media: [
          {
            src: centralVtuSingleShot,
            alt: 'Football team single shot at VTU Central Zone',
            caption: 'VTU Central Zone',
            className: 'aspect-[3/4]'
          },
        ]
      }
    ]
  }
];

export const teaching = moreSections.find((section) => section.id === 'teaching')?.items ?? [];
export const extracurriculars = moreSections.find((section) => section.id === 'extracurriculars')?.items ?? [];

export const skills = {
  'Bioinformatics & Workflows': [
    { label: 'Snakemake', url: 'https://snakemake.readthedocs.io/' },
    { label: 'Nextflow', url: 'https://www.nextflow.io/' },
    { label: 'Genomics', url: '' },
    { label: 'Transcriptomics', url: '' },
    { label: 'Metagenomics', url: '' },
    { label: 'Proteomics', url: '' },
    { label: 'Variant Analysis', url: '' },
    { label: 'Structural Bioinformatics', url: '' }
  ],
  'Machine Learning & Data Science': [
    { label: 'PyTorch', url: 'https://pytorch.org/' },
    { label: 'scikit-learn', url: 'https://scikit-learn.org/stable/' },
    { label: 'pandas', url: 'https://pandas.pydata.org/docs/' },
    { label: 'NumPy', url: 'https://numpy.org/' },
    { label: 'RAG', url: 'https://www.ibm.com/think/topics/retrieval-augmented-generation' },
    { label: 'LLMs', url: '' },
    { label: 'MLflow', url: 'https://mlflow.org/' }
  ],
  'Development & Tools': [
    { label: 'Python', url: 'https://www.python.org/' },
    { label: 'Bash', url: 'https://www.gnu.org/software/bash/' },
    { label: 'R', url: 'https://www.r-project.org/' },
    { label: 'SQL', url: 'https://www.postgresql.org/docs/current/sql.html' },
    { label: 'Linux', url: 'https://www.linux.org/' },
    { label: 'SLURM', url: 'https://slurm.schedmd.com/' },
    { label: 'Git/GitHub', url: 'https://docs.github.com/en/get-started/using-git/about-git' },
    { label: 'Docker/Singularity', url: 'https://www.docker.com/' },
    { label: 'FastAPI', url: 'https://fastapi.tiangolo.com/' },
    { label: 'SQLite', url: 'https://sqlite.org/' },
    { label: 'Celery', url: 'https://docs.celeryq.dev/' },
    { label: 'Redis', url: 'https://redis.io/' }
  ],
  'Wet Laboratory': [
    { label: 'Western blot', url: '' },
    { label: 'SDS-PAGE', url: '' },
    { label: 'ELISA', url: '' },
    { label: 'PCR', url: '' },
    { label: 'Protein purification', url: '' },
    { label: 'Spectrophotometry', url: '' }
  ]
};

export const publications = [
  {
    title:
      'Computational Analysis of the Accumulation of Mutations in Therapeutically Important RNA Viral Proteins During Pandemics with Special Emphasis on SARS-CoV-2',
    venue: 'Journal of Molecular Biology',
    link: 'https://doi.org/10.1016/j.jmb.2024.168716'
  },
  {
    title:
      'A bioinformatics approach to the identification of novel deleterious mutations of human TPMT through validated screening and molecular dynamics',
    venue: 'Scientific Reports',
    link: 'https://doi.org/10.1038/s41598-022-23488-z'
  },
  {
    title: 'Comparative Analysis of Fungal Secretomes and Host-Pathogen Defense Response Validation',
    venue: 'Indian Journal of Biochemistry and Biophysics',
    link: 'https://or.niscpr.res.in/index.php/IJBB/article/view/18676'
  },
  {
    title: 'Computer Software Work: in-silico prediction of secreted effector and elicitor candidates',
    venue: 'Copyright (SW-19912/2024, Govt. of India)',
    link: copyRightSoftware
  }
];
