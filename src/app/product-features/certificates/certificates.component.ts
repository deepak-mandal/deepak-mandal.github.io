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
    cellStyle: { color: 'rgb(82, 54, 171)' }

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
      Certificate: 'Introduction to Computing - Data structures & algorithms, Computing Laboratory, Computational (Theory+Lab) & Core Mathematics - Calculus, Linear Algebra',
      Technologies: 'C, C++, FORTRAN',
      proof: 'assets/images/IITG.png',
      name: 'Computing Laboratory'
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
      Organization: 'Infosys/EdgeVerve/Finacle | F2025-26',
      Certificate: 'Kudos - Finacle',
      Technologies: 'Java, Spring boot, Kafka, System design',
      proof: 'assets/images/ev_kudos.png',
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
      Organization: 'Internshala Trainings | 2020',
      Certificate: 'Programming in Python',
      Technologies: 'Python, SQLite, GUI - PyQt',
      proof: 'assets/images/python.png',
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
      Organization: 'CGI | 2024',
      Certificate: 'Product Engineering',
      Technologies: 'Java, Spring Boot, Angular, SQL',
      proof: 'assets/images/cgi-4th-yearbook.jpg',
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
      Organization: 'CGI | 2021',
      Certificate: 'Java full-stack training - Spring & Angular',
      Technologies: 'Java, SQL, Spring, Angular',
      proof: 'assets/images/cgi.png',
      name: 'LaTeX'
    },
    {
      Organization: 'RSFM, IITG | 2018',
      Certificate: 'LaTeX Workshop @ IITG',
      Technologies: 'LaTeX',
      proof: 'assets/images/latex.jpg',
      name: 'LaTeX'
    },
    {
      Organization: 'HackerRank | 2020',
      Certificate: 'Problem Solving',
      Technologies: 'ds algo',
      proof: 'assets/images/problem-solving.png',
      name: 'Python'
    },
    {
      Organization: 'HackerRank | 2020',
      Certificate: 'SQL',
      Technologies: 'SQL',
      proof: 'assets/images/sql.png',
      name: 'SQL'
    },
    {
      Organization: 'HackerRank | 2020',
      Certificate: 'Python',
      Technologies: 'Python',
      proof: 'assets/images/Python-basic.png',
      name: 'Python'
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
      }
    });
  }

}
