import { animate, state, style, transition, trigger } from '@angular/animations';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class CertificatesComponent {

  columnsToDisplay = ['Organization', 'Certificate', 'Technologies'];
  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
  expandedElement!: CERTIFICATE_ENTITY | null;

  dataSource = new MatTableDataSource<CERTIFICATE_ENTITY>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}

export interface CERTIFICATE_ENTITY {
  Organization: String;
  Certificate: string;
  proof: string;
  Technologies: string;
  name: string;
}

const ELEMENT_DATA: CERTIFICATE_ENTITY[] = [
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
    proof: 'assets/images/php.png',
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