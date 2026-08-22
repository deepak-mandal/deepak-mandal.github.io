import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog as MatDialog } from '@angular/material/dialog';
import { DkmDialogComponent } from 'src/app/shared/dkm-dialog/dkm-dialog.component';
import { MatCard, MatCardSubtitle } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  imports: [MatCard, MatIcon, MatCardSubtitle]
})
export class FooterComponent implements OnInit, OnDestroy {

  readonly profileImages = [
    'assets/images/dkm.jpeg',
    'assets/images/dkm-iitg.jpg',
    'assets/images/dkm-cgi.jpg',
    'assets/images/dkm-edgeverve.jpg'
  ];
  currentImageIndex = 0;
  private autoScrollTimer?: ReturnType<typeof setInterval>;
  private preloadedImages: HTMLImageElement[] = [];

  currentYear = 2024;
  ngOnInit(): void {
    this.currentYear = new Date().getFullYear();
    this.preloadImages();
    this.startAutoScroll();
  }

  ngOnDestroy(): void {
    this.stopAutoScroll();
  }

  pauseAutoScroll(): void {
    this.stopAutoScroll();
  }

  resumeAutoScroll(): void {
    this.startAutoScroll();
  }

  private preloadImages(): void {
    this.preloadedImages = this.profileImages.map(imageUrl => {
      const image = new Image();
      image.src = imageUrl;
      return image;
    });
  }

  private startAutoScroll(): void {
    this.stopAutoScroll();
    this.autoScrollTimer = setInterval(() => {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.profileImages.length;
    }, 1000);
  }

  private stopAutoScroll(): void {
    if (this.autoScrollTimer) {
      clearInterval(this.autoScrollTimer);
      this.autoScrollTimer = undefined;
    }
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
        images: this.profileImages,
        altText: 'Deepak',
        content: 'Software Engineer, IITian'
      }
    });
  }

}
