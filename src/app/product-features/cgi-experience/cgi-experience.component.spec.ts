import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CgiExperienceComponent } from './cgi-experience.component';

describe('CgiExperienceComponent', () => {
  let component: CgiExperienceComponent;
  let fixture: ComponentFixture<CgiExperienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CgiExperienceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CgiExperienceComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
