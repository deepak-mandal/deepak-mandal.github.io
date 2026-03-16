import { Component, OnInit } from '@angular/core';
import { MatCard, MatCardImage } from '@angular/material/card';

@Component({
  selector: 'profile-sidenav',
  templateUrl: './profile-sidenav.component.html',
  styleUrls: ['./profile-sidenav.component.css'],
  imports: [MatCard, MatCardImage]
})
export class ProfileSidenavComponent implements OnInit {

  ngOnInit(): void {
  }

  deepakImg = 'assets/images/dkm.jpeg';
  deepakAlt = 'Software Engineer, IITian';

}
