import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HeroComponent, ProjectCardComponent, SkillsCardComponent } from '@shared';
import { Project, SkillCategory } from '@models';
import { PortfolioService, FirebaseService } from '@services';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, HeroComponent, ProjectCardComponent, SkillsCardComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  projects: Project[] = [];
  skillCategories: SkillCategory[] = [];

  constructor(private portfolio: PortfolioService, private firebase: FirebaseService) {}

  ngOnInit() {
    this.projects = this.portfolio.getProjects();
    this.skillCategories = this.portfolio.getSkillCategories().slice(0, 2);
    this.firebase.trackPageView('Home');
  }
}
