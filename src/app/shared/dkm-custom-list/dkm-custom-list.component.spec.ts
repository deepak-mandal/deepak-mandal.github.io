import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DkmCustomListComponent } from './dkm-custom-list.component';

describe('DkmCustomListComponent', () => {
  let component: DkmCustomListComponent;
  let fixture: ComponentFixture<DkmCustomListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DkmCustomListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DkmCustomListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
