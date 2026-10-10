# Rajiv Shukla — Developer Portfolio

The source code for Rajiv Shukla's responsive developer portfolio. The site is built with Angular 19 standalone components and presents projects, skills, experience, certifications, and a contact form in a fast, route-based interface.

## Features

- Lazy-loaded Angular routes for each portfolio section
- Responsive layouts with SCSS and shared design tokens
- Centralized, typed portfolio data for projects, experience, skills, and certifications
- Project detail pages addressed by slug
- Reactive contact form with validation
- Firebase Analytics event tracking
- Firestore storage for contact form submissions
- Firebase Hosting and Vercel deployment configuration

## Tech stack

| Area | Technology |
| --- | --- |
| Framework | Angular 19 |
| Language | TypeScript 5.6 |
| Styling | SCSS and CSS custom properties |
| Forms | Angular Reactive Forms |
| Routing | Angular Router with lazy-loaded standalone components |
| Backend services | Firebase Analytics and Cloud Firestore |
| Package manager | npm |

## Routes

| Path | Description |
| --- | --- |
| `/` | Home and featured content |
| `/about` | Profile and background |
| `/skills` | Technical skills |
| `/experience` | Work and learning experience |
| `/projects` | Project collection |
| `/projects/:slug` | Project detail page |
| `/certifications` | Certifications |
| `/contact` | Contact form |

Unknown paths redirect to the home page.

## Getting started

### Prerequisites

- Node.js compatible with Angular 19
- npm

### Install and run

```bash
npm install
npm start
```

Open <http://localhost:4200> after the development server starts.

### Production build

```bash
npm run build
```

The production build is generated in `dist/rajiv-portfolio/browser`.

For an incremental development build, use:

```bash
npm run watch
```

## Project structure

```text
src/
├── app/
│   ├── core/
│   │   ├── data/                 # Portfolio content
│   │   ├── models/               # Shared TypeScript models
│   │   └── services/             # Portfolio and Firebase services
│   ├── features/                 # Route-level standalone components
│   │   ├── home/
│   │   ├── about/
│   │   ├── skills/
│   │   ├── experience/
│   │   ├── projects/
│   │   ├── certifications/
│   │   └── contact/
│   ├── shared/                   # Reusable UI components
│   ├── app.config.ts             # Application providers
│   └── app.routes.ts             # Application routes
├── assets/
│   ├── images/
│   └── resume/
├── environments/                 # Firebase configuration
└── styles.scss                   # Global styles and design tokens
```

## Customizing the portfolio

1. Update projects, experience, skills, and certifications in [`src/app/core/data/portfolio.data.ts`](src/app/core/data/portfolio.data.ts).
2. Update the shared TypeScript contracts in [`src/app/core/models/portfolio.models.ts`](src/app/core/models/portfolio.models.ts) if the data shape changes.
3. Replace images in `src/assets/images/` and the resume in `src/assets/resume/`.
4. Adjust colors, typography, spacing, and global utilities in [`src/styles.scss`](src/styles.scss).

## Firebase

Firebase is initialized from the environment files:

- `src/environments/environment.ts` for production builds
- `src/environments/environment.development.ts` for local development

The application uses:

- **Analytics** for page views, project views, resume downloads, and successful contact submissions.
- **Firestore** to save contact submissions in the `contact_messages` collection with a server timestamp and `read: false` flag.

The Firebase web configuration is not a secret, but Firestore security rules and Firebase project access must be configured in the Firebase Console before accepting production submissions.

### Deploy to Firebase Hosting

The repository's [`firebase.json`](firebase.json) is configured for the Angular browser output and SPA route fallback.

```bash
npm install -g firebase-tools
firebase login
npm run build
firebase deploy
```

### Deploy to Vercel

The included [`vercel.json`](vercel.json) rewrites all routes to `index.html`, which keeps Angular client-side routes working on refresh. Configure the repository as a Vercel project and use the following settings:

```text
Build command: npm run build
Output directory: dist/rajiv-portfolio/browser
```

## Available npm scripts

| Command | Purpose |
| --- | --- |
| `npm start` | Start the Angular development server |
| `npm run build` | Create a production build |
| `npm run watch` | Rebuild continuously using the development configuration |
| `npm run ng` | Run Angular CLI commands |

---

Built with Angular by Rajiv Shukla.
