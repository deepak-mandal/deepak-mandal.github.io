import { Component, Input, OnInit } from '@angular/core';
import { MatButton } from '@angular/material/button';

@Component({
    selector: 'app-dkm-button',
    templateUrl: './dkm-button.component.html',
    styleUrls: ['./dkm-button.component.css'],
    imports: [MatButton]
})
export class DkmButtonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() label!: string;

}
