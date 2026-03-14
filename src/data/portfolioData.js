import {
  FaAws,
  FaDocker,
  FaGithub,
  FaJava,
  FaJenkins,
  FaLinkedinIn,
  FaNodeJs,
  FaReact,
} from 'react-icons/fa';
import {
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiSpringboot,
  SiTailwindcss,
  SiThreedotjs,
} from 'react-icons/si';

export const personalInfo = {
  name: 'Kunal Pawar',
  role: 'Software Engineer at Idox',
  tagline: 'Full Stack Developer building immersive products with code, motion, and 3D depth.',
  location: 'Pune, India',
  email: 'kunalpawar.dev@example.com',
  shortBio:
    'I craft modern, scalable digital products across frontend, backend, and interactive 3D experiences. My work blends premium UI, smooth product thinking, and solid engineering fundamentals.',
  stats: [
    { label: 'Years Building', value: '3+' },
    { label: 'Projects Delivered', value: '20+' },
    { label: 'Core Stack', value: 'React + Java' },
  ],
  socialLinks: [
    { label: 'GitHub', href: 'https://github.com/', icon: FaGithub },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/', icon: FaLinkedinIn },
  ],
};

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Stack', href: '#stack' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export const highlights = [
  {
    title: 'Premium Frontend Engineering',
    description:
      'Responsive interfaces with elegant motion, layered depth, and polished interactions that feel world-class on every screen.',
  },
  {
    title: 'Scalable Backend Systems',
    description:
      'REST APIs, Spring Boot services, integrations, and reliable backend workflows designed for maintainability and performance.',
  },
  {
    title: 'Immersive 3D Experiences',
    description:
      'Interactive scenes, motion-rich storytelling, and WebGL-driven interfaces that create memorable product experiences.',
  },
];

export const skills = [
  {
    category: 'Frontend',
    items: ['JavaScript', 'React', 'Three.js', 'HTML5', 'CSS3', 'Responsive UI', 'Animation Systems'],
  },
  {
    category: 'Backend',
    items: ['Java', 'Spring Boot', 'REST APIs', 'Spring Data JPA', 'Microservices Concepts', 'Exception Handling'],
  },
  {
    category: 'Data & Infra',
    items: ['MySQL', 'PostgreSQL', 'MongoDB', 'AWS Basics', 'Docker', 'Jenkins', 'CI/CD'],
  },
  {
    category: 'Ways of Working',
    items: ['Agile', 'Code Reviews', 'Unit Testing', 'Bug Fixing', 'Feature Analysis', 'Mentoring'],
  },
];

export const techOrbit = [
  { name: 'React', icon: FaReact },
  { name: 'Three.js', icon: SiThreedotjs },
  { name: 'JavaScript', icon: SiJavascript },
  { name: 'Java', icon: FaJava },
  { name: 'Spring Boot', icon: SiSpringboot },
  { name: 'Node.js', icon: FaNodeJs },
  { name: 'Docker', icon: FaDocker },
  { name: 'AWS', icon: FaAws },
  { name: 'MySQL', icon: SiMysql },
  { name: 'PostgreSQL', icon: SiPostgresql },
  { name: 'MongoDB', icon: SiMongodb },
  { name: 'Tailwind Mindset', icon: SiTailwindcss },
  { name: 'Jenkins', icon: FaJenkins },
];

export const experience = [
  {
    company: 'Idox',
    role: 'Software Engineer',
    period: 'Current',
    description:
      'Designing and delivering enterprise-grade product features, improving backend services, collaborating across teams, and contributing to polished user experiences on complex systems.',
    bullets: [
      'Build and maintain features across frontend and backend using Java, Spring Boot, JavaScript, and React.',
      'Analyze requirements, estimate implementation effort, and convert feature requests into maintainable technical solutions.',
      'Collaborate with QA, frontend, and DevOps teams for releases across dev, SIT, UAT, and production environments.',
      'Improve bug resolution speed and mentor junior developers for smoother team execution.',
    ],
  },
  {
    company: 'Independent GDPR Project',
    role: 'Full Stack Developer',
    period: 'Project-based',
    description:
      'Handled feature delivery, API work, database design, and test coverage while keeping quality and reliability high in a regulation-focused product context.',
    bullets: [
      'Created and maintained REST APIs and domain logic with clean layering and reusable service design.',
      'Worked on entities, controllers, validations, and test cases for stable feature releases.',
      'Performed developer testing and supported end-to-end flow understanding for smooth execution.',
    ],
  },
  {
    company: 'Mauli Project Management Pvt. Limited',
    role: 'Software Developer',
    period: 'Previous',
    description:
      'Gained hands-on experience delivering software features, debugging issues, and strengthening core full stack engineering skills in a production environment.',
    bullets: [
      'Supported feature implementation and maintenance in business-critical applications.',
      'Contributed to code fixes, stability improvements, and day-to-day development workflows.',
    ],
  },
];

export const projects = [
  {
    title: 'FusionLive Workflow Modernization',
    stack: ['Java', 'Spring', 'Struts', 'ExtJS', 'Enterprise UI'],
    blurb:
      'Revamped legacy workflow experiences with better status handling, improved UI behavior, and safer validation flows for document-driven product modules.',
    impact: 'Reduced friction in approval and package flows while keeping business logic stable in a complex legacy environment.',
  },
  {
    title: '3D Developer Portfolio Experience',
    stack: ['React', 'Three.js', 'Framer Motion', 'Vite'],
    blurb:
      'A futuristic, motion-first developer portfolio with immersive depth, interactive sections, cinematic transitions, and responsive 3D storytelling.',
    impact: 'Showcases frontend creativity while reinforcing full stack credibility and product taste.',
  },
  {
    title: 'Payment Flow Architecture Concept',
    stack: ['Spring Boot', 'REST APIs', 'Webhook Design', 'Microservices'],
    blurb:
      'Designed a realistic payment processing architecture flow featuring secure API integration, webhook orchestration, and modular service boundaries.',
    impact: 'Demonstrates backend system thinking, fintech-style flow design, and production-oriented API structure.',
  },
  {
    title: 'GDPR Compliance Service Module',
    stack: ['Java', 'Spring Boot', 'JUnit', 'PostgreSQL'],
    blurb:
      'Built compliance-oriented service layers with entity modeling, validations, reusable service logic, and developer test coverage for safer delivery.',
    impact: 'Strengthened reliability and maintainability in a regulation-sensitive project space.',
  },
];

export const contactCards = [
  {
    title: 'Email',
    value: 'kunalpawar.dev@example.com',
    href: 'mailto:kunalpawar.dev@example.com',
  },
  {
    title: 'Location',
    value: 'Pune, India',
    href: '#contact',
  },
  {
    title: 'Availability',
    value: 'Open for strong engineering roles and exciting product collaborations',
    href: '#contact',
  },
];
