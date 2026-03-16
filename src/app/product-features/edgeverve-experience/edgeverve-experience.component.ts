import { NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardAvatar, MatCardHeader, MatCardModule } from '@angular/material/card';
import { EXPERIENCE } from '../constant/product-feature-constant';
import { MatStepperModule } from '@angular/material/stepper';

@Component({
  selector: 'dkm-edgeverve-experience',
  imports: [MatStepperModule, MatCardModule, MatCardHeader, MatCardAvatar, NgStyle],
  templateUrl: './edgeverve-experience.component.html',
  styleUrl: './edgeverve-experience.component.scss',
})
export class DkmEdgeverveExperienceComponent {


  evImagePathOrUrl = EXPERIENCE.EV_LOGO;
}
