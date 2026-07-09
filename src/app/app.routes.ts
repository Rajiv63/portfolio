import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent),
    title: 'Rajiv Shukla | Angular Developer'
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about.component').then(m => m.AboutComponent),
    title: 'About | Rajiv Shukla'
  },
  {
    path: 'skills',
    loadComponent: () => import('./pages/skills/skills.component').then(m => m.SkillsComponent),
    title: 'Skills | Rajiv Shukla'
  },
  {
    path: 'experience',
    loadComponent: () => import('./pages/experience/experience.component').then(m => m.ExperienceComponent),
    title: 'Experience | Rajiv Shukla'
  },
  {
    path: 'projects',
    loadComponent: () => import('./pages/projects/projects.component').then(m => m.ProjectsComponent),
    title: 'Projects | Rajiv Shukla'
  },
  {
    path: 'projects/:slug',
    loadComponent: () => import('./pages/projects/project-detail/project-detail.component').then(m => m.ProjectDetailComponent),
    title: 'Project Details | Rajiv Shukla'
  },
  {
    path: 'certifications',
    loadComponent: () => import('./pages/certifications/certifications.component').then(m => m.CertificationsComponent),
    title: 'Certifications | Rajiv Shukla'
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact/contact.component').then(m => m.ContactComponent),
    title: 'Contact | Rajiv Shukla'
  },
  {
    path: '**',
    redirectTo: ''
  }
];
