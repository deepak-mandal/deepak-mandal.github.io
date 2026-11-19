import { Component, OnInit } from '@angular/core';
import { MatDialog as MatDialog } from '@angular/material/dialog';
import { ColDef, ColumnApi, GridApi, GridReadyEvent } from 'ag-grid-community';
import { DkmDialogComponent } from 'src/app/shared/dkm-dialog/dkm-dialog.component';
import { CertificateViewCellRendererComponent } from '../certificate-view-cell-renderer/certificate-view-cell-renderer.component';
import { CERTIFICATE_ENTITY } from '../types/product-features.interface';
import { AgGridModule } from 'ag-grid-angular';

@Component({
  selector: 'certificates',
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.scss'],
  imports: [AgGridModule]
})
export class CertificatesComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  private gridApi!: GridApi;
  private gridColumnApi!: ColumnApi;
  columnDefs: ColDef[] = [
    { field: 'Certificate', cellRenderer: CertificateViewCellRendererComponent },
    { field: 'Technologies', },
  ];

  public defaultColDef: ColDef = {
    sortable: true,
    resizable: true,
    filter: true,
    // cellStyle: { color: 'rgb(82, 54, 171)' }

  };

  rowData: CERTIFICATE_ENTITY[] = [
    {
      Organization: 'Asia Pacific Solutions Delivery Center (ASDC) | F2024',
      Certificate: 'Bronze award from SVP, CGI',
      Technologies: 'Java 8, Spring Boot v3, Angular v17, MS SQL',
      proof: 'assets/images/CGI-Bronze_Award_Certificate-F2024.png',
      name: ''
    },
    {
      Organization: 'IIT Guwahati | F2017-21',
      Certificate: 'Introduction to Computing & Core Mathematics',
      Technologies: 'C, C++, FORTRAN',
      proof: 'assets/images/IITG.png',
      name: 'Computing Laboratory',
      projects: [
        {
          heading: 'Introduction to Computing - Data structures & algorithms, Computing Laboratory',
          description: ['Core Mathematics - Calculus, Linear Algebra', 'Computational (Theory+Lab)',],
          url: ''
        }
      ]
    },
    {
      Organization: 'CGI | 2021',
      Certificate: 'Java full-stack training - Spring & Angular',
      Technologies: 'Java, SQL, Spring, Angular',
      proof: 'assets/images/cgi.png',
      name: 'LaTeX',
      projects: [
        {
          heading: 'ReviewBook Platform',
          description: ['Designed & developed an app where user can provide genuine reviews and ratings that can influence buying decision of other consumers',
            'Designed Architecture diagram, Database data model & schema by analyzing business requirement/high-level features.',
            'Developed microservice architecture for Registration, Login, Product management, Review management services using Spring Boot with NoSQL/MongoDB & SQL/MySQL databases. JWT authentication, microservices communication using RabbitMQ; Docker',
            'Built Restful APIs that involves CRUD operations. Designed angular application architecture including single page application corresponding to services using HTML, CSS, Bootstrap, angular materials, AG Grid; implemented custom, shared module features.',
          ],
          url: 'https://github.com/deepak-mandal/ReviewBook'
        }
      ]
    },
    {
      Organization: 'IIT Guwahati | 2020',
      Certificate: 'CRSI Conference Website',
      Technologies: 'HTML, CSS, Bootstrap, MySQLi, PHP',
      proof: 'assets/images/Project-CRSI_Conference_Website.jpg',
      name: ''
    },
    {
      Organization: 'Henry Harvin Analytics Academy | 2020',
      Certificate: 'Certified Python Marketing Analyst',
      Technologies: 'Machine learning technique (ML), Python',
      proof: 'assets/images/cpma.png',
      name: '',
      projects: [
        {
          heading: 'House Price Prediction',
          description: ['Built a Linear Regression Model to Predict the Sale Price of the House based on its characteristics.',
          ],
          url: 'https://github.com/deepak-mandal/SalePricePrediction'
        },
        {
          heading: 'Web and PDF file Data Extraction (DueDash Germany)',
          description: ['Summarization of Text:- Generated the summary from the Source text either web link or PDF file. Further Drawn their Word Cloud',
            'Text and Image Extraction from any Web Link or URL:- Extraced Images and text data from the web Links and PDF files.',
          ],
          url: 'https://github.com/deepak-mandal/DueDash-Germany'
        },
        {
          heading: 'Wikipedia Text Analytics and Mining',
          description: ['Analysed the unstructured data (article) using text mining and created the Word Cloud out of that; to understand what these article trying to say, rather than reading the entire article.',
            'Technologies used: Python3, WordCloud'],
          url: 'https://github.com/deepak-mandal/Word-Cloud-from-Text-Mining'
        },

      ]

    },
    {
      Organization: 'Internshala Trainings | 2020',
      Certificate: 'Programming in Python',
      Technologies: 'Python, SQLite, GUI - PyQt',
      proof: 'assets/images/python.png',
      name: '',
      projects: [
        {
          heading: 'Fantasy Cricket Game',
          description: ['Developed a Python-based desktop application using PyQt framework with SQLite Database.'],
          url: 'https://github.com/deepak-mandal/Game'
        },
        {
          heading: 'Email Automation with Python',
          description: ['Email automation including extraction of emails from Linkedin Post using selenium, chrome automated test software, re, pandas, Python, smtplib, Linux & Window OS, HTML, CSS, with attachments using Encrypted connections.'],
          url: 'https://github.com/deepak-mandal/Email-Automation-with-Python'
        }
      ]

    },
    {
      Organization: 'Infosys/EdgeVerve/Finacle | F2025-26',
      Certificate: 'Kudos - Finacle',
      Technologies: 'Java, Spring boot, Kafka, System design',
      proof: 'assets/images/ev_kudos.png',
      name: ''
    },
    {
      Organization: 'Greater Toronto Area (GTA) | F2022',
      Certificate: 'Bronze award from president, CGI',
      Technologies: 'Java, Spring, Angular, SQL (Oracle)',
      proof: 'assets/images/CGI_Award_ecertificate.png',
      name: ''
    },
    {
      Organization: 'CGI DataCycle360 Mobile UI app - European solutions | F2024-25',
      Certificate: 'Leadership in localization feature',
      Technologies: 'Angular, Nginx (deployment configuration, and production mode testing of Multiple locale simultaneously in local), External static(MSAL authentication client specific) package.json file configuration based on dev, test, prod/client mode',
      proof: 'assets/images/applauds-feb2025.png',
      name: ''
    },
    {
      Organization: 'CGI Wealth360 - Greater Toronto Area | F2022-23',
      Certificate: 'Applauds from GTA & ASDC - CGI',
      Technologies: 'Java, Spring, Angular, SQL; Angular v8 to v10 upgrade of Hybrid application consisting of AngularJS & Angular 2+; Production/Client fixes',
      proof: 'assets/images/applauds.png',
      name: ''
    },

    {
      Organization: 'Collaboration with CGI and Microsoft | F2025',
      Certificate: 'AI Powered Software Development (CGI)',
      Technologies: 'AI, Java, Azure',
      proof: 'assets/images/AI.png',
      name: ''
    },

    {
      Organization: 'CGI DataCycle360 - European solutions | F2023-24',
      Certificate: 'Applauds from Scrum Master, CGI | DataCycle360',
      Technologies: 'Angular, Spring boot',
      proof: 'assets/images/cgi-2024.png',
      name: ''
    },
    {
      Organization: 'Udemy | 2020',
      Certificate: 'Data Structures and Algorithms',
      Technologies: 'Python, DS-Algo',
      proof: 'assets/images/data-structures-and-algorithms.png',
      name: ''
    },
    {
      Organization: 'Internshala Trainings | 2020',
      Certificate: 'Web Development',
      Technologies: 'PHP, MySQL, HTML, CSS, Bootstrap',
      proof: 'assets/images/php_cert.png',
      name: ''
    },
    {
      Organization: 'Internshala Trainings | 2019',
      Certificate: 'Programming with C/C++',
      Technologies: 'C, C++',
      proof: 'assets/images/cpp.png',
      name: ''
    },

    {
      Organization: 'RSFM, IITG | 2018',
      Certificate: 'LaTeX Workshop @ IITG',
      Technologies: 'LaTeX',
      proof: 'assets/images/latex.jpg',
      name: 'LaTeX'
    },
  ];

  onGridReady(params: GridReadyEvent) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    params.api.sizeColumnsToFit();
  }
  onRowClicked(event: any) {
    this.dialog.open(
      DkmDialogComponent, {
      width: 'auto',
      height: 'auto',
      data: {
        title: 'Certificate',
        imageUrl: event.data.proof,
        altText: event.data.Technologies,
        content: event.data.Certificate + ' | ' + event.data.Organization,
        projects: event.data.projects
      }
    });
  }

}
