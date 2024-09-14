import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-review-documentation',
  templateUrl: './review-documentation.component.html',
  styleUrls: ['./review-documentation.component.scss']
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
