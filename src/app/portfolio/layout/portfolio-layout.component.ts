import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PortfolioHeaderComponent } from '../components/header/header.component';
import { FooterComponent } from '../components/footer/footer.component';
import { HeroComponent } from '../pages/hero/hero.component';
import { AboutComponent } from '../pages/about/about.component';
import { ProjectsComponent } from '../pages/projects/projects.component';
import { ExperienceComponent } from '../pages/experience/experience.component';
import { SkillsComponent } from '../pages/skills/skills.component';
import { ContactComponent } from '../pages/contact/contact.component';

@Component({
  standalone: true,
  selector: 'app-portfolio-layout',
  imports: [
    RouterOutlet,
    PortfolioHeaderComponent,
    FooterComponent,
    HeroComponent,
    AboutComponent,
    ProjectsComponent,
    ExperienceComponent,
    SkillsComponent,
    ContactComponent
  ],
  templateUrl: './portfolio-layout.component.html'
})
export class PortfolioLayoutComponent {}