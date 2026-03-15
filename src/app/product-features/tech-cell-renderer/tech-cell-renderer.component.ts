import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';
import { TECH } from '../types/product-features.interface';

@Component({
  selector: 'app-tech-cell-renderer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tech-cell-renderer.component.html',
  styleUrl: './tech-cell-renderer.component.scss',
})
export class TechCellRendererComponent implements ICellRendererAngularComp {
  techs: TECH[] = [];

  agInit(params: ICellRendererParams): void {
    this.techs = params.value ?? [];
  }

  refresh(params: ICellRendererParams): boolean {
    this.techs = params.value ?? [];
    return true;
  }
}
