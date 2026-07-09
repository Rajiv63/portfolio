# Rajiv Shukla — Angular Portfolio

A modern, premium developer portfolio built with **Angular 19 Standalone Components**, Firebase Analytics & Firestore, lazy-loaded routing, and SCSS.

---

## 🚀 Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Angular 19 (Standalone Components) |
| Language | TypeScript 5.6 |
| Styles | SCSS with CSS Custom Properties |
| Routing | Angular Router + Lazy Loading |
| Forms | Angular Reactive Forms |
| Backend | Firebase (Analytics + Firestore) |
| Hosting | Firebase Hosting |

---

## 📁 Project Structure

```
src/
├── app/
│   ├── pages/
│   │   ├── home/               # Landing page
│   │   ├── about/              # Bio & profile
│   │   ├── skills/             # Tech skills with progress bars
│   │   ├── experience/         # Interactive timeline
│   │   ├── projects/           # Project grid
│   │   │   └── project-detail/ # Per-project deep-dive
│   │   ├── certifications/     # Cert cards
│   │   └── contact/            # Reactive form → Firestore
│   ├── components/
│   │   ├── navbar/             # Sticky, responsive navbar
│   │   ├── footer/             # Links + social
│   │   ├── hero/               # Animated hero section
│   │   ├── skills-card/        # Animated progress bars
│   │   ├── experience-timeline/# Accordion timeline
│   │   ├── project-card/       # Project preview card
│   │   └── contact-form/       # Reactive form with validation
│   ├── services/
│   │   ├── firebase.service.ts # Analytics + Firestore
│   │   └── portfolio.service.ts# All portfolio data
│   ├── models/
│   │   └── portfolio.models.ts # TypeScript interfaces
│   ├── app.routes.ts           # Lazy-loaded routes
│   └── app.config.ts           # App providers
├── assets/
│   ├── images/
│   └── resume/                 # Place resume PDF here
└── styles.scss                 # Global design tokens + utilities
```

---

## ⚡ Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Add your resume
Place your resume PDF at:
```
src/assets/resume/Rajiv_Shukla_Resume.pdf
```

### 3. Run locally
```bash
npm start
# → http://localhost:4200
```

### 4. Production build
```bash
npm run build
```

---

## 🔥 Firebase Setup

The project is already wired to your Firebase project `portfolio-website-c93fd`.

### Firebase features used:
- **Analytics** — automatic page view + event tracking on every route
- **Firestore** — contact form submissions saved to `contact_messages` collection

### Deploy to Firebase Hosting:
```bash
npm install -g firebase-tools
firebase login
npm run build
firebase deploy
# → https://portfolio-website-c93fd.web.app
```

### View contact messages:
Go to [Firebase Console](https://console.firebase.google.com/project/portfolio-website-c93fd/firestore) → Firestore → `contact_messages`

---

## 📱 Responsive Breakpoints

| Breakpoint | Width |
|------------|-------|
| Mobile | < 480px |
| Tablet | 480px – 768px |
| Laptop | 768px – 1024px |
| Desktop | > 1024px |

---

## 🎨 Design System

All design tokens are in `src/styles.scss` as CSS custom properties:

```scss
--primary: #1a56db       // Blue accent
--accent:  #0ea5e9       // Sky blue
--font-display: 'Syne'   // Headings
--font-body:    'DM Sans' // Body text
```

---

## 🔧 Customization

To update portfolio data (projects, experience, skills, certs), edit:
```
src/app/services/portfolio.service.ts
```

All data is centralized — no need to touch individual component files.

---

## 📊 Analytics Events Tracked

| Event | Trigger |
|-------|---------|
| `page_view` | Every route navigation |
| `project_view` | Opening a project card |
| `contact_form_submit` | Successful form send |
| `resume_download` | Resume button click |

---

**Built with ❤️ by Rajiv Shukla · B.Tech IT · GGSIPU · New Delhi**
