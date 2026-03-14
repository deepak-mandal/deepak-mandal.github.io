import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ReviewDocumentationComponent } from 'src/app/product-features/review-documentation/review-documentation.component';
import { ITabCardEntity } from '../types/shared.interface';

@Component({
  selector: 'dkm-custom-card',
  templateUrl: './dkm-custom-card.component.html',
  styleUrls: ['./dkm-custom-card.component.css']
})
export class DkmCustomCardComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  @Input() data!: ITabCardEntity[];




  openDialog(): void {
    this.dialog.open(
      ReviewDocumentationComponent, {
      width: 'auto',
      height: 'auto',
      data: {
        title: 'ReviewBook - Product Overview',
        // imageUrl: 'assets/images/dkm.jpeg',
        // altText: 'Deepak',
        // content: 'Software Engineer, IITian',
        productDoc: this.data[0]?.dialogData,
        submitText: 'Close'

      }
    });
  }


}
