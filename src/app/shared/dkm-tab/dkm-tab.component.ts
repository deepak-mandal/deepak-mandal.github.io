import { Component, Input, OnInit } from '@angular/core';
import { MatTabGroup, MatTab } from '@angular/material/tabs';


@Component({
    selector: 'dkm-tab',
    templateUrl: './dkm-tab.component.html',
    styleUrls: ['./dkm-tab.component.css'],
    imports: [MatTabGroup, MatTab]
})
export class DkmTabComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() tabLabelList!: string[]


}
