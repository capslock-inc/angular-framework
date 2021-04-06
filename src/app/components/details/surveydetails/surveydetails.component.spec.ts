import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveydetailsComponent } from './surveydetails.component';

describe('SurveydetailsComponent', () => {
  let component: SurveydetailsComponent;
  let fixture: ComponentFixture<SurveydetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SurveydetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveydetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
