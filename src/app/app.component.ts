import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { StepperSelectionEvent, STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { HttpClient } from '@angular/common/http';
import { Component, Injectable, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AgGridAngular } from 'ag-grid-angular';
import { CellClickedEvent, ColDef, GridReadyEvent } from 'ag-grid-community';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { displayDefaultIndicatorType: false },
    },
  ],
})
export class AppComponent {
  title = 'Deepak Mandal | CGI | IIT Guwahati';

  stepperOrientation: 'horizontal' | 'vertical' = 'vertical';
  isLinear = false;

  firstFormGroup!: FormGroup;
  secondFormGroup!: FormGroup;

  constructor(private _formBuilder: FormBuilder,
    private http: HttpClient,
    private breakpointObserver: BreakpointObserver
    ) {
      this.breakpointObserver.observe([
      Breakpoints.Handset
    ]).subscribe(result => {
      if (result.matches) {
        // Mobile view
        this.stepperOrientation = 'horizontal';
        this.isLinear = true;
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
