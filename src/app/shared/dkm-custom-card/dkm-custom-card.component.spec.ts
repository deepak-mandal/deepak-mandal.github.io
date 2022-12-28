import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DkmCustomCardComponent } from './dkm-custom-card.component';

describe('DkmCustomCardComponent', () => {
  let component: DkmCustomCardComponent;
  let fixture: ComponentFixture<DkmCustomCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DkmCustomCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DkmCustomCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
