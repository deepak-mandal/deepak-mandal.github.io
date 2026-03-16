import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DkmCgiExperienceComponent } from './cgi-experience.component';

describe('CgiExperienceComponent', () => {
  let component: DkmCgiExperienceComponent;
  let fixture: ComponentFixture<DkmCgiExperienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DkmCgiExperienceComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(DkmCgiExperienceComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
