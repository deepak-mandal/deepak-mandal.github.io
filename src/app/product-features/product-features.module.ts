import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ProfileComponent } from './profile/profile.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { ProfileSidenavComponent } from './profile-sidenav/profile-sidenav.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { EducationComponent } from './education/education.component';
import { ExperiencesComponent } from './experiences/experiences.component';
import { ProjectsComponent } from './projects/projects.component';
import { TechSkillsComponent } from './tech-skills/tech-skills.component';

@NgModule({
  declarations: [

    ProfileComponent,
    ProfileSidenavComponent,
    EducationComponent,
    ExperiencesComponent,
    ProjectsComponent,
    TechSkillsComponent,

  ],
  imports: [
    SharedModule,
    MatSidenavModule,
    MatCardModule,
    MatIconModule,
    MatDialogModule,
  ],
  exports: [
    ProfileComponent,
    EducationComponent,
    ExperiencesComponent,
    ProjectsComponent,
    TechSkillsComponent
  ],
  providers: [
  ]
})
export class ProductFeaturesModule { }