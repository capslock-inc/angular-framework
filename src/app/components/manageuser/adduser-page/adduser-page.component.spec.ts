import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdduserPageComponent } from './adduser-page.component';

describe('AdduserPageComponent', () => {
  let component: AdduserPageComponent;
  let fixture: ComponentFixture<AdduserPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdduserPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdduserPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
