import { CommonModule, NgStyle } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatStepperModule } from '@angular/material/stepper';
import { EXPERIENCE } from '../constant/product-feature-constant';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { STEPPER_GLOBAL_OPTIONS, StepperSelectionEvent } from '@angular/cdk/stepper';
import { MatDialog } from '@angular/material/dialog';
import { ReviewDocumentationComponent } from '../review-documentation/review-documentation.component';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'dkm-cgi-experience',
  imports: [MatCardModule,
    //  NgStyle,
      MatStepperModule, MatIconModule, MatButtonModule, CommonModule],
  providers: [{ provide: STEPPER_GLOBAL_OPTIONS, useValue: { displayDefaultIndicatorType: false } }],
  // MatTabsModule, MatCardModule, MatIconModule, MatButtonModule, DkmCgiExperienceComponent, DkmEdgeverveExperienceComponent,
  //   CommonModule, MatExpansionModule, MatDividerModule, MatStepperModule, ReactiveFormsModule
  templateUrl: './cgi-experience.component.html',
  styleUrl: './cgi-experience.component.scss',
})
export class DkmCgiExperienceComponent implements OnInit {
  cgiImagePathOrUrl = EXPERIENCE.CGI_LOGO;
  stepperOrientation: 'horizontal' | 'vertical' = 'vertical';
  isLinear = false;

  firstFormGroup!: UntypedFormGroup;
  secondFormGroup!: UntypedFormGroup;

  constructor(private _formBuilder: UntypedFormBuilder,
    private breakpointObserver: BreakpointObserver,
    public dialog: MatDialog
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
    const stepLabel = event.selectedStep.state;
    if (stepLabel == "edu") {
      this.iconValue = 'school'
    }
    if (stepLabel == "exp") {
      this.iconValue = 'business'
    }
  }

    openDialog(): void {
      this.dialog.open(
        ReviewDocumentationComponent, {
        width: 'auto',
        height: 'auto',
        data: {
          title: 'ReviewBook - Product Overview',
          submitText: 'Close'
  
        }
      });
    }
}
