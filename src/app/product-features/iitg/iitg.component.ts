import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'iitg',
  imports: [CommonModule, MatCardModule, MatIconModule,],
  templateUrl: './iitg.component.html',
  styleUrl: './iitg.component.scss',
})
export class IitgComponent {

}
