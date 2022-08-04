import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class CertificatesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  dataSource = ELEMENT_DATA;
  columnsToDisplay = ['Organization', 'Certificate', 'Technologies'];
  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
  expandedElement!: PeriodicElement | null;





  // 
  // cpmaImg = 'assets/images/cpma.png'
  // cpmaAlt = 'cpma'

  // pyImg = 'assets/images/python.png'
  // pyAlt = 'python'
  // phpImg = 'assets/images/php.png'
  // phpAlt = 'php'
  // dsaImg = 'assets/images/data-structures-and-algorithms.png'
  // dsaAlt = 'dsa'
  // cImg = 'assets/images/cpp.png'
  // cAlt = 'cpp'

  // lataxImg = 'assets/images/latex.jpg'
  // lataxAlt = 'LaTaX'

  // hackerRankImg = 'assets/images/sql.png'
  // hackerRankAlt = 'LaTaX'

  // problemSolvingImg = 'assets/images/problem-solving.png'
  // hrpyImg = 'assets/images/Python-basic.png'
}


export interface PeriodicElement {
  Organization: String;
  Certificate: string;
  proof: string;
  Technologies: string;
  name: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    Organization: 'Henry Harvin Analytics Academy',
    Certificate: 'Certified Python Marketing Analytics (CPMA)',
    Technologies: 'Machine learning technique (ML), Python',
    proof : 'assets/images/cpma.png',
    name: 'CPMA'
  },
  {
    Organization: 'Internshala Trainings',
    Certificate: 'Programming in Python',
    Technologies: 'Python, SQLite, GUI - PyQt',
    proof : 'assets/images/python.png',
    name : 'Python'
  },
  {
    Organization: 'Udemy',
    Certificate: 'Data Structures and Algorithms',
    Technologies: 'Python, DS-Algo',
    proof : 'assets/images/data-structures-and-algorithms.png',
    name : 'ds-algo'
  },
  {
    Organization: 'Internshala Trainings',
    Certificate: 'Web Development',
    Technologies: 'PHP, MySQL, HTML, CSS, Bootstrap',
    proof : 'assets/images/php.png',
    name : 'PHP'
  },
  {
    Organization: 'Internshala Trainings',
    Certificate: 'Programming with C/C++',
    Technologies: 'C, C++',
    proof : 'assets/images/cpp.png',
    name : 'C/C++'
  },
  {
    Organization: 'HackerRank',
    Certificate: 'Problem Solving',
    Technologies: 'ds algo',
    proof : 'assets/images/problem-solving.png',
    name : 'Python'
  },
  {
    Organization: 'HackerRank',
    Certificate: 'SQL',
    Technologies: 'SQL',
    proof : 'assets/images/sql.png',
    name : 'SQL'
  },
  {
    Organization: 'HackerRank',
    Certificate: 'Python',
    Technologies: 'Python',
    proof : 'assets/images/Python-basic.png',
    name : 'Python'
  },
  {
    Organization: 'RSFM@IITG',
    Certificate: 'LaTeX Workshop',
    Technologies: 'LaTeX',
    proof : 'assets/images/latex.jpg',
    name : 'LaTeX'
  },

  // {
  //   position: 2,
  //   name: 'Helium',
  //   weight: 4.0026,
  //   symbol: 'He',
  //   description: `Helium is a chemical element with symbol He and atomic number 2. It is a
  //       colorless, odorless, tasteless, non-toxic, inert, monatomic gas, the first in the noble gas
  //       group in the periodic table. Its boiling point is the lowest among all the elements.`,
  // },
  // {
  //   position: 3,
  //   name: 'Lithium',
  //   weight: 6.941,
  //   symbol: 'Li',
  //   description: `Lithium is a chemical element with symbol Li and atomic number 3. It is a soft,
  //       silvery-white alkali metal. Under standard conditions, it is the lightest metal and the
  //       lightest solid element.`,
  // },
  // {
  //   position: 4,
  //   name: 'Beryllium',
  //   weight: 9.0122,
  //   symbol: 'Be',
  //   description: `Beryllium is a chemical element with symbol Be and atomic number 4. It is a
  //       relatively rare element in the universe, usually occurring as a product of the spallation of
  //       larger atomic nuclei that have collided with cosmic rays.`,
  // },
  // {
  //   position: 5,
  //   name: 'Boron',
  //   weight: 10.811,
  //   symbol: 'B',
  //   description: `Boron is a chemical element with symbol B and atomic number 5. Produced entirely
  //       by cosmic ray spallation and supernovae and not by stellar nucleosynthesis, it is a
  //       low-abundance element in the Solar system and in the Earth's crust.`,
  // },
  // {
  //   position: 6,
  //   name: 'Carbon',
  //   weight: 12.0107,
  //   symbol: 'C',
  //   description: `Carbon is a chemical element with symbol C and atomic number 6. It is nonmetallic
  //       and tetravalent—making four electrons available to form covalent chemical bonds. It belongs
  //       to group 14 of the periodic table.`,
  // },
  // {
  //   position: 7,
  //   name: 'Nitrogen',
  //   weight: 14.0067,
  //   symbol: 'N',
  //   description: `Nitrogen is a chemical element with symbol N and atomic number 7. It was first
  //       discovered and isolated by Scottish physician Daniel Rutherford in 1772.`,
  // },
  // {
  //   position: 8,
  //   name: 'Oxygen',
  //   weight: 15.9994,
  //   symbol: 'O',
  //   description: `Oxygen is a chemical element with symbol O and atomic number 8. It is a member of
  //        the chalcogen group on the periodic table, a highly reactive nonmetal, and an oxidizing
  //        agent that readily forms oxides with most elements as well as with other compounds.`,
  // },
  // {
  //   position: 9,
  //   name: 'Fluorine',
  //   weight: 18.9984,
  //   symbol: 'F',
  //   description: `Fluorine is a chemical element with symbol F and atomic number 9. It is the
  //       lightest halogen and exists as a highly toxic pale yellow diatomic gas at standard
  //       conditions.`,
  // },
  // {
  //   position: 10,
  //   name: 'Neon',
  //   weight: 20.1797,
  //   symbol: 'Ne',
  //   description: `Neon is a chemical element with symbol Ne and atomic number 10. It is a noble gas.
  //       Neon is a colorless, odorless, inert monatomic gas under standard conditions, with about
  //       two-thirds the density of air.`,
  // },
];