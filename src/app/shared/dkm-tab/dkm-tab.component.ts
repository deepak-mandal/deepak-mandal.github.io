import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'dkm-tab',
    templateUrl: './dkm-tab.component.html',
    styleUrls: ['./dkm-tab.component.css'],
    standalone: false
})
export class DkmTabComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() tabLabelList!: string[]


}
