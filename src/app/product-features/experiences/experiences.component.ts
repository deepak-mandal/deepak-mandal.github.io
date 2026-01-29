import { Component, OnInit } from '@angular/core';
import { ITabCardEntity } from 'src/app/shared/types/shared.interface';
import { EXPERIENCE } from '../constant/product-feature-constant';

@Component({
  selector: 'experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.css']
})
export class ExperiencesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  cgiImagePathOrUrl= EXPERIENCE.CGI_LOGO;
  evImagePathOrUrl = EXPERIENCE.EV_LOGO;
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
  
        // EXPERIENCE.JAVA_FULL_STACK, EXPERIENCE.UI_WORK, EXPERIENCE.BACKEND_WORK, EXPERIENCE.TECHNICAL_ANALYSIS,
        //  EXPERIENCE.TECHNOLOGIES
      ],
      session: EXPERIENCE.CGI_SESSION,
      location: EXPERIENCE.ASDC
    },
  
  ]
}
