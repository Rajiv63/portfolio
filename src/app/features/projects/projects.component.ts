import { Component, OnInit } from '@angular/core';
import { ProjectCardComponent } from '@shared';
import { Project } from '@models';
import { PortfolioService, FirebaseService } from '@services';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ProjectCardComponent],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [];
  constructor(private portfolio: PortfolioService, private firebase: FirebaseService) {}
  ngOnInit() {
    this.projects = this.portfolio.getProjects();
    this.firebase.trackPageView('Projects');
  }
}
