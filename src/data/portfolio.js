/**
 * PORTFOLIO DATA CONFIGURATION
 * Sarthak Kumar Saxena — Personal Developer Portfolio
 * 
 * Edit this file to update profile details, projects, skills, certifications, 
 * education, or contact links.
 * 
 * NOTE: All placeholders are explicitly marked with [EDITABLE] or [PLACEHOLDER].
 */

export const personalInfo = {
  name: "Sarthak Kumar Saxena",
  preferredName: "Sarthak",
  initials: "SKS",
  title: "Software Developer & MCA Student",
  institution: "VIT Bhopal University",
  currentDegree: "Master of Computer Applications (MCA)",
  headline: "Building thoughtful digital experiences with code.",
  subheadline:
    "I'm an MCA student at VIT Bhopal University, exploring software development, data analytics, and machine learning to build useful, real-world technology.",
  location: "Bhopal, India",
  statusBadge: "MCA @ VIT Bhopal • Exploring AI & Software Systems",
  availabilityText: "Open to technical projects, collaborations & open-source",
  
  // Contact & Social Links
  // [EDITABLE]: Replace these placeholders with your actual URLs
  email: "sarthaksaxena991@gmail.com", // [PLACEHOLDER: Replace with your actual email]
  github: "https://github.com/your-username", // [PLACEHOLDER: Replace with your GitHub URL]
  linkedin: "https://www.linkedin.com/in/sarthak571",
  resumeUrl: "#", // Add your resume PDF URL when ready
  profileImage: "/profile.jpg", // Place your profile photo at public/profile.jpg
};

export const aboutData = {
  bioParagraphs: [
    "I am an MCA student at VIT Bhopal University with a foundational background in Computer Applications (BCA from MJPRU). My passion centers on engineering clean, scalable software and understanding how data analytics and machine learning can solve tangible problems.",
    "From constructing responsive user interfaces in React to designing structured backends in Node.js and exploring predictive data pipelines with Python, I value disciplined architecture, readable code, and intuitive user experiences.",
    "Driven by continuous learning, I am constantly deepening my knowledge in modern web systems, machine learning fundamentals, and intelligent agentic workflows."
  ],
  highlights: [
    {
      title: "Academic Focus",
      value: "MCA @ VIT Bhopal",
      description: "Advancing software engineering, data systems, and algorithmic thinking.",
      icon: "GraduationCap"
    },
    {
      title: "Core Mindset",
      value: "Python & Modern Web",
      description: "Bridging solid backend and data analysis with polished interfaces.",
      icon: "Code2"
    },
    {
      title: "Data Curiosity",
      value: "Analytics & ML",
      description: "Transforming telemetry and structured data into actionable insight.",
      icon: "Brain"
    },
    {
      title: "Engineering Style",
      value: "Clean & Systematic",
      description: "Prioritizing clean architecture, maintainability, and user-centric design.",
      icon: "Sparkles"
    }
  ],
  approachItems: [
    {
      number: "01",
      title: "Understand Before Building",
      text: "Deconstruct the core problem, user expectations, and edge cases before writing code."
    },
    {
      number: "02",
      title: "Clean & Modular Architecture",
      text: "Write decoupled, maintainable code with clear documentation and intuitive structure."
    },
    {
      number: "03",
      title: "Data-Informed Decisions",
      text: "Leverage empirical telemetry, metrics, and structured analytics to guide iterations."
    },
    {
      number: "04",
      title: "Polished User Experience",
      text: "Every interaction, typography choice, and response time matters for end-user delight."
    }
  ]
};

export const skillsCategories = [
  {
    category: "Programming",
    description: "Core languages for systems, algorithms, and application development",
    skills: [
      { name: "Python", level: "Primary", highlight: true, note: "Scripting, Data Analysis & Backends" },
      { name: "JavaScript (ES6+)", level: "Core", highlight: true, note: "Modern web, async flows, DOM" },
      { name: "SQL", level: "Working", highlight: false, note: "Relational queries, joins, filtering" }
    ]
  },
  {
    category: "Frontend Development",
    description: "Building responsive, modern, and accessible user interfaces",
    skills: [
      { name: "React", level: "Core", highlight: true, note: "Component hierarchy, hooks, state" },
      { name: "Vite", level: "Modern", highlight: false, note: "Fast build tooling & HMR" },
      { name: "HTML5", level: "Semantic", highlight: false, note: "Accessible, structured document markup" },
      { name: "CSS3", level: "Modern", highlight: false, note: "Flexbox, Grid, animations, responsive" },
      { name: "Tailwind CSS", level: "Utility", highlight: true, note: "Rapid, consistent design system styling" }
    ]
  },
  {
    category: "Backend & Systems",
    description: "API design, business logic, and server execution",
    skills: [
      { name: "Node.js", level: "Runtime", highlight: true, note: "Event-driven runtime environment" },
      { name: "Express.js", level: "Framework", highlight: true, note: "RESTful routing, middleware, APIs" },
      { name: "REST APIs", level: "Protocol", highlight: false, note: "HTTP methods, JSON serialization, status codes" }
    ]
  },
  {
    category: "Databases & Storage",
    description: "Document stores and cloud data persistence",
    skills: [
      { name: "MongoDB", level: "NoSQL", highlight: true, note: "Document collections, aggregation, schemas" },
      { name: "Supabase", level: "Backend/DB", highlight: false, note: "PostgreSQL layer, auth, realtime sync" }
    ]
  },
  {
    category: "Data Science & AI Foundations",
    description: "Data manipulation, analytical computation, and ML concepts",
    skills: [
      { name: "NumPy", level: "Library", highlight: true, note: "N-dimensional arrays, matrix operations" },
      { name: "pandas", level: "Library", highlight: true, note: "DataFrames, cleaning, series aggregation" },
      { name: "Matplotlib", level: "Visualization", highlight: false, note: "Plotting distributions, trends & telemetry" },
      { name: "Statistics & Probability", level: "Foundation", highlight: false, note: "Variability, hypothesis basics, distributions" },
      { name: "Machine Learning Fundamentals", level: "Learning", highlight: true, note: "Supervised classification, regression concepts" }
    ]
  }
];

export const projectsData = [
  {
    id: "health-tracker",
    title: "Health Tracker",
    tagline: "Disease-risk exploration & personal health metrics presentation",
    category: "Web & Healthcare",
    technologies: ["React", "JavaScript", "CSS3", "Vite"],
    description:
      "A health-tracking project exploring disease-risk information and health-related data presentation. Implemented with an intuitive interface for visualizing health parameters and categorizing risk indicators.",
    longDescription:
      "The Health Tracker project is designed to help users inspect vital body metrics, explore common disease-risk markers, and comprehend structured wellness summaries without medical jargon. It features modular dashboard cards, risk categorization helpers, and responsive viewports for desktop and mobile devices.",
    keyFeatures: [
      "Dynamic metric input and categorized health summaries",
      "Disease-risk factor visualization and status badges",
      "Interactive health dashboard designed for clarity and accessibility",
      "Clean client-side state flow and responsive layout"
    ],
    previewType: "health",
    accentColor: "from-emerald-500/20 to-teal-500/20",
    badgeColor: "text-emerald-400 border-emerald-500/30 bg-emerald-500/10",
    // [PLACEHOLDER]: Add your actual repository or demo link when ready
    githubUrl: "https://github.com/your-username/health-tracker",
    liveUrl: "#", // Leave as "#" if demo not hosted
    isRealLink: false
  },
  {
    id: "railway-tracking",
    title: "Railway Engineering Work & Notice Tracking",
    tagline: "MCA project for infrastructure notices & maintenance tracking",
    category: "MCA Project / Infrastructure",
    technologies: ["React", "Node.js", "Express.js", "Railway APIs"],
    description:
      "An MCA project exploring railway engineering work and notice tracking with a modern web interface and railway-related data integration to keep engineering teams informed on corridor statuses.",
    longDescription:
      "Engineered as an MCA academic project, this system centralizes track maintenance schedules, engineering work notices, and operational track advisories. It simplifies the discovery of active repair zones and track blocks through categorized notice feeds, date filtering, and streamlined status visualization.",
    keyFeatures: [
      "Categorized engineering work order and safety notice tracking",
      "Corridor and zone-based maintenance filtering",
      "RESTful API backend in Express.js for notice ingestion and indexing",
      "High-contrast operational status dashboard"
    ],
    previewType: "railway",
    accentColor: "from-amber-500/20 to-orange-500/20",
    badgeColor: "text-amber-400 border-amber-500/30 bg-amber-500/10",
    // [PLACEHOLDER]: Add your actual repository or demo link when ready
    githubUrl: "https://github.com/your-username/railway-notice-tracker",
    liveUrl: "#",
    isRealLink: false
  },
  {
    id: "novomind-ai",
    title: "NovomindAI",
    tagline: "Conversational assistant exploring TF-IDF retrieval & Supabase storage",
    category: "AI & Conversational UX",
    technologies: ["Python", "Flask", "Supabase", "TF-IDF"],
    description:
      "An AI-focused chatbot and web project exploring conversational experiences, natural language processing fundamentals with TF-IDF, and Supabase cloud persistence.",
    longDescription:
      "NovomindAI explores the bridge between foundational NLP algorithms and conversational user interfaces. Built with a lightweight Python/Flask backend and Supabase persistence, it leverages Term Frequency-Inverse Document Frequency (TF-IDF) similarity matching to route user queries to contextual answers swiftly.",
    keyFeatures: [
      "TF-IDF vector matching for lightweight semantic response selection",
      "Persistent conversation threads stored in Supabase",
      "Asynchronous message dispatch with fluid typing indicators",
      "Python Flask microservice architecture"
    ],
    previewType: "ai",
    accentColor: "from-indigo-500/20 to-violet-500/20",
    badgeColor: "text-indigo-400 border-indigo-500/30 bg-indigo-500/10",
    // [PLACEHOLDER]: Add your actual repository or demo link when ready
    githubUrl: "https://github.com/your-username/novomind-ai",
    liveUrl: "#",
    isRealLink: false
  },
  {
    id: "factory-telemetry",
    title: "Data Analytics — Factory Telemetry",
    tagline: "Daikibo factory machine telemetry analysis & operational insights",
    category: "Data Analytics",
    technologies: ["Python", "pandas", "NumPy", "Matplotlib"],
    description:
      "An analytics project based on the Deloitte Forage Daikibo telemetry exercise, exploring machine data, factory activity, and operational insights from sensor time-series.",
    longDescription:
      "Completed in the context of the Deloitte Forage Data Analytics virtual experience, this project analyzes time-series telemetry generated by Daikibo industrial machinery. It processes sensor temperature, rotation speed, and downtime logs using Python and pandas to spot statistical anomalies and identify maintenance bottlenecks.",
    keyFeatures: [
      "Exploratory Data Analysis (EDA) on multi-machine sensor records",
      "Detection of statistical deviations indicating equipment stress",
      "Matplotlib visualizations tracking operational downtime trends",
      "Structured summary reporting on operational efficiency"
    ],
    previewType: "telemetry",
    accentColor: "from-cyan-500/20 to-blue-500/20",
    badgeColor: "text-cyan-400 border-cyan-500/30 bg-cyan-500/10",
    // [PLACEHOLDER]: Add your actual repository or demo link when ready
    githubUrl: "https://github.com/your-username/daikibo-factory-telemetry",
    liveUrl: "#",
    isRealLink: false
  }
];

export const certificationsData = [
  {
    title: "Oracle Agentic AI Foundations Associate",
    issuer: "Oracle",
    status: "Passed",
    type: "Industry Certification",
    verified: true,
    description:
      "Validated foundational knowledge of Agentic AI paradigms, autonomous workflows, large language model tooling, and architectural patterns for multi-agent systems.",
    keyTopics: [
      "Agentic AI concepts and reasoning loops",
      "Autonomous tool-calling and orchestration",
      "Enterprise AI foundation architectures"
    ],
    credentialUrl: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=cfcda3d7332528dfd8a57b251cb890d86821b4e02277e67f297bd67419be0ded",
    badgeIcon: "Oracle"
  },
  {
    title: "ISRO / IIRS Certificate",
    issuer: "ISRO — Indian Institute of Remote Sensing (IIRS)",
    status: "Certificate Available",
    type: "Verified Course Certificate",
    verified: true,
    description:
      "Certificate issued through the ISRO Indian Institute of Remote Sensing learning portal. Open the verification page to view the certificate details.",
    keyTopics: [
      "ISRO / IIRS learning program",
      "Certificate verification through the official IIRS portal"
    ],
    credentialUrl: "https://isrolms.iirs.gov.in/mod/customcert/verify_certificate.php?code=vfKZBabWAs&qrcode=1",
    badgeIcon: "ISRO"
  },
  {
    title: "Deloitte Data Analytics Virtual Experience",
    issuer: "Deloitte (via Forage)",
    status: "Completed",
    type: "Virtual Experience Program",
    verified: true,
    description:
      "Hands-on practical simulation investigating factory telemetry data (Daikibo exercise), diagnosing operational anomalies, and structuring data-driven recommendations.",
    keyTopics: [
      "Telemetry dataset inspection and cleaning",
      "Operational downtime statistical analysis",
      "Client-ready analytical insight synthesis"
    ],
    credentialUrl: "#", // [PLACEHOLDER: Add your Forage certificate link]
    badgeIcon: "Deloitte"
  }
];

export const ongoingLearning = [
  {
    topic: "Machine Learning Fundamentals",
    focus: "Supervised and unsupervised algorithms, model evaluation techniques, and scikit-learn workflows.",
    status: "In Progress"
  },
  {
    topic: "Data Analysis with Python",
    focus: "Advanced pandas data wrangling, statistical hypothesis testing, and interactive visualization.",
    status: "Active Exploration"
  },
  {
    topic: "Modern Frontend Systems",
    focus: "Component design systems, performance optimization, and fluid accessible animations in React.",
    status: "Continuous Practice"
  }
];

export const educationData = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "VIT Bhopal University",
    status: "Pursuing / Current",
    period: "Ongoing", // [EDITABLE: e.g. 2024 - 2026]
    details:
      "Deepening computer science foundations with coursework in advanced software engineering, database management, cloud technologies, and emerging AI/ML practices.",
    highlights: [
      "Focus: Software Development, Python, and Data Systems",
      "Academic Project: Railway Engineering Work & Notice Tracking"
    ]
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "MJPRU",
    status: "Completed",
    period: "Completed", // [EDITABLE: e.g. 2021 - 2024]
    details:
      "Established foundational knowledge across programming languages, data structures, relational database management, and object-oriented programming.",
    highlights: [
      "Core courses: C, C++, Data Structures, Database Systems, Web Basics",
      "Foundation for modern full-stack web and Python development"
    ]
  }
];

export const contactInfo = {
  heading: "Have an interesting idea? Let's build something meaningful.",
  subheading:
    "Whether you're looking to discuss a project, explore technical ideas, or connect about software engineering and data analytics, I'd love to hear from you.",
  email: "sarthaksaxena991@gmail.com", // [PLACEHOLDER: Update with your primary email]
  github: "https://github.com/your-username", // [PLACEHOLDER: Update with your GitHub profile]
  linkedin: "https://www.linkedin.com/in/sarthak571",
  location: "Bhopal, India",
  responseNotice: "Open to inquiries, academic discussions & software opportunities."
};
