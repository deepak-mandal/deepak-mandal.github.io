import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule as MatCardModule } from '@angular/material/card';
import { MatButtonModule as MatButtonModule } from '@angular/material/button';
import { MatTabsModule as MatTabsModule } from '@angular/material/tabs';
import { MatListModule as MatListModule } from '@angular/material/list';
import { MatStepperModule } from '@angular/material/stepper';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule as MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule as MatTableModule } from '@angular/material/table';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatPaginatorModule as MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule as MatDialogModule } from '@angular/material/dialog';
import { ProductFeaturesModule } from './product-features/product-features.module';
import { AgGridModule } from 'ag-grid-angular';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatTabsModule,
    MatListModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatIconModule,
    MatTableModule,
    MatExpansionModule,
    MatPaginatorModule,
    MatDialogModule,
    ProductFeaturesModule,
    AgGridModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
