import { Component, OnInit } from '@angular/core';
import { ContactFormComponent } from '../../components/contact-form/contact-form.component';
import { FirebaseService } from '../../services/firebase.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ContactFormComponent],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  cards = [
    { icon: '📧', label: 'Email', value: 'rajivshukla6342@gmail.com', link: 'mailto:rajivshukla6342@gmail.com' },
    { icon: '💼', label: 'LinkedIn', value: 'linkedin.com/in/rajiv-shukla-45563b28a', link: 'https://www.linkedin.com/in/rajiv-shukla-45563b28a' },
    { icon: '👨‍💻', label: 'GitHub', value: 'github.com/Rajiv63', link: 'https://github.com/Rajiv63' },
    { icon: '📍', label: 'Location', value: 'New Delhi, India', link: '#' }
  ];

  constructor(private firebase: FirebaseService) {}
  ngOnInit() { this.firebase.trackPageView('Contact'); }
}
