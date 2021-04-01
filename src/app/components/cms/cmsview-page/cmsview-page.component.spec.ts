import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmsviewPageComponent } from './cmsview-page.component';

describe('CmsviewPageComponent', () => {
  let component: CmsviewPageComponent;
  let fixture: ComponentFixture<CmsviewPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CmsviewPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CmsviewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
