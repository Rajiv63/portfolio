import { Injectable } from '@angular/core';
import { Project, Experience, SkillCategory, Certification } from '../models/portfolio.models';

@Injectable({ providedIn: 'root' })
export class PortfolioService {

  getProjects(): Project[] {
    return [
      {
        id: '1',
        slug: 'campus-vidyalaya',
        title: 'Campus Vidyalaya',
        subtitle: 'College ERP Platform',
        description: 'A comprehensive Enterprise Resource Planning platform for educational institutions, streamlining academic and administrative operations.',
        longDescription: 'Campus Vidyalaya is a full-featured College ERP system designed to digitize and streamline all campus operations. From student enrollment and fee management to attendance tracking and result processing, the platform serves students, faculty, and administrators through a single unified interface.',
        tech: ['Angular', 'TypeScript', 'Bootstrap', 'SCSS', 'REST API', 'RxJS', 'Node.js'],
        features: [
          'Student enrollment & profile management',
          'Fee collection & payment tracking',
          'Attendance management with analytics',
          'Examination & result processing',
          'Faculty portal & timetable management',
          'Notice board & announcements',
          'Library management module',
          'Responsive design for all devices'
        ],
        challenges: [
          'Designing a role-based access control system for students, faculty, and admins',
          'Building real-time attendance tracking with offline support',
          'Optimizing performance for large datasets of student records',
          'Creating an intuitive UX that works for non-technical users'
        ],
        outcomes: [
          'Reduced administrative workload by ~60%',
          'Enabled paperless fee & attendance processes',
          'Improved data accuracy and reporting',
          'Positive feedback from 500+ test users'
        ],
        githubUrl: 'https://github.com/Rajiv63',
        image: 'assets/images/campus-vidyalaya.svg',
        category: 'Web Application',
        status: 'completed',
        year: '2024',
        color: '#1a56db'
      },
      {
        id: '2',
        slug: 'online-no-dues',
        title: 'Online No Dues System',
        subtitle: 'Digital Clearance Platform',
        description: 'A digital clearance platform replacing paper-based no-dues processes with a streamlined multi-department approval workflow.',
        longDescription: 'The Online No Dues System transforms the traditionally cumbersome paper-based clearance process into a seamless digital workflow. Students submit clearance requests that are routed automatically through relevant departments, with real-time tracking and notifications at every step.',
        tech: ['Angular', 'TypeScript', 'SCSS', 'RxJS', 'Angular Forms', 'Bootstrap', 'REST API'],
        features: [
          'Student clearance request submission',
          'Multi-department parallel approval workflow',
          'Real-time status tracking dashboard',
          'Email & in-app notifications',
          'Department-wise pending requests view',
          'Digital certificate generation',
          'Admin override & escalation handling',
          'Audit trail for all approvals'
        ],
        challenges: [
          'Designing a flexible multi-step approval workflow engine',
          'Ensuring concurrent department processing without conflicts',
          'Building a reliable notification system',
          'Handling edge cases in partial approvals and rejections'
        ],
        outcomes: [
          'Eliminated physical visits for clearance process',
          'Reduced average clearance time from 7 days to 2 hours',
          '100% audit trail for compliance',
          'Adopted by 3 departments in pilot run'
        ],
        githubUrl: 'https://github.com/Rajiv63',
        image: 'assets/images/no-dues.svg',
        category: 'Web Application',
        status: 'completed',
        year: '2024',
        color: '#0ea5e9'
      },
      {
        id: '3',
        slug: 'seat-allocation',
        title: 'Seat Allocation System',
        subtitle: 'Exam Seat Management',
        description: 'An intelligent seat allocation management system for organizing examination halls with automated seating chart generation.',
        longDescription: 'The Seat Allocation Management System automates the complex task of assigning seats for university examinations. The system considers room capacities, student roll numbers, branch distributions, and special requirements to generate optimized seating arrangements instantly.',
        tech: ['Angular', 'TypeScript', 'Python', 'Algorithm Design', 'SCSS', 'Bootstrap', 'REST API'],
        features: [
          'Automated seat allocation algorithm',
          'Room capacity management',
          'Branch & roll-number based distribution',
          'Printable seating charts & admit cards',
          'Invigilation duty assignment',
          'Conflict detection & resolution',
          'Bulk import from Excel/CSV',
          'Multi-exam session scheduling'
        ],
        challenges: [
          'Implementing a constraint-satisfaction algorithm for optimal seating',
          'Handling special cases (differently-abled students, late enrollments)',
          'Generating print-ready PDFs for large-scale exams',
          'Performance optimization for 5000+ students simultaneously'
        ],
        outcomes: [
          'Reduced seat allocation time from 8 hours to 5 minutes',
          'Zero seating conflicts in exam sessions',
          'Successfully deployed for university-level exams',
          'Saved significant administrative resources'
        ],
        githubUrl: 'https://github.com/Rajiv63',
        image: 'assets/images/seat-allocation.svg',
        category: 'Management System',
        status: 'completed',
        year: '2023',
        color: '#7c3aed'
      }
    ];
  }

  getProjectBySlug(slug: string): Project | undefined {
    return this.getProjects().find(p => p.slug === slug);
  }

  getExperiences(): Experience[] {
    return [
      {
        id: 1,
        role: 'Front-End Developer Intern',
        company: 'IoTechWorld Avigation',
        duration: '6 months',
        startDate: 'Jan 2024',
        endDate: 'Jun 2024',
        type: 'internship',
        description: [
          'Developed and maintained responsive Angular web applications for IoT dashboard interfaces',
          'Collaborated with backend team to integrate REST APIs for real-time device data visualization',
          'Implemented reusable component library with Angular Standalone Components & SCSS',
          'Optimized application performance through lazy loading and code splitting strategies',
          'Participated in Agile sprints, code reviews, and daily standups'
        ],
        tech: ['Angular', 'TypeScript', 'SCSS', 'RxJS', 'Bootstrap', 'REST API', 'Git'],
        color: '#1a56db'
      },
      {
        id: 2,
        role: 'Data Science Intern',
        company: 'YBI Foundation',
        duration: '3 months',
        startDate: 'Aug 2023',
        endDate: 'Oct 2023',
        type: 'internship',
        description: [
          'Performed data cleaning, preprocessing, and exploratory data analysis on real-world datasets',
          'Built and evaluated machine learning models using Python (Scikit-learn, Pandas, NumPy)',
          'Created data visualizations and dashboards using Matplotlib and Seaborn',
          'Documented model performance metrics and prepared technical reports',
          'Gained practical exposure to supervised learning algorithms'
        ],
        tech: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'Matplotlib', 'Seaborn', 'Jupyter'],
        color: '#0ea5e9'
      }
    ];
  }

  getSkillCategories(): SkillCategory[] {
    return [
      {
        name: 'Frontend',
        icon: '🎨',
        skills: [
          { name: 'Angular', category: 'Frontend', level: 90, icon: 'angular', color: '#DD0031' },
          { name: 'TypeScript', category: 'Frontend', level: 88, icon: 'ts', color: '#3178C6' },
          { name: 'JavaScript', category: 'Frontend', level: 85, icon: 'js', color: '#F7DF1E' },
          { name: 'HTML5', category: 'Frontend', level: 92, icon: 'html', color: '#E34F26' },
          { name: 'CSS3 / SCSS', category: 'Frontend', level: 88, icon: 'css', color: '#1572B6' },
          { name: 'Bootstrap', category: 'Frontend', level: 82, icon: 'bootstrap', color: '#7952B3' }
        ]
      },
      {
        name: 'Backend & Languages',
        icon: '⚙️',
        skills: [
          { name: 'Python', category: 'Backend', level: 80, icon: 'python', color: '#3776AB' },
          { name: 'C++', category: 'Backend', level: 75, icon: 'cpp', color: '#00599C' },
          { name: 'REST APIs', category: 'Backend', level: 78, icon: 'api', color: '#25D366' },
          { name: 'RxJS', category: 'Backend', level: 80, icon: 'rxjs', color: '#B7178C' }
        ]
      },
      {
        name: 'Tools & DevOps',
        icon: '🛠️',
        skills: [
          { name: 'Git', category: 'Tools', level: 85, icon: 'git', color: '#F05032' },
          { name: 'GitHub', category: 'Tools', level: 85, icon: 'github', color: '#181717' },
          { name: 'VS Code', category: 'Tools', level: 90, icon: 'vscode', color: '#007ACC' },
          { name: 'npm', category: 'Tools', level: 82, icon: 'npm', color: '#CB3837' }
        ]
      },
      {
        name: 'Data Science & CS',
        icon: '🤖',
        skills: [
          { name: 'Machine Learning', category: 'DS', level: 70, icon: 'ml', color: '#FF6F00' },
          { name: 'Pandas / NumPy', category: 'DS', level: 75, icon: 'pandas', color: '#150458' },
          { name: 'Data Structures', category: 'CS', level: 82, icon: 'ds', color: '#1a56db' },
          { name: 'Algorithms', category: 'CS', level: 80, icon: 'algo', color: '#0ea5e9' }
        ]
      }
    ];
  }

  getCertifications(): Certification[] {
    return [
      {
        id: 1,
        title: 'Angular - The Complete Guide',
        issuer: 'Udemy',
        date: '2024',
        skills: ['Angular', 'TypeScript', 'RxJS', 'NgRx'],
        color: '#1a56db',
        icon: '🅰️'
      },
      {
        id: 2,
        title: 'Data Science with Python',
        issuer: 'YBI Foundation',
        date: '2023',
        skills: ['Python', 'Pandas', 'Machine Learning', 'Scikit-learn'],
        color: '#0ea5e9',
        icon: '🐍'
      },
      {
        id: 3,
        title: 'Front-End Web Development',
        issuer: 'freeCodeCamp',
        date: '2023',
        skills: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
        color: '#7c3aed',
        icon: '🌐'
      },
      {
        id: 4,
        title: 'Git & GitHub Fundamentals',
        issuer: 'Coursera',
        date: '2023',
        skills: ['Git', 'GitHub', 'Version Control', 'Collaboration'],
        color: '#e05d44',
        icon: '📦'
      },
      {
        id: 5,
        title: 'TypeScript Fundamentals',
        issuer: 'Microsoft Learn',
        date: '2024',
        skills: ['TypeScript', 'Type System', 'Generics', 'Decorators'],
        color: '#3178C6',
        icon: '📘'
      },
      {
        id: 6,
        title: 'Data Structures & Algorithms',
        issuer: 'Coding Ninjas',
        date: '2022',
        skills: ['Arrays', 'Trees', 'Graphs', 'Dynamic Programming'],
        color: '#f59e0b',
        icon: '🧮'
      }
    ];
  }
}
