import { Component, OnInit } from '@angular/core';
import { MatDialog as MatDialog } from '@angular/material/dialog';
import { DkmDialogComponent } from 'src/app/shared/dkm-dialog/dkm-dialog.component';
import { MatCard, MatCardSubtitle } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';

@Component({
    selector: 'footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss'],
    imports: [MatCard, MatIcon, MatCardSubtitle]
})
export class FooterComponent implements OnInit {


currentYear = 2024;
  ngOnInit(): void {
    this.currentYear = new Date().getFullYear();
  }

  constructor(public dialog: MatDialog) { }

  openDialog(): void {
    this.dialog.open(
      DkmDialogComponent, {
      width: 'auto',
      height: 'auto',
      data: {
        title: 'Deepak',
        imageUrl: 'assets/images/dkm.jpeg',
        altText: 'Deepak',
        content: 'Software Engineer, IITian'
      }
    });
  }

}
