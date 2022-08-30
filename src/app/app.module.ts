import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { ProfileComponent } from './profile/profile.component';
import { EducationComponent } from './education/education.component';
import { MatTabsModule } from '@angular/material/tabs';
import { ExperiencesComponent } from './experiences/experiences.component';
import { MatListModule } from '@angular/material/list';
import { MatStepperModule } from '@angular/material/stepper';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ProjectsComponent } from './projects/projects.component';
import { FooterComponent } from './footer/footer.component';
import { CertificatesComponent } from './certificates/certificates.component';
import { AchievementsComponent } from './achievements/achievements.component';
import { SkillsComponent } from './skills/skills.component';
import { MatTableModule } from '@angular/material/table';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ProfileDialogComponent } from './profile-dialog/profile-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ExtracurricularsComponent } from './extracurriculars/extracurriculars.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    EducationComponent,
    ExperiencesComponent,
    ProjectsComponent,
    FooterComponent,
    CertificatesComponent,
    AchievementsComponent,
    SkillsComponent,
    ProfileDialogComponent,
    ExtracurricularsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatTabsModule,
    MatListModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatIconModule,
    MatTableModule,
    MatExpansionModule,
    MatPaginatorModule,
    MatDialogModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
