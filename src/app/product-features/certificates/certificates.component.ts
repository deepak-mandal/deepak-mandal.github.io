import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ColDef, ColumnApi, GridApi, GridReadyEvent, SelectionChangedEvent } from 'ag-grid-community';
import { DkmDialogComponent } from 'src/app/shared/dkm-dialog/dkm-dialog.component';
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
    { field: 'Certificate', },
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
      Organization: 'Henry Harvin Analytics Academy',
      Certificate: 'Certified Python Marketing Analytics (CPMA)',
      Technologies: 'Machine learning technique (ML), Python',
      proof: 'assets/images/cpma.png',
      name: 'CPMA'
    },
    {
      Organization: 'Internshala Trainings',
      Certificate: 'Programming in Python',
      Technologies: 'Python, SQLite, GUI - PyQt',
      proof: 'assets/images/python.png',
      name: 'Python'
    },
    {
      Organization: 'Udemy',
      Certificate: 'Data Structures and Algorithms',
      Technologies: 'Python, DS-Algo',
      proof: 'assets/images/data-structures-and-algorithms.png',
      name: 'ds-algo'
    },
    {
      Organization: 'Internshala Trainings',
      Certificate: 'Web Development',
      Technologies: 'PHP, MySQL, HTML, CSS, Bootstrap',
      proof: 'assets/images/php_cert.png',
      name: 'PHP'
    },
    {
      Organization: 'Internshala Trainings',
      Certificate: 'Programming with C/C++',
      Technologies: 'C, C++',
      proof: 'assets/images/cpp.png',
      name: 'C/C++'
    },
    {
      Organization: 'HackerRank',
      Certificate: 'Problem Solving',
      Technologies: 'ds algo',
      proof: 'assets/images/problem-solving.png',
      name: 'Python'
    },
    {
      Organization: 'HackerRank',
      Certificate: 'SQL',
      Technologies: 'SQL',
      proof: 'assets/images/sql.png',
      name: 'SQL'
    },
    {
      Organization: 'HackerRank',
      Certificate: 'Python',
      Technologies: 'Python',
      proof: 'assets/images/Python-basic.png',
      name: 'Python'
    },
    {
      Organization: 'RSFM@IITG',
      Certificate: 'LaTeX Workshop',
      Technologies: 'LaTeX',
      proof: 'assets/images/latex.jpg',
      name: 'LaTeX'
    },
    {
      Organization: 'IIT Guwahati',
      Certificate: 'Introduction to Computing + Computing Laboratory',
      Technologies: 'C programming language',
      proof: 'assets/images/iitg.png',
      name: 'Computing Laboratory'
    },
    {
      Organization: 'IITG',
      Certificate: 'Computational (Theory+Lab) & Core Mathematics - Calculus, Linear Algebra',
      Technologies: 'FORTRAN coding',
      proof: 'assets/images/iitg.png',
      name: 'Introduction to Computing & Computational (Theory+Lab)'
    },
    {
      Organization: 'CGI',
      Certificate: 'Technical & Non-Technical Courses',
      Technologies: 'full-stack',
      proof: 'https://drive.google.com/file/d/1CJ3xWwSiYNTd4XFsGw5MCO_Lvfpan8f9/view?usp=sharing',
      name: 'https://drive.google.com/file/d/1CJ3xWwSiYNTd4XFsGw5MCO_Lvfpan8f9/view?usp=sharing'
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
        content: event.data.Certificate,
      }
    });
  }

}
