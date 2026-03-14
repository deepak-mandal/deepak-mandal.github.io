// import { Component, Input, OnInit } from '@angular/core';
// import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA as MAT_DIALOG_DATA, MatDialogRef, MatDialogTitle, MatDialogClose, MatDialogContent, MatDialogActions } from '@angular/material/dialog';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { CdkScrollable } from '@angular/cdk/scrolling';
import { MatCard, MatCardImage } from '@angular/material/card';
@Component({
    selector: 'app-dkm-dialog',
    templateUrl: './dkm-dialog.component.html',
    styleUrls: ['./dkm-dialog.component.scss'],
    imports: [MatDialogTitle, MatButton, MatDialogClose, MatIcon, CdkScrollable, MatDialogContent, MatCard, MatCardImage, MatDialogActions]
})
export class DkmDialogComponent {

  constructor(public dialogRef: MatDialogRef<DkmDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }



}
