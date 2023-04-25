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

  ngOnInit(): void {
  }

}
