import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewuserPageComponent } from './viewuser-page.component';

describe('ViewuserPageComponent', () => {
  let component: ViewuserPageComponent;
  let fixture: ComponentFixture<ViewuserPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewuserPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewuserPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
