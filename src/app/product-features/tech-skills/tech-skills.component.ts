import { Component, OnInit } from '@angular/core';
import { ITabCardListEntity } from 'src/app/shared/types/shared.interface';
import { PROFILE, SKILLS } from '../constant/product-feature-constant';

@Component({
  selector: 'tech-skills',
  templateUrl: './tech-skills.component.html',
  styleUrls: ['./tech-skills.component.css']
})
export class TechSkillsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  technicalSkillsData: ITabCardListEntity[] = [
    {
      tabLabel: SKILLS.PROGRAMMING_LANGUAGE,
      skills: [
        {
          imagePathOrUrl: SKILLS.JAVA_LOGO,
          cardSubTitle: SKILLS.JAVA,
        },
        {
          imagePathOrUrl: SKILLS.PY,
          cardSubTitle: SKILLS.PYTHON,
        },
        {
          imagePathOrUrl: SKILLS.TS,
          cardSubTitle: SKILLS.TYPESCRIPT,
        }
        ,
        {
          imagePathOrUrl: SKILLS.JS,
          cardSubTitle: SKILLS.JAVASCRIPT,
        },
        {
          imagePathOrUrl: SKILLS.PHP_LOGO,
          cardSubTitle: SKILLS.PHP,
        },
      ]
    },
    {
      tabLabel: SKILLS.WEB_TECHNOLOGIES,
      skills: [
        {
          imagePathOrUrl: SKILLS.SPRING_LOGO,
          cardSubTitle: SKILLS.SPRING,
        },
        {
          imagePathOrUrl: SKILLS.ANGULAR_LOGO,
          cardSubTitle: SKILLS.ANGULAR,
        },
        {
          imagePathOrUrl: SKILLS.HTML_LOGO,
          cardSubTitle: SKILLS.HTML,
        }
        ,
        {
          imagePathOrUrl: SKILLS.CSS_LOGO,
          cardSubTitle: SKILLS.CSS,
        },
        {
          imagePathOrUrl: SKILLS.BOOTSTRAP_LOGO,
          cardSubTitle: SKILLS.BOOTSTRAP,
        },
      ]
    },
    {
      tabLabel: SKILLS.DB,
      skills: [
        {
          imagePathOrUrl: SKILLS.ORACLE_LOGO,
          cardSubTitle: SKILLS.ORACLE,
        },
        {
          imagePathOrUrl: SKILLS.MYSQL_LOGO,
          cardSubTitle: SKILLS.MYSQL,
        },
        {
          imagePathOrUrl: SKILLS.MONGODB_LOGO,
          cardSubTitle: SKILLS.MONGODB,
        }
        ,
        {
          imagePathOrUrl: SKILLS.SQLITE_LOGO,
          cardSubTitle: SKILLS.SQLITE,
        },
      ]
    },
    {
      tabLabel: SKILLS.ANALYTICAL_TOOLS,
      skills: [
        {
          imagePathOrUrl: SKILLS.PANDAS_LOGO,
          cardSubTitle: SKILLS.PANDAS,
        },
        {
          imagePathOrUrl: SKILLS.NUMPY_LOGO,
          cardSubTitle: SKILLS.NUMPY,
        },
        {
          imagePathOrUrl: SKILLS.MATPLOTLIB_LOGO,
          cardSubTitle: SKILLS.MATPLOTLIB,
        }
        ,
        {
          imagePathOrUrl: SKILLS.ML_LOGO,
          cardSubTitle: SKILLS.OTHER_ML,
        },
        {
          imagePathOrUrl: SKILLS.EXCEL_LOGO,
          cardSubTitle: SKILLS.EXCEL,
        },
      ]
    },
    {
      tabLabel: SKILLS.MISCELLANEOUS,
      skills: [
        {
          imagePathOrUrl: SKILLS.GIT_LOGO,
          cardSubTitle: SKILLS.GIT,
        },
        {
          imagePathOrUrl: SKILLS.FORTRAN_LOGO,
          cardSubTitle: SKILLS.FORTRAN,
        },
        {
          imagePathOrUrl: SKILLS.RABBITMQ_LOGO,
          cardSubTitle: SKILLS.RABBITMQ,
        }
        ,
        {
          imagePathOrUrl: SKILLS.DOCKER_LOGO,
          cardSubTitle: SKILLS.DOCKER,
        },
        {
          imagePathOrUrl: PROFILE.PRFILE_PIC,
          cardSubTitle: SKILLS.DS_ALGO,
        },
      ]
    },
    {
      tabLabel: SKILLS.OS,
      skills: [
        {
          imagePathOrUrl: SKILLS.LINUX_LOGO,
          cardSubTitle: SKILLS.LINUX,
        },
        {
          imagePathOrUrl: SKILLS.WINDOW_LOGO,
          cardSubTitle: SKILLS.WINDOWS,
        },
      
      ]
    },

  ]

}
