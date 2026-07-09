import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ExperienceTimelineComponent } from '../../components/experience-timeline/experience-timeline.component';
import { Experience } from '../../models/portfolio.models';
import { PortfolioService } from '../../services/portfolio.service';
import { FirebaseService } from '../../services/firebase.service';

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
