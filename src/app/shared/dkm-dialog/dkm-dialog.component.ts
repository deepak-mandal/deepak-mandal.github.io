// import { Component, Input, OnInit } from '@angular/core';
// import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, Inject } from '@angular/core';
import { MatLegacyDialog as MatDialog, MAT_LEGACY_DIALOG_DATA as MAT_DIALOG_DATA, MatLegacyDialogRef as MatDialogRef } from '@angular/material/legacy-dialog';
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
