import { Component, OnInit } from '@angular/core';
import { PROFILE } from '../constant/product-feature-constant';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{

  totalExperiences!: number;
  profileTitle: string = PROFILE.DEEPAK_MANDAL
  profileSubTitle: string = PROFILE.CGI_IITG
  profileContentData: string = PROFILE.DESCRIPTION
  profilePath: string = PROFILE.PRFILE_PIC
  resumePath: string = "https://iitgoffice-my.sharepoint.com/:b:/g/personal/deepa170122014_alumni_iitg_ac_in/IQBej85dL8cWQp5i3EP9203zAWoVNDDQK2EOsAG4IH-uM9M?e=3Vey3M";

  ngOnInit(): void {
    const startDate = new Date(2021, 8, 27); // Months are 0-based: 8 = September
    const today = new Date();
    const diffYears = (today.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24 * 365.25);
    this.totalExperiences = Number(diffYears.toExponential(1));

  }
  
 


 
 

}
