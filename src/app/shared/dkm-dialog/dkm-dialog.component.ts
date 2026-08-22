import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA as MAT_DIALOG_DATA, MatDialogRef, MatDialogTitle, MatDialogClose, MatDialogContent, MatDialogActions } from '@angular/material/dialog';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { CdkScrollable } from '@angular/cdk/scrolling';
import { MatCard, MatCardImage } from '@angular/material/card';
@Component({
  selector: 'app-dkm-dialog',
  templateUrl: './dkm-dialog.component.html',
  styleUrls: ['./dkm-dialog.component.scss'],
  imports: [MatDialogTitle, MatButton, MatDialogClose, MatIcon, CdkScrollable, MatDialogContent, MatCard, MatCardImage, MatDialogActions]
})
export class DkmDialogComponent implements OnInit, OnDestroy {

  currentImageIndex = 0;
  private autoScrollTimer?: ReturnType<typeof setInterval>;
  private preloadedImages: HTMLImageElement[] = [];

  constructor(public dialogRef: MatDialogRef<DkmDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  get images(): string[] {
    return this.data?.images?.length ? this.data.images : [this.data?.imageUrl];
  }

  get currentImage(): string {
    return this.images[this.currentImageIndex];
  }

  ngOnInit(): void {
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
    this.preloadedImages = this.images.map(imageUrl => {
      const image = new Image();
      image.src = imageUrl;
      return image;
    });
  }

  private startAutoScroll(): void {
    this.stopAutoScroll();
    if (this.images.length < 2) {
      return;
    }

    this.autoScrollTimer = setInterval(() => {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
    }, 1000);
  }

  private stopAutoScroll(): void {
    if (this.autoScrollTimer) {
      clearInterval(this.autoScrollTimer);
      this.autoScrollTimer = undefined;
    }
  }

}
