import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewquesPageComponent } from './viewques-page.component';

describe('ViewquesPageComponent', () => {
  let component: ViewquesPageComponent;
  let fixture: ComponentFixture<ViewquesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewquesPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewquesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
