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

        tech: [
          'Angular',
          'TypeScript',
          'Bootstrap',
          'SCSS',
        ],

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
        liveUrl: 'https://campus-vidyalaya-798w.vercel.app/login',

        image: 'assets/images/campus-vidyalaya.svg',
        category: 'Web Application',
        status: 'completed',
        year: '2024',
        color: '#1a56db'
      },

      {
        id: '2',
        slug: 'vastra-daan',
        title: 'Vastra Daan',
        subtitle: 'Clothes Donation Platform',
        description: 'A web platform that connects donors with NGOs and people in need, making clothing donation simple, transparent, and accessible.',
        longDescription: 'Vastra Daan is a donation platform where users can donate unused clothes, schedule pickups, and help NGOs distribute them to people in need. The platform provides a user-friendly interface for managing donations and tracking requests while encouraging sustainable clothing reuse.',

        tech: [
          'Angular',
          'TypeScript',
          'SCSS',
          'Bootstrap',
          'Firebase',
          'REST API'
        ],

        features: [
          'User registration and login',
          'Clothes donation request form',
          'NGO and volunteer management',
          'Donation tracking',
          'Pickup scheduling',
          'Responsive user interface',
          'Admin dashboard',
          'Real-time status updates'
        ],

        challenges: [
          'Managing donation workflows efficiently',
          'Designing an intuitive user experience',
          'Implementing real-time data synchronization',
          'Ensuring secure user authentication'
        ],

        outcomes: [
          'Simplified the clothes donation process',
          'Improved communication between donors and NGOs',
          'Promoted sustainable clothing reuse',
          'Responsive across desktop and mobile devices'
        ],

        githubUrl: 'https://github.com/Rajiv63',
        liveUrl: 'https://vastra-daan.vercel.app/',
        image: 'assets/images/vastra-daan.png',
        category: 'Web Application',
        status: 'completed',
        year: '2024',
        color: '#22c55e'
      },
      {
        id: '3',
        slug: 'seat-allocation',
        title: 'Seat Allocation System',
        subtitle: 'Exam Seat Management',
        description: 'An intelligent seat allocation management system for organizing examination halls with automated seating chart generation.',
        longDescription: 'The Seat Allocation Management System automates the complex task of assigning seats for university examinations. The system considers room capacities, student roll numbers, branch distributions, and special requirements to generate optimized seating arrangements instantly.',

        tech: [
          'Angular',
          'TypeScript',
          'Algorithm Design',
          'SCSS',
          'Firebase',
          'REST API'
        ],

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
        liveUrl: 'https://seating-plan-portal.vercel.app/',

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
        company: 'IoTechWorld Avigation Pvt. Ltd.',
        duration: '3 months',
        startDate: 'Jun 2025',
        endDate: 'Aug 2025',
        type: 'internship',

        description: [
          'Worked in the Research & Development (R&D) Department, focusing on front-end development.',
          'Developed a responsive Login Functionality page using HTML, CSS, and JavaScript.',
          'Integrated a secure authentication workflow for user login and access control.',
          'Collaborated with the development team to improve UI functionality and user experience.',
          'Managed and maintained project repositories using GitHub for version control and collaboration.'
        ],

        tech: [
          'HTML5',
          'CSS3',
          'JavaScript',
          'Git',
          'GitHub',
          'Authentication',
          'Responsive Design'
        ],

        color: '#1a56db'
      },
      {
        id: 2,
        role: 'Data Science Intern',
        company: 'YBI Foundation',
        duration: '1.5 months',
        startDate: '20 Mar 2024',
        endDate: '03 May 2024',
        type: 'internship',

        description: [
          'Performed data cleaning, preprocessing, and exploratory data analysis (EDA) on real-world datasets.',
          'Built and evaluated machine learning models using Python, Pandas, NumPy, and Scikit-learn.',
          'Created insightful data visualizations using Matplotlib and Seaborn.',
          'Analyzed model performance and documented results with technical reports.',
          'Gained hands-on experience with supervised machine learning algorithms and data analysis workflows.'
        ],

        tech: [
          'Python',
          'Pandas',
          'NumPy',
          'Scikit-learn',
          'Matplotlib',
          'Seaborn',
          'Jupyter Notebook'
        ],

        color: '#0ea5e9'
      }
    ];
  }

  getSkillCategories(): SkillCategory[] {
    return [
      {
        name: 'Frontend',
        icon: 'palette',
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
        icon: 'settings',
        skills: [
          // { name: 'Python', category: 'Backend', level: 80, icon: 'python', color: '#3776AB' },
          { name: 'MySQL', category: 'Backend', level: 50, icon: 'mysql', color: '#00599C' },
          { name: 'REST APIs', category: 'Backend', level: 50, icon: 'api', color: '#25D366' },
          // { name: 'RxJS', category: 'Backend', level: 80, icon: 'rxjs', color: '#B7178C' }
        ]
      },
      {
        name: 'Tools & DevOps',
        icon: 'build',
        skills: [
          { name: 'Git', category: 'Tools', level: 85, icon: 'git', color: '#F05032' },
          { name: 'GitHub', category: 'Tools', level: 85, icon: 'github', color: '#181717' },
          { name: 'VS Code', category: 'Tools', level: 90, icon: 'vscode', color: '#007ACC' },
          { name: 'npm', category: 'Tools', level: 82, icon: 'npm', color: '#CB3837' }
        ]
      },

    ];
  }

  getCertifications(): Certification[] {
  return [
    {
      id: 1,
      title: 'Data Science with Python',
      issuer: 'YBI Foundation',
      date: '2024',
      skills: [
        'Python',
        'Pandas',
        'NumPy',
        'Scikit-learn',
        'Machine Learning'
      ],
      color: '#0ea5e9',
      icon: 'insights'
    },

    {
      id: 2,
      title: 'Front-End Web Development',
      issuer: 'Apna College ',
      date: '2024',
      skills: [
        'HTML5',
        'CSS3',
        'JavaScript',
        'Responsive Design'
      ],
      color: '#7c3aed',
      icon: 'public'
    },

    {
      id: 3,
      title: 'Git & GitHub Fundamentals',
      issuer: 'Apna College',
      date: '2024',
      skills: [
        'Git',
        'GitHub',
        'Version Control',
        'Collaboration'
      ],
      color: '#e05d44',
      icon: 'account_tree'
    },

    {
      id: 4,
      title: 'Angular Front-End Development',
      issuer: 'Self Learning & Project Based',
      date: '2025',
      skills: [
        'Angular',
        'TypeScript',
        'SCSS',
         'Bootstrap'
      ],
      color: '#dd0031',
      icon: 'code'
    },

    {
      id: 5,
      title: 'Front-End Developer Internship',
      issuer: 'IoTechWorld Avigation Pvt. Ltd.',
      date: '2025',
      skills: [
        'HTML',
        'CSS',
        'JavaScript',
        'Authentication',
        'GitHub'
      ],
      color: '#2563eb',
      icon: 'work'
    }
      // {
      //   id: 4,
      //   title: 'TypeScript Fundamentals',
      //   issuer: 'Microsoft Learn',
      //   date: '2024',
      //   skills: ['TypeScript', 'Type System', 'Generics', 'Decorators'],
      //   color: '#3178C6',
      //   icon: '📘'
      // },
      // {
      //   id: 5,
      //   title: 'Data Structures & Algorithms',
      //   issuer: 'Coding Ninjas',
      //   date: '2022',
      //   skills: ['Arrays', 'Trees', 'Graphs', 'Dynamic Programming'],
      //   color: '#f59e0b',
      //   icon: '🧮'
      // }
    ];
  }
}