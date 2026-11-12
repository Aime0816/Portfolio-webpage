import type { Project, SkillCategory, ExperienceItem } from "../types";
export const PERSONAL_INFO = {
  name: "Aime Nsengiyumva",
  title: "Full-Stack Web Developer & System Analyst",
  roles: ["Full-Stack Web Developer", "System Analyst", "Ishyalabs Co-founder"],
  avatar: "/images/aime.webp",
  location: "Kigali, Rwanda",
  email: "aime200816@gmail.com",
  github: "https://github.com/Aime0816",
  linkedin: "https://linkedin.com/in/aime-nsengiyumva-dev",
  bio: "I turn practical problems into useful web applications — from community communication to AI-assisted reporting. I work across requirements, interfaces, APIs, and databases to bring ideas to life.",
  aboutDetailed: [
    "I am a full-stack web developer and system analyst based in Kigali, Rwanda. My work combines responsive interfaces, backend development, database design, and AI integrations.",
    "As a co-founder and company manager at Ishyalabs, I coordinate projects with our team and contribute to development. We are building a company offering websites, software, mobile applications, and graphic design.",
  ],
  stats: [{label:"Featured projects",value:"4"},{label:"Based in",value:"Kigali"},{label:"Company",value:"Ishyalabs"},{label:"Focus",value:"Full Stack"}],
  passions: [{title:"Useful software",description:"Build around real needs and clear workflows."},{title:"AI integration",description:"Explore practical applications of generative AI."},{title:"Teamwork",description:"Coordinate projects and build with others."}],
  availability: "Open to project enquiries, internships & collaboration",
};
export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Frontend",
    description: "Responsive interfaces for real workflows.",
    iconName: "Layout",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "HTML & CSS",
    ].map((name) => ({ name })),
  },
  {
    title: "Backend",
    description: "APIs, authentication, and application logic.",
    iconName: "Server",
    skills: ["Node.js", "Express", "PHP", "REST APIs", "Role-based access"].map(
      (name) => ({ name }),
    ),
  },
  {
    title: "Database",
    description: "Data models that support the product.",
    iconName: "Database",
    skills: ["MySQL", "MongoDB", "Database design"].map((name) => ({ name })),
  },
  {
    title: "AI",
    description: "Integrating AI into useful applications.",
    iconName: "Sparkles",
    skills: ["Gemini API", "OpenRouter", "Prompt design"].map((name) => ({
      name,
    })),
  },
  {
    title: "Tools",
    description: "From requirements to delivery.",
    iconName: "Wrench",
    skills: [
      "Git & GitHub",
      "VS Code",
      "Postman",
      "System analysis",
      "Vercel",
      "Railway",
    ].map((name) => ({ name })),
  },
];
export const PROJECTS: Project[] = [
  {
    id: "idbk-chat",
 image: "/images/idbk-chat.svg",
    title: "IDBK Chat",
    tagline: "A place for the community to connect.",
    description:
      "A community messaging project for students, teachers, and parents, with group conversations and announcements.",
    longDescription:
      "Designed to bring conversations and announcements into one shared space. Current development focuses on self-registration, category-based groups, teacher-group approval, and message requests.",
    category: "Full Stack",
    technologies: ["React", "TypeScript", "Express"],
    githubUrl: "https://github.com/Aime0816/IDBK-Chat",
    liveUrl: "",
    featured: true,
    keyFeatures: [
      "Community conversations and announcements",
      "Role-aware registration and group access",
      "Notification and messaging workflows",
    ],
    status: "In development",
    number: "01",
    color: "blue",
  },
  {
    id: "the-quiz",
 image: "/images/the-quiz.svg",
    title: "The Quiz",
    tagline: "Bring a little competition to the room.",
    description:
      "An interactive quiz project for group events, bringing questions, teams, and scores into a shared experience.",
    longDescription:
      "Built around hosting an engaging quiz event. The project brings team participation and score tracking together, with question rounds across different topics.",
    category: "Web Apps",
    technologies: ["React", "JavaScript"],
    githubUrl: "https://github.com/Aime0816/The_Quiz",
    liveUrl: "",
    featured: true,
    keyFeatures: [
      "Team-based participation",
      "Question rounds across topics",
      "Score tracking for event hosts",
    ],
    status: "Event project",
    number: "02",
    color: "purple",
  },
  {
    id: "civiclens-ai",
 image: "/images/civiclens-ai.svg",
    title: "CivicLens AI",
    tagline: "Turn citizen reports into clearer next steps.",
    description:
      "An AI-assisted infrastructure reporting prototype that helps turn photos and descriptions into structured reports.",
    longDescription:
      "Explores how Gemini vision can help people report infrastructure issues and help teams understand their category, severity, and next steps. This is a prototype; no production impact figures are claimed.",
    category: "AI & ML",
    technologies: ["Next.js", "TypeScript", "Node.js", "MongoDB", "Gemini API"],
    githubUrl: "",
    liveUrl: "",
    featured: true,
    keyFeatures: [
      "Photo-based infrastructure reports",
      "AI-assisted categorization and severity assessment",
      "Role-based review workflows",
    ],
    status: "Prototype",
    number: "03",
    color: "green",
  },
  {
    id: "maternalhub",
 image: "/images/maternalhub-preview.jpg",
    title: "MaternalHub",
    tagline: "Exploring better access to maternal support.",
    description:
      "A collaborative maternal-health project focused on making pregnancy information and care-related workflows easier to access.",
    longDescription:
      "A team project exploring a clearer digital experience for maternal support. Features and individual contributions should be read in the context of the repository; no clinical outcomes or awards are claimed.",
    category: "Full Stack",
    technologies: ["React"],
    githubUrl: "https://github.com/06bruce/Maternal_Client",
    liveUrl: "https://maternalhub.vercel.app/",
    featured: true,
    keyFeatures: [
      "Maternal-support interface",
      "Collaborative development",
      "Accessible information design",
    ],
    status: "Team project",
    number: "04",
    color: "rose",
  },
];
export const EXPERIENCE_ITEMS: ExperienceItem[] = [
  {
    id: "ishyalabs",
    type: "work",
    role: "Co-founder & Company Manager",
    organization: "Ishyalabs",
    location: "Rwanda",
    period: "2026 — Present",
    description: [
      "Coordinate projects, responsibilities, and team communication.",
      "Contribute to development alongside the team, from requirements to delivery.",
      "Help organize our website, software, mobile app, and graphic design services.",
    ],
    technologies: [
      "Project coordination",
      "System analysis",
      "Web development",
    ],
  },
  {
    id: "linkfy",
    type: "work",
    role: "Software Development Internship",
    organization: "LinkFy Connect",
    location: "Kigali, Rwanda",
    period: "2026",
    description: [
      "Software development internship focused on practical web development and collaboration.",
    ],
    technologies: ["JavaScript", "PHP", "MySQL"],
  },
  {
    id: "hackathons",
    type: "hackathon",
    role: "Hackathon Participant",
    organization: "Umurava & Frontiers",
    location: "Kigali, Rwanda",
    period: "2026",
    description: [
      "Collaborated on prototypes using web technologies and generative AI.",
      "Worked through problem definition, implementation, and presenting ideas with a team.",
    ],
    technologies: ["Prototyping", "AI integration", "Teamwork"],
  },
];
