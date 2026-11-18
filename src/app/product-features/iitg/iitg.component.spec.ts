import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IitgComponent } from './iitg.component';

describe('IitgComponent', () => {
  let component: IitgComponent;
  let fixture: ComponentFixture<IitgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IitgComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IitgComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
