import { Component, OnInit } from '@angular/core';
import { ITabCardEntity } from 'src/app/shared/types/shared.interface';
import { EDUCATION, EXPERIENCE, PROFILE, PROJECTS } from '../constant/product-feature-constant';

@Component({
  selector: 'projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  projectData: ITabCardEntity[] = [
    {
      tabLabel: PROJECTS.REVIEWBOOK,
      cardTitle: PROJECTS.REVIEWBOOK_PLATFORM,
      imagePathOrUrl: EXPERIENCE.CGI_LOGO,
      cardSubTitle: {
        content: PROJECTS.CGI_PRODUCT_ENGG,
      },
      cardContentList: [
        PROJECTS.REVIEWBOOK_PROBLEM_STATEMENT, PROJECTS.REVIEWBOOK_DB_ARCH, PROJECTS.REVIEWBOOK_MICROSERVICES, PROJECTS.REVIEWBOOK_ANGULAR_ARCH, 
        // PROJECTS.REVIEWBOOK_TECHNOLOGIES
      ],
      session: PROJECTS.REVIEWBOOK_SESSION,
      // location: PROJECTS.REVIEWBOOK_LOCATION,
      isDialog: true,
      dialogData: {
        url: PROJECTS.REVIEWBOOK_LOCATION,
        sourceCodeUrl: PROJECTS.REVIEWBOOK_DOC_SOURCE_URL,
        archDiagramUrl: PROJECTS.REVIEWBOOK_DOC_ARC_DIAGRAM,
        techDiagramUrl: PROJECTS.REVIEWBOOK_DOC_TECH_DIAGRAM
      }
    },
    {
      tabLabel: PROJECTS.CONFERENCE_WEB,
      cardTitle: PROJECTS.IITG_WEB,
      imagePathOrUrl: EDUCATION.IITG_LOGO,
      cardSubTitle: {
        content: PROJECTS.DOC_IITG,
      },
      cardContentList: [
        PROJECTS.CONFERENCE_TEAM, PROJECTS.CONFERENCE_DEV//, PROJECTS.CONFERENCE_TECH
      ],
      session: PROJECTS.CONFERENCE_SESSION,
      location: PROJECTS.CONFERENCE_LOCATION
    },
    // {
    //   tabLabel: PROJECTS.NLP,
    //   cardTitle: PROJECTS.NLP_TITLE,
    //   imagePathOrUrl: PROJECTS.NLP_LOGO,
    //   cardSubTitle: {
    //     content: PROJECTS.NLP_DUEDASH,
    //   },
    //   cardContentList: [
    //     PROJECTS.NLP_ACTIVITY_TEXT, PROJECTS.NLP_ACTIVITY_IMAGE, PROJECTS.NLP_TECH
    //   ],
    //   session: PROJECTS.NLP_SESSION,
    //   link: PROJECTS.NLP_LOCATION,
    //   location: PROJECTS.NLP_LOCATION
    // },
    // {
    //   tabLabel: PROJECTS.CRICKET_GAME,
    //   cardTitle: PROJECTS.CRICKET_GAME_PY,
    //   imagePathOrUrl: PROJECTS.INTERNSHALA_LOGO,
    //   cardSubTitle: {
    //     content: PROJECTS.INTERNSHALA,
    //   },
    //   cardContentList: [
    //     PROJECTS.CRICKET_GAME_ACTIVITY
    //   ],
    //   session: PROJECTS.CRICKET_GAME_SESSION,
    //   link: PROJECTS.CRICKET_GAME_LOCATION,
    //   location: PROJECTS.CRICKET_GAME_LOCATION,
    //   result:{
    //     resultImage: PROJECTS.CRICKET_GAME_RESULT,
    //     altText: ''
    //   }
    // },
    // {
    //   tabLabel: PROJECTS.ML,
    //   cardTitle: PROJECTS.ML_PREDICTION,
    //   imagePathOrUrl: PROFILE.PRFILE_PIC,
    //   cardSubTitle: {
    //     content: PROJECTS.ML_TECH,
    //   },
    //   cardContentList: [
    //     PROJECTS.ML_ACTIVITY
    //   ],
    //   session: PROJECTS.ML_SESSION,
    //   link: PROJECTS.ML_LOCATION,
    //   location: PROJECTS.ML_LOCATION,
      
    // },
    // {
    //   tabLabel: PROJECTS.AUTOMATION,
    //   cardTitle: PROJECTS.AUTOMATION_PY,
    //   imagePathOrUrl: PROFILE.PRFILE_PIC,
    //   cardSubTitle: {
    //     content: PROJECTS.SELF_PACED_PROJECT
    //   },
    //   cardContentList: [
    //     PROJECTS.AUTOMATION_ACTIVITY, PROJECTS.AUTOMATION_FEATURE, PROJECTS.AUTOMATION_TECH
    //   ],
    //   session: PROJECTS.AUTOMATION_SESSION,
    //   link: PROJECTS.AUTOMATION_LOCATION,
    //   location: PROJECTS.AUTOMATION_LOCATION,
     
    // },
    // {
    //   tabLabel: PROJECTS.ANALYSIS,
    //   cardTitle: PROJECTS.ANALYSIS_MINING,
    //   imagePathOrUrl: PROFILE.PRFILE_PIC,
    //   cardSubTitle: {
    //     content: PROJECTS.SELF_PACED_PROJECT
    //   },
    //   cardContentList: [
    //     PROJECTS.ANALYSIS_ACTIVITY, PROJECTS.ANALYSIS_TECH
    //   ],
    //   session: PROJECTS.ANALYSIS_SESSION,
    //   link: PROJECTS.ANALYSIS_LOCATION,
    //   location: PROJECTS.ANALYSIS_LOCATION,
    //   result: {
    //     resultImage: PROJECTS.ANALYSIS_WORD_CLOUD,
    //     altText:''
    //   }
     
    // },
    
  ]
}
