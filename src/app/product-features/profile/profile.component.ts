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


  ngOnInit(): void {
    const startDate = new Date(2021, 8, 27); // Months are 0-based: 8 = September
    const today = new Date();
    const diffYears = (today.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24 * 365.25);
    this.totalExperiences = Number(diffYears.toExponential(1));

  }
  
 


 
 

}
