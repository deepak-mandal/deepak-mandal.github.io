import { Component, OnInit } from '@angular/core';
import { ITabCardEntity } from 'src/app/shared/types/shared.interface';
import { EDUCATION, EXPERIENCE } from '../constant/product-feature-constant';
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
  imports: [MatCardModule, MatIconModule,
    CommonModule, MatExpansionModule, MatDividerModule, MatStepperModule, ReactiveFormsModule]
})
export class ExperiencesComponent implements OnInit {

  cgiImagePathOrUrl = EXPERIENCE.CGI_LOGO;
  evImagePathOrUrl = EXPERIENCE.FINACLE_LOGO1;
  experiencesData: ITabCardEntity[] = [
    {
      tabLabel: EXPERIENCE.EDGEVERVE,
      cardTitle: EXPERIENCE.EDGEVERVE,
      imagePathOrUrl: EXPERIENCE.FINACLE_LOGO1,
      cardSubTitle: {
        content: EXPERIENCE.PRODUCT_TECH_ANALYST,
        rightContent: EXPERIENCE.EV_SESSION
      },
      matCardTitleLink: EXPERIENCE.EV_LINK,
    },
    {
      tabLabel: EXPERIENCE.CGI,
      cardTitle: EXPERIENCE.CGI_INFO_SYS,
      imagePathOrUrl: EXPERIENCE.CGI_LOGO,
      cardSubTitle: {
        content: EXPERIENCE.SOFTWARE_CONSULTANT,
        rightContent: EXPERIENCE.CGI_SESSION
      },
      session: EXPERIENCE.CGI_SESSION,
      location: EXPERIENCE.ASDC,
      matCardTitleLink: EXPERIENCE.CGI_LINK,
    },


  ]

  constructor() { }

  ngOnInit() { }

  educationData: ITabCardEntity =
    {
      tabLabel: EDUCATION.IIT,
      cardTitle: EDUCATION.IITG,
      imagePathOrUrl: EDUCATION.IITG_LOGO,
      cardSubTitle: {
        content: EDUCATION.BTECH,
        rightContent: EDUCATION.SESSION
      },
      matCardTitleLink: EDUCATION.IITG_LINK,
    }

}
