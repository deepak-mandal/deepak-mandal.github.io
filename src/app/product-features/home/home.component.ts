import { Component, OnInit } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { HttpClient } from '@angular/common/http';
import { ProfileComponent } from '../profile/profile.component';
import { MatCard, MatCardModule } from '@angular/material/card';
import { EducationComponent } from '../education/education.component';
import { ExperiencesComponent } from '../experiences/experiences.component';
import { ProjectsComponent } from '../projects/projects.component';
import { TechSkillsComponent } from '../tech-skills/tech-skills.component';
import { CertificatesComponent } from '../certificates/certificates.component';
import { AchievementsComponent } from '../achievements/achievements.component';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { FooterComponent } from '../footer/footer.component';
import { MatExpansionModule } from '@angular/material/expansion';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    standalone: true,
    imports: [
      ProfileComponent,
      MatCard,
      EducationComponent,
      ExperiencesComponent,
      ProjectsComponent,
      TechSkillsComponent,
      CertificatesComponent,
      AchievementsComponent,
      MatIcon,
      FooterComponent,
      MatExpansionModule,
      MatCardModule,
      MatIconModule
    ]
})
export class HomeComponent implements OnInit {

  title = 'Deepak Mandal | CGI | IIT Guwahati';
 
   constructor(
     private http: HttpClient,
     private breakpointObserver: BreakpointObserver
     ) {
      }
 
   ngOnInit() {
   }
}
