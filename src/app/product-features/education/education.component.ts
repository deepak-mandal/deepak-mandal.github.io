import { Component, OnInit } from '@angular/core';
import { ITabCardEntity } from 'src/app/shared/types/shared.interface';
import { EDUCATION } from '../constant/product-feature-constant';
import { DkmCustomCardComponent } from '../../shared/dkm-custom-card/dkm-custom-card.component';

@Component({
    selector: 'education',
    templateUrl: './education.component.html',
    styleUrls: ['./education.component.css'],
    imports: [DkmCustomCardComponent]
})
export class EducationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  educationData: ITabCardEntity[] = [
    {
      tabLabel: EDUCATION.IIT,
      cardTitle: EDUCATION.IITG,
      imagePathOrUrl: EDUCATION.IITG_LOGO,
      cardSubTitle: {
        content: EDUCATION.BTECH,
        rightContent: EDUCATION.SESSION
      },
      matCardTitleLink: EDUCATION.IITG_LINK,
    },
  ]
 
}
