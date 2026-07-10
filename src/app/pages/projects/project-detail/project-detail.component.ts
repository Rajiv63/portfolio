import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Project } from '../../../models/portfolio.models';
import { PortfolioService } from '../../../services/portfolio.service';
import { FirebaseService } from '../../../services/firebase.service';

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss']
})
export class ProjectDetailComponent implements OnInit {

  project: Project | null = null;
  otherProjects: Project[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private portfolio: PortfolioService,
    private firebase: FirebaseService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const slug = params.get('slug');

      if (!slug) {
        this.router.navigate(['/projects']);
        return;
      }

      const currentProject = this.portfolio.getProjectBySlug(slug);

      if (!currentProject) {
        this.router.navigate(['/projects']);
        return;
      }

      this.project = currentProject;

      // excluding current project + online-no-dues from the "other projects" list
      this.otherProjects = this.portfolio
        .getProjects()
        .filter(p => p.slug !== slug && p.slug !== 'online-no-dues');

      this.firebase.trackProjectView(currentProject.title);
    });
  }
}