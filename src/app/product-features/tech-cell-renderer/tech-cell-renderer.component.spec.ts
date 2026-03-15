import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechCellRendererComponent } from './tech-cell-renderer.component';

describe('TechCellRendererComponent', () => {
  let component: TechCellRendererComponent;
  let fixture: ComponentFixture<TechCellRendererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TechCellRendererComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechCellRendererComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
