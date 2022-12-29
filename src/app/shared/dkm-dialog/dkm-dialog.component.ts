// import { Component, Input, OnInit } from '@angular/core';
// import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-dkm-dialog',
  templateUrl: './dkm-dialog.component.html',
  styleUrls: ['./dkm-dialog.component.scss']
})
export class DkmDialogComponent {

  constructor(public dialogRef: MatDialogRef<DkmDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }



}
