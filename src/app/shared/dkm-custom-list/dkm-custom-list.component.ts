import { Component, Input, OnInit } from '@angular/core';
import { ITabCardListEntity } from '../types/shared.interface';
import { MatTabGroup, MatTab } from '@angular/material/tabs';
import { NgFor, NgStyle } from '@angular/common';
import { MatCard, MatCardHeader, MatCardAvatar, MatCardSubtitle } from '@angular/material/card';
import { MatList, MatListItem } from '@angular/material/list';

@Component({
    selector: 'dkm-custom-list',
    templateUrl: './dkm-custom-list.component.html',
    styleUrls: ['./dkm-custom-list.component.css'],
    imports: [MatTabGroup, NgFor, MatTab, MatCard, MatList, MatListItem, MatCardHeader, MatCardAvatar, NgStyle, MatCardSubtitle]
})
export class DkmCustomListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() data!: ITabCardListEntity[]

}
