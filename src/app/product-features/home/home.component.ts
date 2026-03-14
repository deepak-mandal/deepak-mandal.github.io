import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { StepperSelectionEvent, STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { HttpClient } from '@angular/common/http';
import { Injectable, ViewChild } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { AgGridAngular } from 'ag-grid-angular';
import { CellClickedEvent, ColDef, GridReadyEvent } from 'ag-grid-community';
import { Observable } from 'rxjs';
import { ProfileComponent } from '../profile/profile.component';
import { MatStepper, MatStep, MatStepLabel, MatStepperIcon } from '@angular/material/stepper';

import { MatCard } from '@angular/material/card';
import { EducationComponent } from '../education/education.component';
import { ExperiencesComponent } from '../experiences/experiences.component';
import { ProjectsComponent } from '../projects/projects.component';
import { TechSkillsComponent } from '../tech-skills/tech-skills.component';
import { CertificatesComponent } from '../certificates/certificates.component';
import { AchievementsComponent } from '../achievements/achievements.component';
import { MatIcon } from '@angular/material/icon';
import { FooterComponent } from '../footer/footer.component';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    providers: [
        {
            provide: STEPPER_GLOBAL_OPTIONS,
            useValue: { displayDefaultIndicatorType: false },
        },
    ],
    imports: [ProfileComponent, MatStepper, MatStep, ReactiveFormsModule, MatStepLabel, MatCard, EducationComponent, ExperiencesComponent, ProjectsComponent, TechSkillsComponent, CertificatesComponent, AchievementsComponent, MatStepperIcon, MatIcon, FooterComponent]
})
export class HomeComponent implements OnInit {

  title = 'Deepak Mandal | CGI | IIT Guwahati';
 
   stepperOrientation: 'horizontal' | 'vertical' = 'vertical';
   isLinear = false;
 
   firstFormGroup!: UntypedFormGroup;
   secondFormGroup!: UntypedFormGroup;
 
   constructor(private _formBuilder: UntypedFormBuilder,
     private http: HttpClient,
     private breakpointObserver: BreakpointObserver
     ) {
       this.breakpointObserver.observe([
       Breakpoints.Handset
     ]).subscribe((result: { matches: any; }) => {
       if (result.matches) {
         // Mobile view
        //  this.stepperOrientation = 'horizontal';
        //  this.isLinear = true;
       } else {
         // Tablet/Laptop view
         this.stepperOrientation = 'vertical';
         this.isLinear = false;
       }
     });
 
      }
 
   ngOnInit() {
     this.firstFormGroup = this._formBuilder.group({
       firstCtrl: ['', Validators.required],
     });
     this.secondFormGroup = this._formBuilder.group({
       secondCtrl: ['', Validators.required],
     });
   }
 
   iconValue = 'school';
   selectionChange(event: StepperSelectionEvent) {
     let stepLabel = event.selectedStep.state;
     if (stepLabel == "edu") {
       this.iconValue = 'school'
     }
     if (stepLabel == "exp") {
       this.iconValue = 'business'
     }
     if (stepLabel == "proj") {
       this.iconValue = 'business_center'
     }
     if (stepLabel == "skill") {
       this.iconValue = 'sort'
     }
     if (stepLabel == "certi") {
       this.iconValue = 'wallpaper'
     }
     if (stepLabel == "ach") {
       this.iconValue = 'star'
     }
     if (stepLabel == "extra") {
       this.iconValue = 'public'
     }
   }
 

}
