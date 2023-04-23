import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificateViewCellRendererComponent } from './certificate-view-cell-renderer.component';

describe('CertificateViewCellRendererComponent', () => {
  let component: CertificateViewCellRendererComponent;
  let fixture: ComponentFixture<CertificateViewCellRendererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertificateViewCellRendererComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificateViewCellRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
