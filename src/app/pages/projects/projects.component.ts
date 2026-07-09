import { Component, OnInit } from '@angular/core';
import { ProjectCardComponent } from '../../components/project-card/project-card.component';
import { Project } from '../../models/portfolio.models';
import { PortfolioService } from '../../services/portfolio.service';
import { FirebaseService } from '../../services/firebase.service';

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
