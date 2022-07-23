import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  wordCloudImg = 'assets/images/tech.png'
  wordCloudAlt = 'Software Engineer, CGI || B.Tech, IIT Guwahati'
  deepakImg = 'assets/images/dkm-profile.jpeg';
  deepakAlt = 'Software Engineer, IITian';
}
