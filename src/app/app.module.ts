import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatListModule } from '@angular/material/list';
import { MatStepperModule } from '@angular/material/stepper';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FooterComponent } from './footer/footer.component';
import { CertificatesComponent } from './certificates/certificates.component';
import { AchievementsComponent } from './achievements/achievements.component';
import { MatTableModule } from '@angular/material/table';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ProfileDialogComponent } from './profile-dialog/profile-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ExtracurricularsComponent } from './extracurriculars/extracurriculars.component';
import { ProductFeaturesModule } from './product-features/product-features.module';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    CertificatesComponent,
    AchievementsComponent,
    ProfileDialogComponent,
    ExtracurricularsComponent,
    
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


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
