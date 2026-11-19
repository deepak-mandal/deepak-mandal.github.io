import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'miscellaneous',
  imports: [
    MatCardModule, MatIconModule, MatButtonModule,
    CommonModule,
    MatDividerModule,
  ],
  templateUrl: './miscellaneous.component.html',
  styleUrl: './miscellaneous.component.scss',
})
export class MiscellaneousComponent {
  demoServer = "https://deepak-mandal.github.io/ims/"

}
