import { StepperSelectionEvent, STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { HttpClient } from '@angular/common/http';
import { Component, Injectable, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AgGridAngular } from 'ag-grid-angular';
import { CellClickedEvent, ColDef, GridReadyEvent } from 'ag-grid-community';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { displayDefaultIndicatorType: false },
    },
  ],
})
export class AppComponent {
  title = 'Deepak Mandal | CGI | IIT Guwahati';

  firstFormGroup!: FormGroup;
  secondFormGroup!: FormGroup;

  constructor(private _formBuilder: FormBuilder,
    private http: HttpClient
    ) { }
  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required],
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required],
    });
  }

  iconValue = 'school';
  selectionChange(event: StepperSelectionEvent) {
    console.log(event.selectedStep.label);
    let stepLabel = event.selectedStep.label
    if (stepLabel == "edu") {
      this.iconValue = 'school'
    }
    if (stepLabel == "exp") {
      this.iconValue = 'business'
    }
    if (stepLabel == "proj") {
      this.iconValue = 'business_center'
    }
    if (stepLabel == "skill") {
      this.iconValue = 'sort'
    }
    if (stepLabel == "certi") {
      this.iconValue = 'wallpaper'
    }
    if (stepLabel == "ach") {
      this.iconValue = 'star'
    }
    if (stepLabel == "extra") {
      this.iconValue = 'public'
    }
  }



  // 
  // public columnDefs: ColDef[] = [
  //   { field: 'name' },
  //   // Using dot notation to access nested property
  //   { field: 'medals.gold', headerName: 'Gold' },
  //   // Show default header name
  //   { field: 'person.age' },
  // ];
  // public rowData: any[] | null = [
  //   {
  //     name: 'Michael Phelps',
  //     person: {
  //       age: 23,
  //       country: 'United States',
  //     },
  //     medals: {
  //       gold: 8,
  //       silver: 0,
  //       bronze: 0,
  //     },
  //   },
  //   {
  //     name: 'Michael Phelps',
  //     person: {
  //       age: 19,
  //       country: 'United States',
  //     },
  //     medals: {
  //       gold: 6,
  //       silver: 0,
  //       bronze: 2,
  //     },
  //   },
  //   {
  //     name: 'Michael Phelps',
  //     person: {
  //       age: 27,
  //       country: 'United States',
  //     },
  //     medals: {
  //       gold: 4,
  //       silver: 2,
  //       bronze: 0,
  //     },
  //   },
  //   {
  //     name: 'Natalie Coughlin',
  //     person: {
  //       age: 25,
  //       country: 'United States',
  //     },
  //     medals: {
  //       gold: 1,
  //       silver: 2,
  //       bronze: 3,
  //     },
  //   },
  //   {
  //     name: 'Aleksey Nemov',
  //     person: {
  //       age: 24,
  //       country: 'Russia',
  //     },
  //     medals: {
  //       gold: 2,
  //       silver: 1,
  //       bronze: 3,
  //     },
  //   },
  //   {
  //     name: 'Alicia Coutts',
  //     person: {
  //       age: 24,
  //       country: 'Australia',
  //     },
  //     medals: {
  //       gold: 1,
  //       silver: 3,
  //       bronze: 1,
  //     },
  //   },
  //   {
  //     name: 'Missy Franklin',
  //     person: {
  //       age: 17,
  //       country: 'United States',
  //     },
  //     medals: {
  //       gold: 4,
  //       silver: 0,
  //       bronze: 1,
  //     },
  //   },
  //   {
  //     name: 'Ryan Lochte',
  //     person: {
  //       age: 27,
  //       country: 'United States',
  //     },
  //     medals: {
  //       gold: 2,
  //       silver: 2,
  //       bronze: 1,
  //     },
  //   },
  //   {
  //     name: 'Allison Schmitt',
  //     person: {
  //       age: 22,
  //       country: 'United States',
  //     },
  //     medals: {
  //       gold: 3,
  //       silver: 1,
  //       bronze: 1,
  //     },
  //   },
  //   {
  //     name: 'Natalie Coughlin',
  //     person: {
  //       age: 21,
  //       country: 'United States',
  //     },
  //     medals: {
  //       gold: 2,
  //       silver: 2,
  //       bronze: 1,
  //     },
  //   },
  //   {
  //     name: 'Ian Thorpe',
  //     person: {
  //       age: 17,
  //       country: 'Australia',
  //     },
  //     medals: {
  //       gold: 3,
  //       silver: 2,
  //       bronze: 0,
  //     },
  //   },
  //   {
  //     name: 'Dara Torres',
  //     person: {
  //       age: 33,
  //       country: 'United States',
  //     },
  //     medals: {
  //       gold: 2,
  //       silver: 0,
  //       bronze: 3,
  //     },
  //   },
  //   {
  //     name: 'Cindy Klassen',
  //     person: {
  //       age: 26,
  //       country: 'Canada',
  //     },
  //     medals: {
  //       gold: 1,
  //       silver: 2,
  //       bronze: 2,
  //     },
  //   },
  //   {
  //     name: 'Nastia Liukin',
  //     person: {
  //       age: 18,
  //       country: 'United States',
  //     },
  //     medals: {
  //       gold: 1,
  //       silver: 3,
  //       bronze: 1,
  //     },
  //   },
  //   {
  //     name: 'Marit Bjørgen',
  //     person: {
  //       age: 29,
  //       country: 'Norway',
  //     },
  //     medals: {
  //       gold: 3,
  //       silver: 1,
  //       bronze: 1,
  //     },
  //   },
  //   {
  //     name: 'Sun Yang',
  //     person: {
  //       age: 20,
  //       country: 'China',
  //     },
  //     medals: {
  //       gold: 2,
  //       silver: 1,
  //       bronze: 1,
  //     },
  //   },
  //   {
  //     name: 'Kirsty Coventry',
  //     person: {
  //       age: 24,
  //       country: 'Zimbabwe',
  //     },
  //     medals: {
  //       gold: 1,
  //       silver: 3,
  //       bronze: 0,
  //     },
  //   },
  //   {
  //     name: 'Libby Lenton-Trickett',
  //     person: {
  //       age: 23,
  //       country: 'Australia',
  //     },
  //     medals: {
  //       gold: 2,
  //       silver: 1,
  //       bronze: 1,
  //     },
  //   },
  //   {
  //     name: 'Ryan Lochte',
  //     person: {
  //       age: 24,
  //       country: 'United States',
  //     },
  //     medals: {
  //       gold: 2,
  //       silver: 0,
  //       bronze: 2,
  //     },
  //   },
  //   {
  //     name: 'Inge de Bruijn',
  //     person: {
  //       age: 30,
  //       country: 'Netherlands',
  //     },
  //     medals: {
  //       gold: 1,
  //       silver: 1,
  //       bronze: 2,
  //     },
  //   },
  // ];

  columnDefs: ColDef[] = [
    { field: 'make' },
    { field: 'model' },
    { field: 'price' }
];

rowData = [
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxster', price: 72000 }
];
}
