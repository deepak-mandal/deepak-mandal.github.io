import { Component, Input, OnInit } from '@angular/core';
import { MatCard, MatCardHeader, MatCardAvatar, MatCardTitle, MatCardSubtitle, MatCardContent } from '@angular/material/card';
import { NgStyle, NgFor } from '@angular/common';
import { MatList, MatListItem } from '@angular/material/list';

@Component({
    selector: 'dkm-card',
    templateUrl: './dkm-card.component.html',
    styleUrls: ['./dkm-card.component.css'],
    imports: [MatCard, MatCardHeader, MatCardAvatar, NgStyle, MatCardTitle, MatCardSubtitle, MatCardContent, NgFor, MatList, MatListItem]
})
export class DkmCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() cardTitle!: string
  @Input() cardSubTitle!: string
  @Input() cardContentData!: string
  @Input() cardContentList!: string[]
  @Input() imagePathOrUrl!: any

}
