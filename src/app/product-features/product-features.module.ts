import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ProfileComponent } from './profile/profile.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatStepperModule } from '@angular/material/stepper';
import { ProfileSidenavComponent } from './profile-sidenav/profile-sidenav.component';
import { MatLegacyCardModule as MatCardModule } from '@angular/material/legacy-card';
import { MatLegacyFormFieldModule as MatFormFieldModule } from '@angular/material/legacy-form-field';
import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatLegacyChipsModule as MatChipsModule } from '@angular/material/legacy-chips';
import { MatLegacyTableModule as MatTableModule } from '@angular/material/legacy-table';
import { MatIconModule } from '@angular/material/icon';
import { MatLegacyDialogModule as MatDialogModule } from '@angular/material/legacy-dialog';
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
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatDividerModule } from '@angular/material/divider';
import { MatLegacyListModule as MatListModule } from '@angular/material/legacy-list';
import { MatLegacyTabsModule as MatTabsModule } from '@angular/material/legacy-tabs';
import { ResumeComponent } from './resume/resume.component';
import { HomeComponent } from './home/home.component';

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
    ResumeComponent,
    HomeComponent,

  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatCardModule,
    MatIconModule,
    MatDialogModule,
    AgGridModule,
    MatButtonModule,
    MatDividerModule,
    MatListModule,
    MatTabsModule
    ,MatStepperModule,
    MatFormFieldModule,
    MatInputModule
    ,MatChipsModule
    ,MatTableModule
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