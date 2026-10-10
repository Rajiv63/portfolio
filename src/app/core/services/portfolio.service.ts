import { Injectable } from '@angular/core';
import { Project, Experience, SkillCategory, Certification } from '../models/portfolio.models';
import {
  PROJECTS_DATA,
  EXPERIENCES_DATA,
  SKILL_CATEGORIES_DATA,
  CERTIFICATIONS_DATA
} from '../data/portfolio.data';

@Injectable({ providedIn: 'root' })
export class PortfolioService {

  getProjects(): Project[] {
    return PROJECTS_DATA;
  }

  getProjectBySlug(slug: string): Project | undefined {
    return this.getProjects().find(p => p.slug === slug);
  }

  getExperiences(): Experience[] {
    return EXPERIENCES_DATA;
  }

  getSkillCategories(): SkillCategory[] {
    return SKILL_CATEGORIES_DATA;
  }

  getCertifications(): Certification[] {
    return CERTIFICATIONS_DATA;
  }
}