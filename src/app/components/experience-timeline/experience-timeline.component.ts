import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Experience } from '../../models/portfolio.models';

@Component({
  selector: 'app-experience-timeline',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience-timeline.component.html',
  styleUrls: ['./experience-timeline.component.scss']
})
export class ExperienceTimelineComponent {
  @Input() experiences: Experience[] = [];
  activeId: number | null = null;

  toggle(id: number) {
    this.activeId = this.activeId === id ? null : id;
  }
}
