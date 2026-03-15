import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';
import { TECH } from '../types/product-features.interface';

@Component({
  selector: 'app-tech-cell-renderer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="tech-cell">
      <span *ngFor="let t of techs" class="tech-chip">
        <img *ngIf="t.proof" [src]="t.proof" [alt]="t.technologies" class="tech-img" loading="lazy" />
        <span class="tech-label">{{ t.technologies }}</span>
      </span>
    </div>
  `,
  styles: [`
    .tech-cell { display: flex; flex-wrap: wrap; gap: 4px; align-items: center; padding: 2px 0; }
    .tech-chip { display: inline-flex; align-items: center; gap: 4px; background: #f3f0ff; border-radius: 12px; padding: 2px 8px; }
    .tech-img { width: 18px; height: 18px; object-fit: contain; border-radius: 2px; }
    .tech-label { font-size: 12px; color: rgb(82, 54, 171); white-space: nowrap; }
  `]
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
