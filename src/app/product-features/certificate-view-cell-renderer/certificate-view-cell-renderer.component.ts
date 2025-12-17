import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'app-certificate-view-cell-renderer',
  templateUrl: './certificate-view-cell-renderer.component.html',
  styleUrls: ['./certificate-view-cell-renderer.component.scss']
})
export class CertificateViewCellRendererComponent implements ICellRendererAngularComp {
  public cellValue!: string;
  public params!: ICellRendererParams;

  constructor() {}

  // gets called once before the renderer is used
  agInit(params: ICellRendererParams): void {
    this.params = params;
    this.cellValue = this.getValueToDisplay(params);
  }

  // gets called whenever the user gets the cell to refresh
  refresh(params: ICellRendererParams) {
    this.params = params;
    this.cellValue = this.getValueToDisplay(params);
    return true;
  }

  getValueToDisplay(params: ICellRendererParams) {
    return params.valueFormatted ? params.valueFormatted : params.value;
  }

}
