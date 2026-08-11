import { Project, SkillCategory, ExperienceItem } from '../types';

// Image asset paths
const civiclensImg = '/src/assets/images/civiclens_ai_preview_1785225507841.jpg';
const maternalHubImg = '/src/assets/images/maternal_hub_preview_1785225521356.jpg';
const shopMsImg = '/src/assets/images/shop_ms_preview_1785225533718.jpg';
const VeriLensImg = '/src/assets/images/student_ms_preview_1785225547225.jpg';
const aimeAvatarImg = '/src/assets/images/Me.png';

export const PERSONAL_INFO = {
  name: "Aime Nsengiyumva",
  title: "Software Developer | AI Developer | UI/UX Designer",
  roles: [
    "Software Developer",
    "AI & ML Developer",
    "UI/UX Designer",
    "Full-Stack Web Developer"
  ],
  avatar: aimeAvatarImg,
  location: "Kigali, Rwanda (Open to Global Remote Roles)",
  email: "aime200816@gmail.com",
  github: "https://github.com/Aime0816",
  linkedin: "https://linkedin.com/in/aime-nsengiyumva-dev",
  twitter: "https://x.com/aime_nsengi",
  bio: "I am a passionate Software Developer and AI Developer dedicated to engineering intelligent, high-impact web applications with scalable architectures and intuitive user interfaces. With expertise across full-stack development, modern machine learning APIs, and design systems, I transform complex ideas into reliable digital products.",
  aboutDetailed: [
    "My journey in tech is driven by a deep curiosity about how intelligent algorithms and refined human-centered design can converge to solve pressing real-world challenges. Whether it's building AI-driven community governance tools, healthcare platforms for maternal well-being, or high-throughput e-commerce engines, I focus on clean code, performance, and accessibility.",
    "I specialize in React, Next.js, TypeScript, Tailwind CSS, Node.js, Express, PHP, MySQL, MongoDB, and integrate state-of-the-art AI models like Gemini and OpenAI to craft seamless, interactive digital experiences."
  ],
  stats: [
    { label: "Projects Completed", value: "15+" },
    { label: "Hackathons ", value: "3" },
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
      { name: "React", level: 92, highlight: true, experienceYears: "2+ yrs" },
      { name: "Next.js", level: 90, highlight: true, experienceYears: "2+ yrs" },
      { name: "TypeScript", level: 88, highlight: true, experienceYears: "2+ yrs" },
      { name: "Tailwind CSS", level: 95, highlight: true, experienceYears: "2+ yrs" },
      { name: "JavaScript (ES6+)", level: 94, highlight: false, experienceYears: "3+ yrs" },
      { name: "HTML5 & CSS3", level: 96, highlight: false, experienceYears: "3+ yrs" }
    ]
  },
  {
    title: "Backend",
    description: "Architecting secure server-side logic, RESTful APIs, and scalable backend workflows.",
    iconName: "Server",
    skills: [
      { name: "Node.js", level: 88, highlight: true, experienceYears: "2+ yrs" },
      { name: "Express.js", level: 90, highlight: true, experienceYears: "2+ yrs" },
      { name: "PHP", level: 82, highlight: false, experienceYears: "2+ yrs" },
      { name: "REST API Design", level: 92, highlight: true, experienceYears: "2+ yrs" }
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
    githubUrl: "https://github.com/Aime0816/CivicLens-AI",
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
    githubUrl: "https://github.com/06bruce/Maternal_Client",
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
    githubUrl: "https://github.com/Aime0816/shopms",
    liveUrl: "https://shop.page.gd/",
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
  id: "verilens-ai",
  title: "VeriLens AI",
  tagline: "AI-Powered Fact-Checking and Misinformation Detection Platform",
  description: "An intelligent platform that helps users verify news, social media posts, images, and online claims using advanced AI analysis and trusted information sources to combat misinformation.",

  longDescription:
    "VeriLens AI is designed to reduce the spread of fake news and misleading content by combining Generative AI, Natural Language Processing (NLP), and image verification techniques. Users can submit text, screenshots, links, or images, and the system analyzes the content, identifies suspicious claims, compares them with reliable sources, explains why a claim is true, false, or misleading, and provides a confidence score. The platform is built to support journalists, students, researchers, organizations, and the general public in making informed decisions based on verified information.",

  image: VeriLensImg,
    category: "AI & ML",

  technologies: [
    "Next.js",
    "React",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Google Gemini AI",
    "Tailwind CSS",
    "Cloudinary"
  ],

  githubUrl: "https://github.com/Aime0816/verilens-ai",

  liveUrl: "https://verilens.demo.app",

  featured: true,

  keyFeatures: [
    "AI-powered claim verification for text, URLs, and social media posts",
    "Fake news and misinformation detection with confidence scoring",
    "Image authenticity and manipulation analysis",
    "Evidence-based explanations generated by AI",
    "Cross-reference claims against trusted public sources",
    "Multilingual support for wider accessibility",
    "User-friendly dashboard with verification history",
    "Real-time AI insights to improve digital literacy"
  ],

  metrics:
    "Designed to help users identify misinformation within seconds, improving trust in online information while promoting responsible digital communication."
}
];

export const EXPERIENCE_ITEMS: ExperienceItem[] = [
  {
    id: "exp-1",
    type: "work",
    role: "Software Development Intern",
    organization: "LinkFy Connect",
    location: "Kigali, Rwanda",
    period: "2026 - Present",
    description: [
      "Contributing to the development and maintenance of modern web applications using JavaScript,NodeJs, Express.js, PHP, MySQL, and Tailwind CSS.",
      "Collaborating with senior developers to implement new features, debug applications, and improve overall system performance.",
      "Applying software engineering best practices including Git version control, database design, and responsive UI development.",
      "Gaining hands-on experience in real-world software development workflows and agile collaboration."
    ],
    technologies: [
      "JavaScript",
      "Node.js",
      "Express.js",
      "PHP",
      "MySQL",
      "Tailwind CSS",
      "Git",
      "HTML",
      "CSS"
    ],
    featured: true
  },

  {
    id: "exp-2",
    type: "hackathon",
    role: "Participant - Google Generative AI Hackathon",
    organization: "Frontiers PAIO Hackathon",
    location: "Kigali, Rwanda",
    period: "2026",
    description: [
      "Collaborated in a multidisciplinary team to design AI-powered healthcare solutions addressing challenges in Africa.",
      "Explored Google's latest Generative AI models to prototype innovative healthcare applications.",
      "Participated in rapid ideation, solution architecture, product design, and technical implementation within a competitive hackathon environment."
    ],
    technologies: [
      "Google Gemini",
      "Generative AI",
      "Next.js",
      "Node.js",
      "MongoDB",
      "Tailwind CSS"
    ],
    featured: true
  },

  {
    id: "exp-3",
    type: "education",
    role: "Full-Stack Software Developer",
    organization: "Personal & Academic Projects",
    location: "Rwanda",
    period: "2024 - Present",
    description: [
      "Designed and developed multiple full-stack web applications including Student Management System, ShopMS, MaternalHub, and VeriLens AI.",
      "Built secure authentication systems, REST APIs, role-based access control, and responsive user interfaces.",
      "Integrated AI services and modern web technologies to create intelligent, user-focused digital solutions.",
      "Managed complete software development lifecycle from requirements analysis to deployment."
    ],
    technologies: [
      "Node.js",
      "Express.js",
      "React",
      "Next.js",
      "PHP",
      "MySQL",
      "MongoDB",
      "Tailwind CSS",
      "Gemini API"
    ],
    featured: true
  },

  {
    id: "exp-4",
    type: "education",
    role: "Software Development Student",
    organization: "Institut Don Bosco Kabarondo TSS",
    location: "Rwanda",
    period: "2023 - Present",
    description: [
      "Pursuing advanced studies in Software Development with emphasis on web technologies, database systems, and software engineering.",
      "Developed practical academic projects focused on solving real-world problems through technology.",
      "Actively participating in hackathons, coding challenges, and AI innovation programs."
    ],
    technologies: [
      "Software Engineering",
      "Database Systems",
      "Web Development",
      "System Analysis",
      "UI/UX Design"
    ],
    featured: false
  },

  {
    id: "exp-5",
    type: "education",
    role: "AI & Open Source Enthusiast",
    organization: "Independent Learning",
    location: "Remote",
    period: "2025 - Present",
    description: [
      "Continuously exploring Artificial Intelligence, Generative AI, cloud technologies, and modern full-stack development.",
      "Building AI-powered applications using Google Gemini, OpenRouter, and modern JavaScript frameworks.",
      "Maintaining an active GitHub portfolio while learning best practices in scalable software architecture and deployment."
    ],
    technologies: [
      "Google Gemini",
      "OpenRouter",
      "GitHub",
      "Next.js",
      "Node.js",
      "MongoDB"
    ],
    featured: false
  }
];