import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/home/home.component').then(m => m.HomeComponent),
    title: 'Rajiv Shukla | Angular Developer'
  },
  {
    path: 'about',
    loadComponent: () => import('./features/about/about.component').then(m => m.AboutComponent),
    title: 'About | Rajiv Shukla'
  },
  {
    path: 'skills',
    loadComponent: () => import('./features/skills/skills.component').then(m => m.SkillsComponent),
    title: 'Skills | Rajiv Shukla'
  },
  {
    path: 'experience',
    loadComponent: () => import('./features/experience/experience.component').then(m => m.ExperienceComponent),
    title: 'Experience | Rajiv Shukla'
  },
  {
    path: 'projects',
    loadComponent: () => import('./features/projects/projects.component').then(m => m.ProjectsComponent),
    title: 'Projects | Rajiv Shukla'
  },
  {
    path: 'projects/:slug',
    loadComponent: () => import('./features/projects/project-detail/project-detail.component').then(m => m.ProjectDetailComponent),
    title: 'Project Details | Rajiv Shukla'
  },
  {
    path: 'certifications',
    loadComponent: () => import('./features/certifications/certifications.component').then(m => m.CertificationsComponent),
    title: 'Certifications | Rajiv Shukla'
  },
  {
    path: 'contact',
    loadComponent: () => import('./features/contact/contact.component').then(m => m.ContactComponent),
    title: 'Contact | Rajiv Shukla'
  },
  {
    path: '**',
    redirectTo: ''
  }
];
