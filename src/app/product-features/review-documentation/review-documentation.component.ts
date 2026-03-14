import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA as MAT_DIALOG_DATA, MatDialogTitle, MatDialogClose, MatDialogContent, MatDialogActions } from '@angular/material/dialog';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { CdkScrollable } from '@angular/cdk/scrolling';
import { MatCard, MatCardSubtitle, MatCardContent, MatCardImage } from '@angular/material/card';
import { MatDivider } from '@angular/material/list';

@Component({
    selector: 'app-review-documentation',
    templateUrl: './review-documentation.component.html',
    styleUrls: ['./review-documentation.component.scss'],
    imports: [MatDialogTitle, MatButton, MatDialogClose, MatIcon, CdkScrollable, MatDialogContent, MatCard, MatCardSubtitle, MatCardContent, MatCardImage, MatDivider, MatDialogActions]
})
export class ReviewDocumentationComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ReviewDocumentationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }
  archDiagramUrl = "assets/images/product_arc_diagram.png";
  techDiagramUrl ="assets/images/product_tech_diagram.png";
  sourceCodeUrl="https://github.com/deepak-mandal/ReviewBook"
  ngOnInit(): void {
  }

}
