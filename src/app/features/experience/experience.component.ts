import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ExperienceTimelineComponent } from '@shared';
import { Experience } from '@models';
import { PortfolioService, FirebaseService } from '@services';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [RouterLink, ExperienceTimelineComponent],
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  experiences: Experience[] = [];
  constructor(private portfolio: PortfolioService, private firebase: FirebaseService) {}
  ngOnInit() {
    this.experiences = this.portfolio.getExperiences();
    this.firebase.trackPageView('Experience');
  }
}
