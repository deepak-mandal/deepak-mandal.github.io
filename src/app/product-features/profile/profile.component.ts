import { Component, OnInit } from '@angular/core';
import { PROFILE } from '../constant/product-feature-constant';
import { MatIcon } from '@angular/material/icon';
import { MatCard, MatCardHeader, MatCardAvatar, MatCardTitle, MatCardSubtitle, MatCardContent } from '@angular/material/card';
import { NgStyle } from '@angular/common';

@Component({
    selector: 'profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css'],
    imports: [MatIcon, MatCard, MatCardHeader, MatCardAvatar, NgStyle, MatCardTitle, MatCardSubtitle, MatCardContent]
})
export class ProfileComponent implements OnInit{

  totalExperiences!: number;
  profileTitle: string = PROFILE.DEEPAK_MANDAL
  profileSubTitle: string = PROFILE.CGI_IITG
  profileContentData: string = PROFILE.DESCRIPTION
  profilePath: string = PROFILE.PRFILE_PIC
  resumePath = "https://iitgoffice-my.sharepoint.com/:b:/g/personal/deepa170122014_alumni_iitg_ac_in/IQALExhbpbJuQKhkxcF5SqwHAY8vUBDEr0Z6zP-83J9L8WQ?e=wagGbH";

  ngOnInit(): void {
    const startDate = new Date(2021, 8, 27); // Months are 0-based: 8 = September
    const today = new Date();
    const diffYears = (today.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24 * 365.25);
    this.totalExperiences = Number(diffYears.toExponential(1));

  }
  
 


 
 

}
