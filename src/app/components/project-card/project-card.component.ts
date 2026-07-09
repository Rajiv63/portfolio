import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Project } from '../../models/portfolio.models';
import { FirebaseService } from '../../services/firebase.service';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent {
  @Input() project!: Project;
  @Input() delay = 0;

  constructor(private firebase: FirebaseService) {}

  onViewDetails() {
    this.firebase.trackProjectView(this.project.title);
  }
}
