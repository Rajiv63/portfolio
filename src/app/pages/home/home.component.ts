import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HeroComponent } from '../../components/hero/hero.component';
import { ProjectCardComponent } from '../../components/project-card/project-card.component';
import { SkillsCardComponent } from '../../components/skills-card/skills-card.component';
import { Project, SkillCategory } from '../../models/portfolio.models';
import { PortfolioService } from '../../services/portfolio.service';
import { FirebaseService } from '../../services/firebase.service';

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
