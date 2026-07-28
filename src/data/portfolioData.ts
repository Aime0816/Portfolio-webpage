import { Project, SkillCategory, ExperienceItem } from '../types';

// Image asset paths
const civiclensImg = '/src/assets/images/civiclens_ai_preview_1785225507841.jpg';
const maternalHubImg = '/src/assets/images/maternal_hub_preview_1785225521356.jpg';
const shopMsImg = '/src/assets/images/shop_ms_preview_1785225533718.jpg';
const studentMsImg = '/src/assets/images/student_ms_preview_1785225547225.jpg';
const aimeAvatarImg = '/src/assets/images/aime_avatar_1785225559644.jpg';

export const PERSONAL_INFO = {
  name: "Aime Nsengiyumva",
  title: "Software Engineer | AI Developer | UI/UX Designer",
  roles: [
    "Software Engineer",
    "AI & ML Developer",
    "UI/UX Designer",
    "Full-Stack Web Developer"
  ],
  avatar: aimeAvatarImg,
  location: "Kigali, Rwanda (Open to Global Remote Roles)",
  email: "aime.nsengiyumva@gmail.com",
  github: "https://github.com/aimensengiyumva",
  linkedin: "https://linkedin.com/in/aime-nsengiyumva",
  twitter: "https://x.com/aime_nsengi",
  bio: "I am a passionate Software Engineer and AI Developer dedicated to engineering intelligent, high-impact web applications with scalable architectures and intuitive user interfaces. With expertise across full-stack development, modern machine learning APIs, and design systems, I transform complex ideas into reliable digital products.",
  aboutDetailed: [
    "My journey in tech is driven by a deep curiosity about how intelligent algorithms and refined human-centered design can converge to solve pressing real-world challenges. Whether it's building AI-driven community governance tools, healthcare platforms for maternal well-being, or high-throughput e-commerce engines, I focus on clean code, performance, and accessibility.",
    "I specialize in React, Next.js, TypeScript, Tailwind CSS, Node.js, Express, PHP, MySQL, MongoDB, and integrate state-of-the-art AI models like Gemini and OpenAI to craft seamless, interactive digital experiences."
  ],
  stats: [
    { label: "Projects Completed", value: "15+" },
    { label: "Hackathons Won", value: "3" },
    { label: "Technologies Mastered", value: "12+" },
    { label: "Code Commit Count", value: "1.2k+" }
  ],
  passions: [
    {
      title: "Artificial Intelligence & LLMs",
      description: "Leveraging generative AI, prompt engineering, and Gemini API capabilities to build smart automation and cognitive user interfaces."
    },
    {
      title: "Scalable Full-Stack Engineering",
      description: "Architecting modular, type-safe web applications with modern frameworks, optimized database schemas, and microservice APIs."
    },
    {
      title: "Pixel-Perfect UI/UX Design",
      description: "Designing dark-mode aesthetic interfaces with fluid responsiveness, accessibility standards, and intuitive user workflows."
    }
  ]
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Frontend",
    description: "Building responsive, modern, and accessible user interfaces with dynamic interactivity.",
    iconName: "Layout",
    skills: [
      { name: "React", level: 92, highlight: true, experienceYears: "3+ yrs" },
      { name: "Next.js", level: 90, highlight: true, experienceYears: "3+ yrs" },
      { name: "TypeScript", level: 88, highlight: true, experienceYears: "3+ yrs" },
      { name: "Tailwind CSS", level: 95, highlight: true, experienceYears: "3+ yrs" },
      { name: "JavaScript (ES6+)", level: 94, highlight: false, experienceYears: "4+ yrs" },
      { name: "HTML5 & CSS3", level: 96, highlight: false, experienceYears: "4+ yrs" }
    ]
  },
  {
    title: "Backend",
    description: "Architecting secure server-side logic, RESTful APIs, and scalable backend workflows.",
    iconName: "Server",
    skills: [
      { name: "Node.js", level: 88, highlight: true, experienceYears: "3+ yrs" },
      { name: "Express.js", level: 90, highlight: true, experienceYears: "3+ yrs" },
      { name: "PHP", level: 82, highlight: false, experienceYears: "2+ yrs" },
      { name: "REST API Design", level: 92, highlight: true, experienceYears: "3+ yrs" }
    ]
  },
  {
    title: "Database",
    description: "Designing efficient relational and non-relational database models and queries.",
    iconName: "Database",
    skills: [
      { name: "MySQL", level: 86, highlight: true, experienceYears: "3+ yrs" },
      { name: "MongoDB", level: 84, highlight: true, experienceYears: "2+ yrs" },
      { name: "ORM & Query Optimization", level: 82, highlight: false, experienceYears: "2+ yrs" }
    ]
  },
  {
    title: "AI",
    description: "Integrating Large Language Models, generative AI APIs, and intelligent automation into web platforms.",
    iconName: "Sparkles",
    skills: [
      { name: "Gemini API", level: 92, highlight: true, experienceYears: "2+ yrs" },
      { name: "OpenAI API", level: 88, highlight: true, experienceYears: "2+ yrs" },
      { name: "Prompt Engineering", level: 94, highlight: true, experienceYears: "2+ yrs" },
      { name: "AI Agent Workflows", level: 85, highlight: false, experienceYears: "1+ yrs" }
    ]
  },
  {
    title: "Tools",
    description: "Essential development environment, version control, and design tooling.",
    iconName: "Wrench",
    skills: [
      { name: "Git & GitHub", level: 92, highlight: true, experienceYears: "4+ yrs" },
      { name: "VS Code", level: 95, highlight: false, experienceYears: "4+ yrs" },
      { name: "Figma", level: 88, highlight: true, experienceYears: "3+ yrs" },
      { name: "Vercel / Cloud Run Deployment", level: 88, highlight: false, experienceYears: "2+ yrs" }
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "civiclens-ai",
    title: "CivicLens AI",
    tagline: "AI-Powered Community Governance & Civic Issue Tracking Platform",
    description: "An intelligent civic engagement application that leverages computer vision and LLMs to automatically categorize, geotag, and prioritize public infrastructure reports submitted by citizens.",
    longDescription: "CivicLens AI bridges the gap between citizens and local government authorities. Citizens upload photos and descriptions of infrastructure hazards (e.g., potholes, faulty streetlights, water leaks). The Gemini AI vision model analyzes the photo, automatically extracts severity level and category, geotags the location, and routes it directly to municipal maintenance teams.",
    image: civiclensImg,
    category: "AI & ML",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Gemini API", "Node.js", "MongoDB"],
    githubUrl: "https://github.com/aimensengiyumva/civiclens-ai",
    liveUrl: "https://civiclens-ai.demo.app",
    featured: true,
    keyFeatures: [
      "AI Computer Vision analysis for instant damage categorization and severity ranking",
      "Interactive map interface with geotagged cluster markers and real-time status updates",
      "Citizen feedback tracking dashboard with SMS & Email notification triggers",
      "Analytics portal for local council administrators to track resolution SLAs"
    ],
    metrics: "Reduced average municipal response time by 40% in simulated pilot tests."
  },
  {
    id: "maternalhub",
    title: "MaternalHub",
    tagline: "Digital Healthcare & Maternal Well-being Platform",
    description: "A comprehensive maternal healthcare portal providing expectant mothers with personalized pregnancy milestone tracking, appointment scheduling, health vitals logging, and AI health advisory.",
    longDescription: "MaternalHub was engineered to improve healthcare access for pregnant women, particularly in underserviced clinics. It offers structured trimester guidance, automated appointment reminders, emergency call triggers, and an offline-first data sync feature.",
    image: maternalHubImg,
    category: "Full Stack",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Node.js", "Express", "MySQL", "OpenAI API"],
    githubUrl: "https://github.com/aimensengiyumva/maternalhub",
    liveUrl: "https://maternalhub.demo.app",
    featured: true,
    keyFeatures: [
      "Personalized weekly pregnancy progress dashboard and nutrition guides",
      "Doctor appointment scheduling with clinic calendar integration",
      "AI Health Assistant for instant non-diagnostic maternal advice and symptom triaging",
      "Exportable medical history PDF summaries for clinic visits"
    ],
    metrics: "Awarded Top Healthcare Innovation at Regional Tech Summit."
  },
  {
    id: "shopms",
    title: "ShopMS",
    tagline: "Full-Stack E-Commerce & Multi-Vendor Inventory Management Engine",
    description: "A robust e-commerce and store management web application featuring real-time product inventory control, Stripe payment checkout integration, dynamic cart, and sales analytics.",
    longDescription: "ShopMS is built for merchants seeking a lightweight, lightning-fast store front coupled with a powerful backend inventory management dashboard. Handles complex order states, product variants, discount coupon codes, and real-time stock alerts.",
    image: shopMsImg,
    category: "Full Stack",
    technologies: ["React", "Next.js", "Tailwind CSS", "PHP", "MySQL", "Node.js", "Stripe API"],
    githubUrl: "https://github.com/aimensengiyumva/shopms",
    liveUrl: "https://shopms.demo.app",
    featured: true,
    keyFeatures: [
      "Sub-second page loading speed with optimized product image caching and grid filters",
      "Multi-vendor administrative dashboard with stock level alerts and revenue charts",
      "Secure Stripe and Mobile Money checkout integration",
      "Customer order history portal with live status tracking"
    ],
    metrics: "Processed 5,000+ test transactions with 99.9% uptime."
  },
  {
    id: "student-management-system",
    title: "Student Management System",
    tagline: "Academic Portal for Student Records, Attendance, and Performance Analytics",
    description: "An end-to-end academic management application designed for educational institutions to streamline enrollment, attendance tracking, course grading, and parent reporting.",
    longDescription: "Built with a focus on simplicity, security, and role-based access control (RBAC). Administrators, teachers, and students have tailored dashboards to submit assignments, compute GPA metrics, record attendance, and generate term report cards.",
    image: studentMsImg,
    category: "Web Apps",
    technologies: ["JavaScript", "HTML", "CSS", "PHP", "MySQL", "Tailwind CSS"],
    githubUrl: "https://github.com/aimensengiyumva/student-management-system",
    liveUrl: "https://studentms.demo.app",
    featured: false,
    keyFeatures: [
      "Role-Based Access Control (Admin, Teacher, Student, Parent)",
      "Automated GPA calculator and grade distribution chart generation",
      "Attendance log system with monthly report exports",
      "Direct messaging channel between teachers and parents"
    ],
    metrics: "Deployed across 3 pilot schools managing over 1,200 active student records."
  }
];

export const EXPERIENCE_ITEMS: ExperienceItem[] = [
  {
    id: "exp-1",
    type: "work",
    role: "Full-Stack & AI Software Engineer",
    organization: "InnovateTech Labs",
    location: "Kigali, Rwanda",
    period: "2024 - Present",
    description: [
      "Engineered responsive full-stack web applications utilizing React, Next.js, TypeScript, Node.js, and Tailwind CSS.",
      "Integrated Gemini and OpenAI APIs into client platforms, developing custom prompt workflows and AI feature modules.",
      "Optimized MySQL and MongoDB queries, reducing API endpoint response times by 35%.",
      "Collaborated with cross-functional product teams to deliver 10+ client web applications on tight deadlines."
    ],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Gemini API", "Node.js", "MySQL"],
    featured: true
  },
  {
    id: "exp-2",
    type: "hackathon",
    role: "1st Place Winner - Civic AI Hackathon",
    organization: "East Africa Tech Innovators",
    location: "Kigali, Rwanda",
    period: "2025",
    description: [
      "Designed and built CivicLens AI in 48 hours, pitching the solution to a panel of regional technology leaders.",
      "Implemented live Gemini vision model image categorization for community hazard detection.",
      "Received Best AI Application Award and seed funding for platform deployment."
    ],
    technologies: ["React", "Gemini API", "TypeScript", "Tailwind CSS", "Express"],
    award: "1st Place Winner & Best AI Innovation",
    featured: true
  },
  {
    id: "exp-3",
    type: "work",
    role: "Frontend Developer & UI/UX Specialist",
    organization: "Apex Digital Solutions",
    location: "Remote",
    period: "2023 - 2024",
    description: [
      "Crafted sleek, high-performing user interfaces and interactive dashboards for e-commerce and SaaS products.",
      "Translated Figma wireframes into reusable, accessible React and Tailwind CSS component libraries.",
      "Improved web core vitals and mobile user accessibility across all core product screens."
    ],
    technologies: ["React", "Tailwind CSS", "JavaScript", "Figma", "HTML/CSS"],
    featured: false
  },
  {
    id: "exp-4",
    type: "hackathon",
    role: "Top 3 Finalist - Global HealthTech Challenge",
    organization: "Health Hack Africa",
    location: "Virtual",
    period: "2024",
    description: [
      "Developed the prototype for MaternalHub to tackle maternal mortality access gaps using digital web tools.",
      "Built offline-first synchronization logic and AI health consultation modules."
    ],
    technologies: ["React", "TypeScript", "PHP", "MySQL", "OpenAI API"],
    award: "3rd Place Winner - Impact Award",
    featured: false
  },
  {
    id: "exp-5",
    type: "education",
    role: "B.Sc. in Computer Science & Software Engineering",
    organization: "University of Rwanda / Tech Institute",
    location: "Rwanda",
    period: "2021 - 2025",
    description: [
      "Graduated with High Honors in Software Engineering.",
      "Core coursework: Algorithms & Data Structures, Web Development, Database Management Systems, Machine Learning Foundations, Software Architecture."
    ],
    technologies: ["Data Structures", "Algorithms", "Software Engineering", "Databases"],
    featured: false
  }
];
