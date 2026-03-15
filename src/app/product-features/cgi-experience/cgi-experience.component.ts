import { NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDivider } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatStepperModule } from '@angular/material/stepper';
import { EXPERIENCE } from '../constant/product-feature-constant';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { StepperSelectionEvent } from '@angular/cdk/stepper';

@Component({
  selector: 'dkm-cgi-experience',
  imports: [MatCardModule, NgStyle, MatStepperModule, MatIconModule],
  templateUrl: './cgi-experience.component.html',
  styleUrl: './cgi-experience.component.scss',
})
export class DkmCgiExperienceComponent {
  cgiImagePathOrUrl = EXPERIENCE.CGI_LOGO;
  stepperOrientation: 'horizontal' | 'vertical' = 'vertical';
  isLinear = false;

  firstFormGroup!: UntypedFormGroup;
  secondFormGroup!: UntypedFormGroup;

  constructor(private _formBuilder: UntypedFormBuilder,
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
  }
}
