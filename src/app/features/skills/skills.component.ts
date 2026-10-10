import { Component, OnInit } from '@angular/core';
import { SkillsCardComponent } from '@shared';
import { SkillCategory } from '@models';
import { PortfolioService, FirebaseService } from '@services';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [SkillsCardComponent],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  categories: SkillCategory[] = [];
  tools = [ 'Postman', 'Jupyter Notebook', 'Firebase', 'Netlify', 'Vercel',  'REST APIs',  'Prettier'];

  constructor(private portfolio: PortfolioService, private firebase: FirebaseService) {}
  ngOnInit() {
    this.categories = this.portfolio.getSkillCategories();
    this.firebase.trackPageView('Skills');
  }
}
