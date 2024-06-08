import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DkmDialogComponent } from 'src/app/shared/dkm-dialog/dkm-dialog.component';

@Component({
  selector: 'footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {


currentYear:number = 2024;
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
