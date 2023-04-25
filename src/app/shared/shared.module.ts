import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { DkmCardComponent } from './dkm-card/dkm-card.component';
import { DkmButtonComponent } from './dkm-button/dkm-button.component';
import { MatListModule } from '@angular/material/list';
import { DkmTabComponent } from './dkm-tab/dkm-tab.component';
import { MatTabsModule } from '@angular/material/tabs';
import { DkmCustomCardComponent } from './dkm-custom-card/dkm-custom-card.component';
import { DkmCustomListComponent } from './dkm-custom-list/dkm-custom-list.component';
import { DkmDialogComponent } from './dkm-dialog/dkm-dialog.component';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    DkmCardComponent,
    DkmButtonComponent,
    DkmTabComponent,
    DkmCustomCardComponent,
    DkmCustomListComponent,
    DkmDialogComponent,
    
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatListModule,
    MatTabsModule,
    MatIconModule,
    MatDialogModule,
    MatButtonModule
  ],
  exports:[
    DkmButtonComponent,
    DkmCardComponent,
    DkmTabComponent,
    DkmCustomCardComponent,
    DkmCustomListComponent,
    DkmDialogComponent
  ]
})
export class SharedModule { }
