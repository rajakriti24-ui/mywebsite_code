import { Project, SkillCategory, Credential, CuriosityItem } from '../types';

export const PERSONAL_INFO = {
  name: 'Akriti Raj',
  badge: 'OPEN TO INTERNSHIP OPPORTUNITIES',
  headline: "Hi, I'm Akriti Raj.",
  subtitle: 'B.Tech AI & Data Science Student building with Python, C, Web Technologies & IoT.',
  bio: 'Motivated AI & Data Science student passionate about software development, AI/ML, data science, web development, and IoT. I enjoy turning ideas into practical projects while continuously improving my technical and problem-solving skills.',
  github: 'https://github.com/rajakriti24-ui',
  githubHandle: 'github.com/rajakriti24-ui',
  email: 'rajakriti24@gmail.com',
  phone: '+91 83888 59981',
  university: 'REVA University',
  degree: 'Bachelor of Technology in Artificial Intelligence & Data Science',
  graduationYear: '2026',
  coordinates: '13.1190° N, 77.5878° E',
  nodeId: 'SYS.AI_DS.INIT',
};

export const ABOUT_TEXTS = {
  displayWords: ['Learning.', 'Building.', 'Solving.', 'Growing.'],
  p1: "I'm a B.Tech Artificial Intelligence & Data Science student at REVA University. I have hands-on experience with Python, C, HTML, CSS, SQL, Git/GitHub, Arduino and IoT through academic projects and technical activities.",
  p2: "I enjoy problem solving, learning new technologies, building projects, and collaborating with others. My current interests include software development, AI/ML, data science, web development and IoT.",
  processPhilosophy: [
    { label: 'Learn', icon: '•', note: 'Absorbing algorithmic foundations, system architectures, and syntax.' },
    { label: 'Build', icon: '•', note: 'Translating conceptual designs into concrete, working code artifacts.' },
    { label: 'Collaborate', icon: '•', note: 'Reviewing pull requests, pairing on technical challenges, and sharing insights.' },
    { label: 'Grow', icon: '•', note: 'Iterative refinement through feedback, benchmarking, and continuous practice.', active: true },
  ],
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'programming',
    categoryTag: 'LANGUAGE',
    title: 'Programming',
    iconName: 'code',
    skills: ['Python', 'C'],
  },
  {
    id: 'frontend',
    categoryTag: 'FRONTEND',
    title: 'Web Development',
    iconName: 'layout',
    skills: ['HTML', 'CSS'],
  },
  {
    id: 'database',
    categoryTag: 'PERSISTENCE',
    title: 'Database',
    iconName: 'database',
    skills: ['SQL', 'MySQL'],
  },
  {
    id: 'tools',
    categoryTag: 'WORKFLOW',
    title: 'Tools',
    iconName: 'git-branch',
    skills: ['Git', 'GitHub'],
  },
  {
    id: 'hardware',
    categoryTag: 'EMBEDDED',
    title: 'Hardware & IoT',
    iconName: 'cpu',
    skills: ['Arduino', 'IoT'],
  },
  {
    id: 'core-skills',
    categoryTag: 'FOUNDATION',
    title: 'Core Skills',
    iconName: 'compass',
    skills: ['Problem Solving', 'Logical Thinking', 'Programming Fundamentals'],
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'project-1',
    projectNumber: 'PROJECT 01 • GRAPHICS ENGINE',
    category: 'GRAPHICS ENGINE',
    title: '2D Graphics Editor',
    description: 'Developed a menu-driven, character-based graphics editor using a 2D array canvas.',
    tags: ['C', '2D ARRAYS', 'STRUCTURES'],
    filterCategory: 'C',
    visualType: 'ascii-canvas',
    featuresOrConceptsTitle: 'KEY ARCHITECTURAL FEATURES:',
    featuresOrConcepts: [
      'Rectangle, line, circle & triangle drawing',
      'Shape storage via structs & arrays',
      'Unique shape IDs & soft deletion',
      'Canvas boundary check & redrawing',
    ],
    actionType: 'github',
    githubUrl: 'https://github.com/rajakriti24-ui',
  },
  {
    id: 'project-2',
    projectNumber: 'PROJECT 02 • LOGIC GAME',
    category: 'LOGIC GAME',
    title: 'Guess the Number',
    description: 'Developed an interactive number-guessing game using Python to strengthen programming logic and problem-solving skills.',
    tags: ['PYTHON'],
    filterCategory: 'PYTHON',
    visualType: 'binary-search',
    featuresOrConceptsTitle: 'IMPLEMENTED CONCEPTS:',
    featuresOrConcepts: [
      'Random number generation',
      'User input handling',
      'Conditional logic',
      'Game loops',
    ],
    actionType: 'github',
    githubUrl: 'https://github.com/rajakriti24-ui',
  },
  {
    id: 'project-3',
    projectNumber: 'PROJECT 03 • DATA & TEXT',
    category: 'DATA & TEXT',
    title: 'Movie Review Project',
    description: 'Developed a Python-based movie review project as part of academic learning, applying Python programming concepts and logical problem solving.',
    tags: ['PYTHON'],
    filterCategory: 'PYTHON',
    visualType: 'text-parser',
    featuresOrConceptsTitle: 'SUMMARY ARCHITECTURE:',
    featuresOrConcepts: [
      'Application of Python file structures, dictionary mappings, rating aggregation, and algorithmic filtering.',
    ],
    actionType: 'coming-soon',
    statusBadge: 'Academic Staging',
  },
  {
    id: 'project-4',
    projectNumber: 'PROJECT 04 • HARDWARE SYSTEM',
    category: 'HARDWARE SYSTEM',
    title: 'Weather Station',
    description: 'Developed an IoT-based weather monitoring project using Arduino and sensors for sensor-based data collection and microcontroller programming.',
    tags: ['ARDUINO', 'IOT', 'SENSORS'],
    filterCategory: 'IOT',
    visualType: 'weather-sensor',
    featuresOrConceptsTitle: 'EMBEDDED ARCHITECTURE:',
    featuresOrConcepts: [
      'Sensor data acquisition, analog/digital signal calibration, continuous telemetry streaming, and embedded logic.',
    ],
    actionType: 'coming-soon',
    statusBadge: 'Physical Prototyping',
  },
];

export const CREDENTIALS: Credential[] = [
  {
    id: 'ibm-python-101',
    issuer: 'IBM',
    title: 'Python 101 for Data Science',
    subtitle: 'Core Language & Data Analysis',
    verified: true,
  },
  {
    id: 'ibm-data-viz',
    issuer: 'IBM',
    title: 'Data Visualization with Python',
    subtitle: 'Plotting, Charts & Visual Analytics',
    verified: true,
  },
  {
    id: 'ibm-data-analysis',
    issuer: 'IBM',
    title: 'Data Analysis with Python',
    subtitle: 'Wrangling, Statistics & Modeling',
    verified: true,
  },
  {
    id: 'wadhwani',
    issuer: 'WADHWANI FOUNDATION',
    title: 'Certified Program',
    subtitle: 'Professional & Employability Skills',
    verified: true,
  },
];

export const LEADERSHIP_ITEM = {
  tag: 'CAMPUS INITIATIVE',
  title: 'Dell Campus Ambassador',
  program: 'DAP Season 5 • Dell Technologies',
  description: 'Served as a Dell Campus Ambassador for DAP Season 5, participating in campus engagement and technology-focused initiatives.',
  competencies: ['Communication', 'Networking', 'Teamwork', 'Student Engagement', 'Leadership'],
};

export const CURIOSITIES: CuriosityItem[] = [
  { id: 'c1', title: 'Software Development', iconName: 'code' },
  { id: 'c2', title: 'Artificial Intelligence', iconName: 'brain' },
  { id: 'c3', title: 'Machine Learning', iconName: 'network' },
  { id: 'c4', title: 'Data Science', iconName: 'chart' },
  { id: 'c5', title: 'Web Development', iconName: 'layout' },
  { id: 'c6', title: 'Internet of Things', iconName: 'wifi' },
];

export const PERSPECTIVE = {
  title: 'Beyond code',
  subtitle: 'Sketch artist with an interest in creativity, observation, patience and attention to detail.',
  motto: 'Technology first. Creativity second. Both feed the same analytical instinct.',
};
