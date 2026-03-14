import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ProfileComponent } from './profile/profile.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatStepperModule } from '@angular/material/stepper';
import { ProfileSidenavComponent } from './profile-sidenav/profile-sidenav.component';
import { MatCardModule as MatCardModule } from '@angular/material/card';
import { MatFormFieldModule as MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule as MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatChipsModule as MatChipsModule } from '@angular/material/chips';
import { MatTableModule as MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule as MatDialogModule } from '@angular/material/dialog';
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
import { MatButtonModule as MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule as MatListModule } from '@angular/material/list';
import { MatTabsModule as MatTabsModule } from '@angular/material/tabs';
import { ResumeComponent } from './resume/resume.component';
import { HomeComponent } from './home/home.component';

@NgModule({
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
        MatTabsModule,
        MatStepperModule,
        MatFormFieldModule,
        MatInputModule,
        MatChipsModule,
        MatTableModule,
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
        HomeComponent
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
    providers: []
})
export class ProductFeaturesModule { }