import { Component, OnInit } from '@angular/core';
import { ITabCardListEntity } from 'src/app/shared/types/shared.interface';
import { PROFILE, SKILLS } from '../constant/product-feature-constant';
import { DkmCustomListComponent } from '../../shared/dkm-custom-list/dkm-custom-list.component';
import { ColDef, ColumnApi, GridApi, GridReadyEvent } from 'ag-grid-community';
import { SKILL_ENTITY } from '../types/product-features.interface';
import { MatDialog } from '@angular/material/dialog';
import { AgGridModule } from 'ag-grid-angular';
import { TechCellRendererComponent } from '../tech-cell-renderer/tech-cell-renderer.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'tech-skills',
  templateUrl: './tech-skills.component.html',
  styleUrls: ['./tech-skills.component.css'],
  imports: [AgGridModule, FormsModule]
})
export class TechSkillsComponent implements OnInit {


  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  pageSizeOptions = [10, 25, 50, 100];
  pageSize = 10;

  private gridApi!: GridApi;
  private gridColumnApi!: ColumnApi;
  columnDefs: ColDef[] = [
    { field: 'skill', width: 30 },
    { field: 'technologies', cellRenderer: TechCellRendererComponent },
  ];

  public defaultColDef: ColDef = {
    // width: 150,
    sortable: true,
    resizable: true,
    filter: true,
    // cellClass: 'custom-color'
    cellStyle: { color: 'rgb(82, 54, 171)' }

  };

  rowData: SKILL_ENTITY[] = [
    {
      skill: SKILLS.PROGRAMMING_LANGUAGE,
      technologies: [
        {
          technologies: SKILLS.JAVA,
          proof: SKILLS.JAVA_LOGO,
        },
        {
          technologies: SKILLS.SQL,
          proof: SKILLS.ORACLE_LOGO,
        },
        {
          technologies: SKILLS.TYPESCRIPT,
          proof: SKILLS.TS,
        },
      ]
    },
    {
      skill: SKILLS.FRAMEWORK,
      technologies: [{
        technologies: SKILLS.SPRING,
        proof: SKILLS.SPRING_LOGO,
      },
      {
        technologies: SKILLS.ANGULAR,
        proof: SKILLS.ANGULAR_LOGO,
      },],
    },
    {
      skill: SKILLS.WEB_TECHNOLOGIES,
      technologies: [{
        technologies: SKILLS.HTML,
        proof: SKILLS.HTML_LOGO,
      },
      {
        technologies: SKILLS.CSS,
        proof: SKILLS.CSS_LOGO,
      },
      {
        technologies: SKILLS.JAVASCRIPT,
        proof: SKILLS.JS,
      },

      ],
    },

    {
      skill: SKILLS.WEB_TECHNOLOGIES_BACKEND,
      technologies: [
        {
          technologies: SKILLS.RABBITMQ,
          proof: SKILLS.RABBITMQ_LOGO,
        }],
    },
    {
      skill: SKILLS.WEB_TECHNOLOGIES_FRONTEND,
      technologies: [
        {
          technologies: SKILLS.AG_GRID,
          proof: SKILLS.AG_GRID_LOGO,
        },
        {
          technologies: SKILLS.ANGULAR_MATERIALS,
          proof: SKILLS.ANGULAR_MATERIALS_LOGO,
        },
        {
          technologies: SKILLS.RXJS,
          proof: SKILLS.RXJS_LOGO,
        },
        {
          technologies: SKILLS.BOOTSTRAP,
          proof: SKILLS.BOOTSTRAP_LOGO,
        },
      ],
    },
    {
      skill: SKILLS.TESTING,
      technologies: [
        {
          technologies: SKILLS.ANGULAR_TC,
          proof: SKILLS.ANGULAR_TC_LOGO,
        },
        {
          technologies: SKILLS.JUNIT,
          proof: SKILLS.JUNIT_LOGO,
        },
        {
          technologies: SKILLS.ESLINT,
          proof: SKILLS.ESLINT_LOGO,
        },
        {
          technologies: SKILLS.SONAR,
          proof: SKILLS.SONAR_LOGO,
        },
      ]
    },
    {
      skill: SKILLS.DB,
      technologies: [
        {
          technologies: SKILLS.ORACLE,
          proof: SKILLS.ORACLE_LOGO,
        },
        {
          technologies: SKILLS.MS_SQL,
          proof: SKILLS.MS_SQL_LOGO,
        },
        {
          technologies: SKILLS.MONGODB,
          proof: SKILLS.MONGODB_LOGO,
        },
        {
          technologies: SKILLS.MYSQL,
          proof: SKILLS.MYSQL_LOGO,
        },
        {
          technologies: SKILLS.SQLITE,
          proof: SKILLS.SQLITE_LOGO,
        },
      ]
    },
    {
      skill: SKILLS.DEV_OPS,
      technologies: [
        {
          technologies: SKILLS.JENKINS,
          proof: SKILLS.JENKINS_LOGO,
        },
        {
          technologies: SKILLS.GIT,
          proof: SKILLS.GIT_LOGO,
        },
        {
          technologies: SKILLS.DOCKER,
          proof: SKILLS.DOCKER_LOGO,
        },
        {
          technologies: SKILLS.PUTTY,
          proof: SKILLS.PUTTY_LOGO,
        },
        {
          technologies: SKILLS.WINSCP,
          proof: SKILLS.WINSCP_LOGO,
        },
      ]
    },
    {
      skill: SKILLS.ANALYTICAL_TOOLS,
      technologies: [
        {
          technologies: SKILLS.PANDAS,
          proof: SKILLS.PANDAS_LOGO,
        },
        {
          technologies: SKILLS.NUMPY,
          proof: SKILLS.NUMPY_LOGO,
        },
        {
          technologies: SKILLS.MATPLOTLIB,
          proof: SKILLS.MATPLOTLIB_LOGO,
        },
        {
          technologies: SKILLS.OTHER_ML,
          proof: SKILLS.ML_LOGO,
        },
        {
          technologies: SKILLS.EXCEL,
          proof: SKILLS.EXCEL_LOGO,
        },
      ]
    },
    {
      skill: SKILLS.MISCELLANEOUS,
      technologies: [
        {
          technologies: SKILLS.FORTRAN,
          proof: SKILLS.FORTRAN_LOGO,
        },
        {
          technologies: SKILLS.PHP,
          proof: SKILLS.PHP_LOGO,
        },
        {
          technologies: SKILLS.PYTHON,
          proof: SKILLS.PY,
        }
      ]
    },
    {
      skill: SKILLS.DSA,
      technologies: [
        {
          technologies: SKILLS.DS_ALGO,
          proof: PROFILE.PRFILE_PIC,
        }
      ]
    },
    {
      skill: SKILLS.OS,
      technologies: [
        {
          technologies: SKILLS.LINUX,
          proof: SKILLS.LINUX_LOGO,
        },
        {
          technologies: SKILLS.WINDOWS,
          proof: SKILLS.WINDOW_LOGO,
        }
      ]
    },
  ];

  onPageSizeChange(size: number) {
    this.gridApi.paginationSetPageSize(Number(size));
  }

  onGridReady(params: GridReadyEvent) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    params.api.sizeColumnsToFit();
  }
  // onRowClicked(event: any) {
  //   this.dialog.open(
  //     DkmDialogComponent, {
  //     width: 'auto',
  //     height: 'auto',
  //     data: {
  //       title: 'Certificate',
  //       imageUrl: event.data.proof,
  //       altText: event.data.Technologies,
  //       content: event.data.Certificate,
  //     }
  //   });
  // }

  technicalSkillsData: ITabCardListEntity[] = [
    {
      tabLabel: SKILLS.PROGRAMMING_LANGUAGE,
      skills: [
        {
          imagePathOrUrl: SKILLS.JAVA_LOGO,
          cardSubTitle: SKILLS.JAVA,
        },
        {
          imagePathOrUrl: SKILLS.ORACLE_LOGO,
          cardSubTitle: SKILLS.SQL,
        },
        {
          imagePathOrUrl: SKILLS.TS,
          cardSubTitle: SKILLS.TYPESCRIPT,
        }
      ]
    },
    {
      tabLabel: SKILLS.WEB_TECHNOLOGIES,
      skills: [
        {
          imagePathOrUrl: SKILLS.ANGULAR_LOGO,
          cardSubTitle: SKILLS.ANGULAR,
        },
        {
          imagePathOrUrl: SKILLS.SPRING_LOGO,
          cardSubTitle: SKILLS.SPRING,
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
          imagePathOrUrl: SKILLS.JS,
          cardSubTitle: SKILLS.JAVASCRIPT,
        },
        {
          imagePathOrUrl: SKILLS.AG_GRID_LOGO,
          cardSubTitle: SKILLS.AG_GRID,
        },
        {
          imagePathOrUrl: SKILLS.ANGULAR_MATERIALS_LOGO,
          cardSubTitle: SKILLS.ANGULAR_MATERIALS,
        },
        {
          imagePathOrUrl: SKILLS.RABBITMQ_LOGO,
          cardSubTitle: SKILLS.RABBITMQ,
        },
        {
          imagePathOrUrl: SKILLS.RXJS_LOGO,
          cardSubTitle: SKILLS.RXJS,
        }
        , {
          imagePathOrUrl: SKILLS.ANGULAR_TC_LOGO,
          cardSubTitle: SKILLS.ANGULAR_TC,
        },
        {
          imagePathOrUrl: SKILLS.JUNIT_LOGO,
          cardSubTitle: SKILLS.JUNIT,
        },
        {
          imagePathOrUrl: SKILLS.ESLINT_LOGO,
          cardSubTitle: SKILLS.ESLINT,
        },
        {
          imagePathOrUrl: SKILLS.SONAR_LOGO,
          cardSubTitle: SKILLS.SONAR,
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
          imagePathOrUrl: SKILLS.MS_SQL_LOGO,
          cardSubTitle: SKILLS.MS_SQL,
        },
        {
          imagePathOrUrl: SKILLS.MONGODB_LOGO,
          cardSubTitle: SKILLS.MONGODB,
        },
        {
          imagePathOrUrl: SKILLS.MYSQL_LOGO,
          cardSubTitle: SKILLS.MYSQL,
        },
        {
          imagePathOrUrl: SKILLS.SQLITE_LOGO,
          cardSubTitle: SKILLS.SQLITE,
        },
      ]
    },
    {
      tabLabel: SKILLS.DEV_OPS,
      skills: [
        {
          imagePathOrUrl: SKILLS.JENKINS_LOGO,
          cardSubTitle: SKILLS.JENKINS,
        },
        {
          imagePathOrUrl: SKILLS.GIT_LOGO,
          cardSubTitle: SKILLS.GIT,
        },
        {
          imagePathOrUrl: SKILLS.DOCKER_LOGO,
          cardSubTitle: SKILLS.DOCKER,
        },
        {
          imagePathOrUrl: SKILLS.PUTTY_LOGO,
          cardSubTitle: SKILLS.PUTTY,
        },
        {
          imagePathOrUrl: SKILLS.WINSCP_LOGO,
          cardSubTitle: SKILLS.WINSCP,
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
          imagePathOrUrl: PROFILE.PRFILE_PIC,
          cardSubTitle: SKILLS.DS_ALGO,
        },
        {
          imagePathOrUrl: SKILLS.PY,
          cardSubTitle: SKILLS.PYTHON,
        },

        {
          imagePathOrUrl: SKILLS.FORTRAN_LOGO,
          cardSubTitle: SKILLS.FORTRAN,
        },

        {
          imagePathOrUrl: SKILLS.PHP_LOGO,
          cardSubTitle: SKILLS.PHP,
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
