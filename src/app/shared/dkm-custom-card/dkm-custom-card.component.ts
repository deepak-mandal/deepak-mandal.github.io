import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ReviewDocumentationComponent } from 'src/app/product-features/review-documentation/review-documentation.component';
import { ITabCardEntity } from '../types/shared.interface';
import { MatTabGroup, MatTab } from '@angular/material/tabs';
import { NgFor, NgIf, NgStyle } from '@angular/common';
import { MatCard, MatCardHeader, MatCardAvatar, MatCardTitle, MatCardSubtitle, MatCardContent, MatCardImage, MatCardActions } from '@angular/material/card';
import { MatList, MatListItem } from '@angular/material/list';
import { MatButton } from '@angular/material/button';

@Component({
    selector: 'dkm-custom-card',
    templateUrl: './dkm-custom-card.component.html',
    styleUrls: ['./dkm-custom-card.component.css'],
    imports: [MatTabGroup, NgFor, MatTab, MatCard, NgIf, MatCardHeader, MatCardAvatar, NgStyle, MatCardTitle, MatCardSubtitle, MatCardContent, MatList, MatListItem, MatCardImage, MatCardActions, MatButton]
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
