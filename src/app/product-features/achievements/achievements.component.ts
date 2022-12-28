import { Component, OnInit } from '@angular/core';
import { ITabCardEntity } from 'src/app/shared/types/shared.interface';
import { ACHIEVEMENT } from '../constant/product-feature-constant';

@Component({
  selector: 'achievements',
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.css']
})
export class AchievementsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  achievementData: ITabCardEntity[] = [
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
