import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatLegacyCardModule as MatCardModule } from '@angular/material/legacy-card';
import { DkmCardComponent } from './dkm-card/dkm-card.component';
import { DkmButtonComponent } from './dkm-button/dkm-button.component';
import { MatLegacyListModule as MatListModule } from '@angular/material/legacy-list';
import { DkmTabComponent } from './dkm-tab/dkm-tab.component';
import { MatLegacyTabsModule as MatTabsModule } from '@angular/material/legacy-tabs';
import { DkmCustomCardComponent } from './dkm-custom-card/dkm-custom-card.component';
import { DkmCustomListComponent } from './dkm-custom-list/dkm-custom-list.component';
import { DkmDialogComponent } from './dkm-dialog/dkm-dialog.component';
import { MatIconModule } from '@angular/material/icon';
import { MatLegacyDialogModule as MatDialogModule } from '@angular/material/legacy-dialog';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';

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
