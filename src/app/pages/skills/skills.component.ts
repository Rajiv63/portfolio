import { Component, OnInit } from '@angular/core';
import { SkillsCardComponent } from '../../components/skills-card/skills-card.component';
import { SkillCategory } from '../../models/portfolio.models';
import { PortfolioService } from '../../services/portfolio.service';
import { FirebaseService } from '../../services/firebase.service';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [SkillsCardComponent],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  categories: SkillCategory[] = [];
  tools = ['Figma', 'Postman', 'Jupyter Notebook', 'Firebase', 'Netlify', 'Vercel', 'Linux', 'Agile/Scrum', 'REST APIs', 'JSON', 'ESLint', 'Prettier'];

  constructor(private portfolio: PortfolioService, private firebase: FirebaseService) {}
  ngOnInit() {
    this.categories = this.portfolio.getSkillCategories();
    this.firebase.trackPageView('Skills');
  }
}
