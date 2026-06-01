import msritCertificate from "./assets/msrit_degree.pdf";
import lundTranscript from "./assets/lund_transcript.pdf"


export const personalInfo = {
  name: "Chandrashekar CR",
  role: "Bioinformatics Solution Architect",
  tagline: "Bioinformatics, built as end-to-end systems.",
  about: "Bioinformatician with experience in applying machine learning to biological problems, from predicting viral mutations in pandemic response to building ensemble models for metagenomic analysis. Comfortable working across the data science pipeline—feature engineering, model selection, hyperparameter tuning, and error analysis.",
  email: "shekarlp18@gmail.com",
  phone: "+91-8431982577 / +46-768953677",
  linkedin: "https://www.linkedin.com/in/chandrashekar-c-r/",
  github: "https://github.com/ChandrashekarCR",
  location: "Lund, Sweden / Bengaluru, India"
};

export const aboutSection = {
title: "Bioinformatics as systems design",
paragraphs: [
  "I am a bioinformatics engineer focused on developing practical solutions for biological research. My work combines bioinformatics, machine learning, scientific computing, and software engineering to support data-intensive biology.",
  "Through my training in biotechnology, I built a strong foundation in biology. I also expanded my technical background through self-learning and elective coursework in computer science.",
  "My view of bioinformatics is that it is discipline for answering meaningful biological questions through computer science, not just a collection of tools.",
  "I approach bioinformatics with a strong emphasis on workflow design, data analysis, and research automation.",
  "I specialize in building end-to-end bioinformatics pipelines for biological data, integrating workflow orchestration, machine learning, backend systems, APIs, and scientific infrastructure.",
  "What shapes my work is the combination of biological understanding and engineering thinking, which helps me design solutions that are robust and adaptable.",
  "I am also interested in improving my knowledge of software engineering, computational infrastructure, and advanced bioinformatics methods.",
  "My long-term interests include bioinformatics infrastructure, AI-driven bioinformatics systems, workflow orchestration, and scientific platform engineering."
],

quickFacts: [
"Based in Lund, Sweden",
"MSc Bioinformatics, Lund University (2024–2026)",
"BE Biotechnology, MSRIT — CGPA 9.2/10",
"Teaching Assistant — Python, Bash, sequence analysis",
"Carnatic classical violinist — concerts across Scandinavia",
"VTU Central Zone football winners"
]
};


export const education = [
  {
    institution: "Lund University",
    location: "Lund, Sweden",
    degree: "MSc Bioinformatics",
    duration: "2024 - 2026",
    certificate: lundTranscript
  },
  {
    institution: "MS Ramaiah Institute of Technology",
    location: "Bengaluru, India",
    degree: "BE Biotechnology",
    duration: "2019 - 2023",
    details: "CGPA: 9.2/10.0",
    certificate: msritCertificate
  }
];


export const skills = {
  "Bioinformatics & Workflows": ["Nextflow", "Snakemake", "Genomics", "Transcriptomics", "Metagenomics", "Proteomics", "Variant Analysis", "Structural Bioinformatics"],
  "Machine Learning & Data Science": ["PyTorch", "scikit-learn", "pandas", "NumPy", "RAG", "LLMs", "MLflow"],
  "Development & Tools": ["Python", "Bash", "R", "SQL", "Linux", "SLURM", "Git/GitHub", "Docker/Singularity", "FastAPI", "SQLite", "Celery", "Redis"],
  "Wet Laboratory": ["Western blot", "SDS-PAGE", "ELISA", "PCR", "Protein purification", "Spectrophotometry"]
};

export const publications = [
  {
    title: "Computational Analysis of the Accumulation of Mutations in Therapeutically Important RNA Viral Proteins During Pandemics with Special Emphasis on SARS-CoV-2",
    venue: "Journal of Molecular Biology",
    link: "https://doi.org/10.1016/j.jmb.2024.168716"
  },
  {
    title: "A bioinformatics approach to the identification of novel deleterious mutations of human TPMT through validated screening and molecular dynamics",
    venue: "Scientific Reports",
    link: "https://doi.org/10.1038/s41598-022-23488-z"
  },
  {
    title: "Comparative Analysis of Fungal Secretomes and Host-Pathogen Defense Response Validation",
    venue: "Indian Journal of Biochemistry and Biophysics",
    link: "https://or.niscpr.res.in/index.php/IJBB/article/view/18676"
  },
  {
    title: "Computer Software Work: in-silico prediction of secreted effector and elicitor candidates",
    venue: "Copyright (SW-19912/2024, Govt. of India)",
    link: "https://www.linkedin.com/in/chandrashekar-c-r/overlay/Certifications/748200192/treasury/?profileId=ACoAAD5q9vEBWir9eNRpi6J13qfFp_syJ4epY6c"
  }
];

export const teaching = [
  {
    role: "Teaching Assistant (Technical Support & Mentorship)",
    institution: "Lund University",
    duration: "Aug 2025 - Present",
    points: [
      "Provided direct technical support to 30+ students in Python, Bash scripting, and sequence analysis.",
      "Trained users on industry-standard tools (PLINK, Git) and reproducible research standards.",
      "Guided students in algorithmic frameworks for population genetics and deploying Streamlit apps."
    ]
  }
];

export const extracurriculars = [
  {
    title: "Carnatic Classical Violinist",
    description: "Student of renowned violinist Shri HK Venkatram. Performed in concerts for Raagamalika in Sweden, Art to Heart Institute in Norway, Sadhakam and Nrityapada in Denmark."
  },
  {
    title: "Football",
    description: "Played for Blitz 'C' division and Ramaiah Institute of Technology. Winners of VTU Central Zone and Runners-up in State-level Engineering Tournament."
  },
  {
    title: "Martial Arts (Kickboxing & Muay Thai)",
    description: "Won an intra-level amateur Kickboxing championship at Raw Combat Fitness, Mathikere. Trained intensively for two years."
  }
];
