import { Component, OnInit } from '@angular/core';
import { ITabCardEntity } from 'src/app/shared/types/shared.interface';
import { ACHIEVEMENT, EXPERIENCE } from '../constant/product-feature-constant';
import { DkmCustomCardComponent } from '../../shared/dkm-custom-card/dkm-custom-card.component';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatStepperModule } from '@angular/material/stepper';

@Component({
    selector: 'achievements',
    templateUrl: './achievements.component.html',
    styleUrls: ['./achievements.component.css'],
    imports: [CommonModule, MatCardModule, MatStepperModule]
})
export class AchievementsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  iitmLogo = ACHIEVEMENT.IITM_LOGO;
  cgiLogo = EXPERIENCE.CGI_LOGO;
  stepperOrientation: 'horizontal' | 'vertical' = 'vertical';

  achievementData: ITabCardEntity[] = [
    {
      tabLabel: ACHIEVEMENT.CGI,
      cardTitle: ACHIEVEMENT.BRONZE_AWARD,
      imagePathOrUrl: EXPERIENCE.CGI_LOGO,
      cardSubTitle: {
        content: ACHIEVEMENT.BRONZE_AWARD_ACTIVITY,
      }
    },
    {
      tabLabel: ACHIEVEMENT.JEE_2017,
      cardTitle: ACHIEVEMENT.JEE,
      imagePathOrUrl: ACHIEVEMENT.IITM_LOGO,
      cardSubTitle: {
        content: ACHIEVEMENT.JEE_ACTIVITY,
      }
    }
  ]
}
