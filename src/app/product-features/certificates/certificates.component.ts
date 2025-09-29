import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ColDef, ColumnApi, GridApi, GridReadyEvent, SelectionChangedEvent } from 'ag-grid-community';
import { DkmDialogComponent } from 'src/app/shared/dkm-dialog/dkm-dialog.component';
import { CertificateViewCellRendererComponent } from '../certificate-view-cell-renderer/certificate-view-cell-renderer.component';
import { CERTIFICATE_ENTITY } from '../types/product-features.interface';

@Component({
  selector: 'certificates',
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.scss']
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
    { field: 'Organization', },
  ];

  public defaultColDef: ColDef = {
    // width: 150,
    sortable: true,
    resizable: true,
    filter: true,
    // cellClass: 'custom-color'
    cellStyle: { color: 'rgb(82, 54, 171)' }

  };

  rowData: CERTIFICATE_ENTITY[] = [
    {
      Organization: 'Asia Pacific Solutions Delivery Center (ASDC), CGI',
      Certificate: 'Bronze award from SVP, CGI',
      Technologies: 'Java 8, Spring Boot v3, Angular v17, MS SQL',
      proof: 'assets/images/CGI-Bronze_Award_Certificate-F2024.png',
      name: ''
    },
    {
      Organization: 'Collaboration with CGI and Microsoft',
      Certificate: 'AI Powered Software Development',
      Technologies: 'AI, Java, Azure',
      proof: 'assets/images/AI.png',
      name: ''
    },
    {
      Organization: 'Greater Toronto Area (GTA), CGI',
      Certificate: 'Bronze award from president, CGI',
      Technologies: 'Java, Spring, Angular, SQL (Oracle)',
      proof: 'assets/images/CGI_Award_ecertificate.png',
      name: ''
    },
    {
      Organization: 'CGI DataCycle360 Mobile UI app - European solutions',
      Certificate: 'Leadership in localization feature',
      Technologies: 'Angular, Nginx (deployment configuration, and production mode testing of Multiple locale simultaneously in local), External static(MSAL authentication client specific) package.json file configuration based on dev, test, prod/client mode',
      proof: 'assets/images/applauds-feb2025.png',
      name: ''
    },
    {
      Organization: 'CGI Wealth360 - Greater Toronto Area',
      Certificate: 'Applauds from GTA & ASDC',
      Technologies: 'Java, Spring, Angular, SQL; Angular v8 to v10 upgrade of Hybrid application consisting of AngularJS & Angular 2+; Production/Client fixes',
      proof: 'assets/images/applauds.png',
      name: ''
    },
    {
      Organization: 'Henry Harvin Analytics Academy',
      Certificate: 'Certified Python Marketing Analytics (CPMA)',
      Technologies: 'Machine learning technique (ML), Python',
      proof: 'assets/images/cpma.png',
      name: ''
    },
    {
      Organization: 'Internshala Trainings',
      Certificate: 'Programming in Python',
      Technologies: 'Python, SQLite, GUI - PyQt',
      proof: 'assets/images/python.png',
      name: ''
    },
    {
      Organization: 'Udemy',
      Certificate: 'Data Structures and Algorithms',
      Technologies: 'Python, DS-Algo',
      proof: 'assets/images/data-structures-and-algorithms.png',
      name: ''
    },
     {
      Organization: 'CGI',
      Certificate: 'Product Engineering',
      Technologies: 'Java, Spring Boot, Angular, SQL',
      proof: 'assets/images/cgi-4th-yearbook.jpg',
      name: ''
    },
    {
      Organization: 'Internshala Trainings',
      Certificate: 'Web Development',
      Technologies: 'PHP, MySQL, HTML, CSS, Bootstrap',
      proof: 'assets/images/php_cert.png',
      name: ''
    },
    {
      Organization: 'Internshala Trainings',
      Certificate: 'Programming with C/C++',
      Technologies: 'C, C++',
      proof: 'assets/images/cpp.png',
      name: ''
    },
    // {
    //   Organization: 'HackerRank',
    //   Certificate: 'Problem Solving',
    //   Technologies: 'ds algo',
    //   proof: 'assets/images/problem-solving.png',
    //   name: 'Python'
    // },
    // {
    //   Organization: 'HackerRank',
    //   Certificate: 'SQL',
    //   Technologies: 'SQL',
    //   proof: 'assets/images/sql.png',
    //   name: 'SQL'
    // },
    // {
    //   Organization: 'HackerRank',
    //   Certificate: 'Python',
    //   Technologies: 'Python',
    //   proof: 'assets/images/Python-basic.png',
    //   name: 'Python'
    // },
    {
      Organization: 'RSFM@IITG',
      Certificate: 'LaTeX Workshop',
      Technologies: 'LaTeX',
      proof: 'assets/images/latex.jpg',
      name: 'LaTeX'
    },
    {
      Organization: 'IIT Guwahati',
      Certificate: 'Introduction to Computing + Computing Laboratory, Computational (Theory+Lab) & Core Mathematics - Calculus, Linear Algebra',
      Technologies: 'C programming language, FORTRAN',
      proof: 'assets/images/IITG.png',
      name: 'Computing Laboratory'
    },
    // {
    //   Organization: 'IITG',
    //   Certificate: 'Computational (Theory+Lab) & Core Mathematics - Calculus, Linear Algebra',
    //   Technologies: 'FORTRAN coding',
    //   proof: 'assets/images/iitg.png',
    //   name: 'Introduction to Computing & Computational (Theory+Lab)'
    // },
    // {
    //   Organization: 'CGI',
    //   Certificate: 'Technical & Non-Technical Courses',
    //   Technologies: 'full-stack',
    //   proof: 'https://drive.google.com/file/d/1CJ3xWwSiYNTd4XFsGw5MCO_Lvfpan8f9/view?usp=sharing',
    //   name: 'https://drive.google.com/file/d/1CJ3xWwSiYNTd4XFsGw5MCO_Lvfpan8f9/view?usp=sharing'
    // },
    // {
    //   Organization: 'CGI',
    //   Certificate: 'Applauds from scrum master',
    //   Technologies: 'Angular',
    //   proof: 'assets/images/Deepak-Apprication.png',
    //   name: 'ASDC'
    // },
    // {
    //   Organization: 'CGI',
    //   Certificate: 'Applauds',
    //   Technologies: 'Java',
    //   proof: 'assets/images/cgi-applaud4.png',
    //   name: ''
    // },
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
        content: event.data.Certificate,
      }
    });
  }

}
