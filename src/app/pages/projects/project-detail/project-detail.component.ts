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
  project?: Project;
  otherProjects: Project[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private portfolio: PortfolioService,
    private firebase: FirebaseService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const slug = params.get('slug') ?? '';
      this.project = this.portfolio.getProjectBySlug(slug);
      if (!this.project) { this.router.navigate(['/projects']); return; }
      this.otherProjects = this.portfolio.getProjects().filter(p => p.slug !== slug);
      this.firebase.trackProjectView(this.project.title);
    });
  }
}
