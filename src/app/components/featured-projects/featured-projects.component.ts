import { Component } from '@angular/core';
import { ProjectCardComponent } from '../project-card/project-card.component';
import { Project } from '../../models/portfolio.models';

@Component({
  selector: 'app-featured-projects',
  standalone: true,
  imports: [ProjectCardComponent],
  templateUrl: './featured-projects.component.html',
  styleUrls: ['./featured-projects.component.scss']
})
export class FeaturedProjectsComponent {
  // Replace this with your actual data source (input, service, resolver, etc.)
  projects: Project[] = [];
}