import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdgeverveExperienceComponent } from './edgeverve-experience.component';

describe('EdgeverveExperienceComponent', () => {
  let component: EdgeverveExperienceComponent;
  let fixture: ComponentFixture<EdgeverveExperienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EdgeverveExperienceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EdgeverveExperienceComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
