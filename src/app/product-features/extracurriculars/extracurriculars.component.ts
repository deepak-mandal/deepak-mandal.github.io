import { Component, OnInit } from '@angular/core';
import { ITabCardEntity } from 'src/app/shared/types/shared.interface';
import { EXPERIENCE, EXTRACURRICULARS } from '../constant/product-feature-constant';

@Component({
  selector: 'extracurriculars',
  templateUrl: './extracurriculars.component.html',
  styleUrls: ['./extracurriculars.component.css']
})
export class ExtracurricularsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  extracurricularsData: ITabCardEntity[] = [
    {
      tabLabel: EXTRACURRICULARS.HEADING,
      // cardTitle: EXTRACURRICULARS.CGI_ACTIVITY_APPLAUDS,
      imagePathOrUrl: EXPERIENCE.CGI_LOGO,
      cardContentList: [
        EXTRACURRICULARS.ACTIVITIES
        // EXTRACURRICULARS.CGI_ACTIVITY_TRAINING,
        //  EXTRACURRICULARS.CGI_APPLAUD, EXTRACURRICULARS.COMMUNITY_SERVICE, EXTRACURRICULARS.IITG_CCD_VOLUNTEER
      ]
    }
  ]
}
