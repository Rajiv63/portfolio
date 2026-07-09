import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillCategory } from '../../models/portfolio.models';

@Component({
  selector: 'app-skills-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills-card.component.html',
  styleUrls: ['./skills-card.component.scss']
})
export class SkillsCardComponent {
  @Input() category!: SkillCategory;
  @Input() delay = 0;
}
