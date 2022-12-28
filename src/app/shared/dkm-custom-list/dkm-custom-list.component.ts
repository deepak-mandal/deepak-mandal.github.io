import { Component, Input, OnInit } from '@angular/core';
import { ITabCardListEntity } from '../types/shared.interface';

@Component({
  selector: 'dkm-custom-list',
  templateUrl: './dkm-custom-list.component.html',
  styleUrls: ['./dkm-custom-list.component.css']
})
export class DkmCustomListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() data!: ITabCardListEntity[]

}
