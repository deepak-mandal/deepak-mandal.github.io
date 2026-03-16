import { Component, OnInit } from '@angular/core';
import { ITabCardEntity } from 'src/app/shared/types/shared.interface';
import { EXPERIENCE, EXTRACURRICULARS } from '../constant/product-feature-constant';
import { DkmCustomCardComponent } from '../../shared/dkm-custom-card/dkm-custom-card.component';

@Component({
    selector: 'extracurriculars',
    templateUrl: './extracurriculars.component.html',
    styleUrls: ['./extracurriculars.component.css'],
    imports: [DkmCustomCardComponent]
})
export class ExtracurricularsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  extracurricularsData: ITabCardEntity[] = [
    {
      tabLabel: EXTRACURRICULARS.HEADING,
      imagePathOrUrl: EXPERIENCE.CGI_LOGO,
      cardContentList: [
        EXTRACURRICULARS.ACTIVITIES
      ]
    }
  ]
}
