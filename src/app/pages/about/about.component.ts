import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FirebaseService } from '../../services/firebase.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  highlights = [
    { icon: 'school', label: 'Education', value: 'B.Tech IT, GGSIPU' },
    { icon: 'work', label: 'Internships', value: '2 Completed' },
    { icon: 'rocket_launch', label: 'Projects', value: '3+ Live Apps' },
    { icon: 'location_on', label: 'Location', value: 'New Delhi, India' }
  ];

  constructor(private firebase: FirebaseService) {}
  ngOnInit() { this.firebase.trackPageView('About'); }
}
