export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  longDescription?: string;
  image: string;
  category: 'AI & ML' | 'Full Stack' | 'Web Apps';
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
  featured: boolean;
  keyFeatures?: string[];
  metrics?: string;
}

export interface SkillCategory {
  title: 'Frontend' | 'Backend' | 'Database' | 'AI' | 'Tools';
  description: string;
  iconName: string;
  skills: {
    name: string;
    level: number; // 1-100
    icon?: string;
    highlight?: boolean;
    experienceYears?: string;
  }[];
}

export interface ExperienceItem {
  id: string;
  type: 'work' | 'hackathon' | 'education';
  role: string;
  organization: string;
  location: string;
  period: string;
  description: string[];
  technologies: string[];
  award?: string;
  featured?: boolean;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject?: string;
  message: string;
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'assistant';
  text: string;
  timestamp: Date;
}
