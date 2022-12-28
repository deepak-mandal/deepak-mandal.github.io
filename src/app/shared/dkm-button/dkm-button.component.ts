import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dkm-button',
  templateUrl: './dkm-button.component.html',
  styleUrls: ['./dkm-button.component.css']
})
export class DkmButtonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() label!: string;

}
