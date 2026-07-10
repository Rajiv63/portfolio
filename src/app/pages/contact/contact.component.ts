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
  {
    label: 'Email',
    value: 'rajivshukla6342@gmail.com',
    icon: 'mail',
    link: 'mailto:rajivshukla6342@gmail.com'
  },
   {
    label: 'Location',
    value: 'Delhi, India',
    icon: 'location_on',
    link: '#'
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/rajivshukla',
    icon: 'work',
    link: 'https://linkedin.com/in/rajivshukla'
  },
  {
    label: 'GitHub',
    value: 'github.com/Rajiv63',
    icon: 'code',
    link: 'https://github.com/Rajiv63'
  }
];

  constructor(private firebase: FirebaseService) {}
  ngOnInit() { this.firebase.trackPageView('Contact'); }
}
