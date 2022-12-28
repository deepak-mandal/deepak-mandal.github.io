import { Component, Input, OnInit } from '@angular/core';
import { ITabCardEntity } from '../types/shared.interface';

@Component({
  selector: 'dkm-custom-card',
  templateUrl: './dkm-custom-card.component.html',
  styleUrls: ['./dkm-custom-card.component.css']
})
export class DkmCustomCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() data!: ITabCardEntity[]

}
