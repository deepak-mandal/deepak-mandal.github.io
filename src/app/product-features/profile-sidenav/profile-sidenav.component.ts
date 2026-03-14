import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'profile-sidenav',
  templateUrl: './profile-sidenav.component.html',
  styleUrls: ['./profile-sidenav.component.css']
})
export class ProfileSidenavComponent implements OnInit {

  // constructor() { }

  ngOnInit(): void {
  }
  // constructor(public dialogRef: MatDialogRef<ProfileSidenavComponent>) { }

  deepakImg = 'assets/images/dkm.jpeg';
  deepakAlt = 'Software Engineer, IITian';

}
