import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'dkm-card',
  templateUrl: './dkm-card.component.html',
  styleUrls: ['./dkm-card.component.css']
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
