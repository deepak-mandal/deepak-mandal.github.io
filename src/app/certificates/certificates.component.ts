import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.css']
})
export class CertificatesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  cpmaImg = 'assets/images/cpma.png'
  cpmaAlt = 'cpma'

  pyImg = 'assets/images/python.png'
  pyAlt = 'python'
  phpImg = 'assets/images/php.png'
  phpAlt = 'php'
  dsaImg = 'assets/images/data-structures-and-algorithms.png'
  dsaAlt = 'dsa'
  cImg = 'assets/images/cpp.png'
  cAlt = 'cpp'

  lataxImg = 'assets/images/latex.jpg'
  lataxAlt = 'LaTaX'

  hackerRankImg = 'assets/images/sql.png'
  hackerRankAlt = 'LaTaX'

  problemSolvingImg = 'assets/images/problem-solving.png'
  hrpyImg = 'assets/images/Python-basic.png'
}
