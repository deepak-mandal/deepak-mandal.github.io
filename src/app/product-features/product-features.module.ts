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
import { AchievementsComponent } from './achievements/achievements.component';
import { ExtracurricularsComponent } from './extracurriculars/extracurriculars.component';
import { CertificatesComponent } from './certificates/certificates.component';
import { AgGridModule } from 'ag-grid-angular';
import { FooterComponent } from './footer/footer.component';
import { CertificateViewCellRendererComponent } from './certificate-view-cell-renderer/certificate-view-cell-renderer.component';
import { ReviewDocumentationComponent } from './review-documentation/review-documentation.component';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  declarations: [

    ProfileComponent,
    ProfileSidenavComponent,
    EducationComponent,
    ExperiencesComponent,
    ProjectsComponent,
    TechSkillsComponent,
    AchievementsComponent,
    ExtracurricularsComponent,
    CertificatesComponent,
    FooterComponent,
    CertificateViewCellRendererComponent,
    ReviewDocumentationComponent,

  ],
  imports: [
    CommonModule,
    SharedModule,
    MatSidenavModule,
    MatCardModule,
    MatIconModule,
    MatDialogModule,
    AgGridModule,
    MatButtonModule,
    MatDividerModule,
    MatListModule,
    MatTabsModule
  ],
  exports: [
    ProfileComponent,
    EducationComponent,
    ExperiencesComponent,
    ProjectsComponent,
    TechSkillsComponent,
    AchievementsComponent,
    ExtracurricularsComponent,
    CertificatesComponent,
    FooterComponent
  ],
  providers: [
  ]
})
export class ProductFeaturesModule { }