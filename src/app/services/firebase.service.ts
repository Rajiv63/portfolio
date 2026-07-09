import { Injectable } from '@angular/core';
import { initializeApp, FirebaseApp } from 'firebase/app';
import { getAnalytics, Analytics, logEvent } from 'firebase/analytics';
import { getFirestore, Firestore, collection, addDoc, serverTimestamp } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDgJmv9-wtR7yOr0yDb2ncENKo2vMOabQY",
  authDomain: "portfolio-website-c93fd.firebaseapp.com",
  projectId: "portfolio-website-c93fd",
  storageBucket: "portfolio-website-c93fd.firebasestorage.app",
  messagingSenderId: "200446692385",
  appId: "1:200446692385:web:5bba304fe94a4cd61d6760",
  measurementId: "G-8PE24QLRR8"
};

@Injectable({ providedIn: 'root' })
export class FirebaseService {
  private app: FirebaseApp;
  private analytics: Analytics;
  private db: Firestore;

  constructor() {
    this.app = initializeApp(firebaseConfig);
    this.analytics = getAnalytics(this.app);
    this.db = getFirestore(this.app);
  }

  // ── Analytics ──────────────────────────────────────────
  trackPageView(pageName: string) {
    logEvent(this.analytics, 'page_view', { page_title: pageName });
  }

  trackEvent(eventName: string, params?: Record<string, unknown>) {
    logEvent(this.analytics, eventName, params);
  }

  trackProjectView(projectTitle: string) {
    logEvent(this.analytics, 'project_view', { project_title: projectTitle });
  }

  trackResumeDownload() {
    logEvent(this.analytics, 'resume_download', { method: 'button_click' });
  }

  trackContactFormSubmit() {
    logEvent(this.analytics, 'contact_form_submit');
  }

  // ── Firestore – Contact Messages ───────────────────────
  async sendContactMessage(data: {
    name: string;
    email: string;
    subject: string;
    message: string;
  }): Promise<void> {
    const messagesRef = collection(this.db, 'contact_messages');
    await addDoc(messagesRef, {
      ...data,
      createdAt: serverTimestamp(),
      read: false
    });
    this.trackContactFormSubmit();
  }
}
