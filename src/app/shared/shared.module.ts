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

@NgModule({
  declarations: [
    DkmCardComponent,
    DkmButtonComponent,
    DkmTabComponent,
    DkmCustomCardComponent,
    DkmCustomListComponent,
    
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatListModule,
    MatTabsModule
  ],
  exports:[
    DkmButtonComponent,
    DkmCardComponent,
    DkmTabComponent,
    DkmCustomCardComponent,
    DkmCustomListComponent
  ]
})
export class SharedModule { }
