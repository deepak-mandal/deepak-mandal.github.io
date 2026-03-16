import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DkmEdgeverveExperienceComponent } from './edgeverve-experience.component';

describe('EdgeverveExperienceComponent', () => {
  let component: DkmEdgeverveExperienceComponent;
  let fixture: ComponentFixture<DkmEdgeverveExperienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DkmEdgeverveExperienceComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(DkmEdgeverveExperienceComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
