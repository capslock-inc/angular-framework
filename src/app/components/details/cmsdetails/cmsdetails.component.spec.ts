import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmsdetailsComponent } from './cmsdetails.component';

describe('CmsdetailsComponent', () => {
  let component: CmsdetailsComponent;
  let fixture: ComponentFixture<CmsdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CmsdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CmsdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
