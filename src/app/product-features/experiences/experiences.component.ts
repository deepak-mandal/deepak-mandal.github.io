import { Component, OnInit } from '@angular/core';
import { ITabCardEntity } from 'src/app/shared/types/shared.interface';
import { EXPERIENCE } from '../constant/product-feature-constant';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { DkmEdgeverveExperienceComponent } from '../edgeverve-experience/edgeverve-experience.component';
import { DkmCgiExperienceComponent } from '../cgi-experience/cgi-experience.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDividerModule } from '@angular/material/divider';
import { MatStepperModule } from '@angular/material/stepper';
import { ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.css'],
  standalone: true,
  imports: [MatCardModule, MatIconModule, DkmCgiExperienceComponent, DkmEdgeverveExperienceComponent,
    CommonModule, MatExpansionModule, MatDividerModule, MatStepperModule, ReactiveFormsModule]
})
export class ExperiencesComponent implements OnInit {

  cgiImagePathOrUrl = EXPERIENCE.CGI_LOGO;
  evImagePathOrUrl = EXPERIENCE.EV_IL_LOGO;
  experiencesData: ITabCardEntity[] = [
    {
      tabLabel: EXPERIENCE.CGI,
      cardTitle: EXPERIENCE.CGI_INFO_SYS,
      imagePathOrUrl: EXPERIENCE.CGI_LOGO,
      cardSubTitle: {
        content: EXPERIENCE.SOFTWARE_CONSULTANT,
      },
      cardContentList: [
        EXPERIENCE.DATACYCLE360_1,
        EXPERIENCE.DATACYCLE360_2,
        EXPERIENCE.DATACYCLE360_3,
        EXPERIENCE.WEALTH360_1,
        EXPERIENCE.WEALTH360_2,
        EXPERIENCE.WEALTH360_3,
        EXPERIENCE.WEALTH360_4,
        EXPERIENCE.WEALTH360_5,
        EXPERIENCE.WEALTH360_6,

      ],
      session: EXPERIENCE.CGI_SESSION,
      location: EXPERIENCE.ASDC
    },

  ]

  constructor() { }

  ngOnInit() { }

}
