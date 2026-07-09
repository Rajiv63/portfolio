export interface Project {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  tech: string[];
  features: string[];
  challenges: string[];
  outcomes: string[];
  githubUrl?: string;
  liveUrl?: string;
  image: string;
  category: string;
  status: 'completed' | 'in-progress';
  year: string;
  color: string;
}

export interface Experience {
  id: number;
  role: string;
  company: string;
  duration: string;
  startDate: string;
  endDate: string;
  type: 'internship' | 'full-time' | 'part-time';
  description: string[];
  tech: string[];
  color: string;
}

export interface Skill {
  name: string;
  category: string;
  level: number;
  icon: string;
  color: string;
}

export interface SkillCategory {
  name: string;
  icon: string;
  skills: Skill[];
}

export interface Certification {
  id: number;
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  skills: string[];
  color: string;
  icon: string;
}

export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}
