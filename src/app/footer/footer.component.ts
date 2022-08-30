import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProfileDialogComponent } from '../profile-dialog/profile-dialog.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  wordCloudImg = 'assets/images/tech.png'
  wordCloudAlt = 'Software Engineer, CGI || B.Tech, IIT Guwahati'
  deepakImg = 'assets/images/dkm-profile.jpeg';
  deepakAlt = 'Software Engineer, IITian';

  constructor(public dialog: MatDialog) { }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(
      ProfileDialogComponent, {
      width: 'auto',
      height: 'auto'
    });
  }

}
