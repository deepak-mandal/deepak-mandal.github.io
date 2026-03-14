import { Component, Input, OnInit } from '@angular/core';
import { MatTabGroup, MatTab } from '@angular/material/tabs';
import { NgFor } from '@angular/common';

@Component({
    selector: 'dkm-tab',
    templateUrl: './dkm-tab.component.html',
    styleUrls: ['./dkm-tab.component.css'],
    imports: [MatTabGroup, NgFor, MatTab]
})
export class DkmTabComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() tabLabelList!: string[]


}
