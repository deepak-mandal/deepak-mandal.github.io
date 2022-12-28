import { Component } from '@angular/core';
import { PROFILE } from '../constant/product-feature-constant';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
 

  profileTitle: string = PROFILE.DEEPAK_MANDAL
  profileSubTitle: string = PROFILE.CGI_IITG
  profileContentData: string = PROFILE.DESCRIPTION
  profilePath: string = PROFILE.PRFILE_PIC
 
 

}
