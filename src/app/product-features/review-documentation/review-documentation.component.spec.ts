import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewDocumentationComponent } from './review-documentation.component';

describe('ReviewDocumentationComponent', () => {
  let component: ReviewDocumentationComponent;
  let fixture: ComponentFixture<ReviewDocumentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReviewDocumentationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewDocumentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
