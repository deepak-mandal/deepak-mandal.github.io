import { Component, OnInit } from '@angular/core';

interface Experience { company: string; role: string; period: string; location?: string; bullets?: string[] }
interface Education { degree: string; institute: string; percentage?: string; year?: string }
interface Project { title: string; summary: string }

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {

  ngOnInit(): void {

  }


}
