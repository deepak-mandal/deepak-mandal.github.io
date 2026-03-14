import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule as MatCardModule } from '@angular/material/card';
import { DkmCardComponent } from './dkm-card/dkm-card.component';
import { DkmButtonComponent } from './dkm-button/dkm-button.component';
import { MatListModule as MatListModule } from '@angular/material/list';
import { DkmTabComponent } from './dkm-tab/dkm-tab.component';
import { MatTabsModule as MatTabsModule } from '@angular/material/tabs';
import { DkmCustomCardComponent } from './dkm-custom-card/dkm-custom-card.component';
import { DkmCustomListComponent } from './dkm-custom-list/dkm-custom-list.component';
import { DkmDialogComponent } from './dkm-dialog/dkm-dialog.component';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule as MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule as MatButtonModule } from '@angular/material/button';

@NgModule({
    imports: [
        CommonModule,
        MatCardModule,
        MatListModule,
        MatTabsModule,
        MatIconModule,
        MatDialogModule,
        MatButtonModule,
        DkmCardComponent,
        DkmButtonComponent,
        DkmTabComponent,
        DkmCustomCardComponent,
        DkmCustomListComponent,
        DkmDialogComponent
    ],
    exports: [
        DkmButtonComponent,
        DkmCardComponent,
        DkmTabComponent,
        DkmCustomCardComponent,
        DkmCustomListComponent,
        DkmDialogComponent
    ]
})
export class SharedModule { }
