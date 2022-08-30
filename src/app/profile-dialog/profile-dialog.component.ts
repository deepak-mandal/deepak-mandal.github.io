import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-profile-dialog',
  templateUrl: './profile-dialog.component.html',
  styleUrls: ['./profile-dialog.component.css']
})
export class ProfileDialogComponent {

  constructor(public dialogRef: MatDialogRef<ProfileDialogComponent>) { }

  deepakImg = 'assets/images/dkm.jpeg';
  deepakAlt = 'Software Engineer, IITian';

}
