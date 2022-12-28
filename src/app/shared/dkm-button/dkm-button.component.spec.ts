import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DkmButtonComponent } from './dkm-button.component';

describe('DkmButtonComponent', () => {
  let component: DkmButtonComponent;
  let fixture: ComponentFixture<DkmButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DkmButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DkmButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
