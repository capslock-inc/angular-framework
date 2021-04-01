import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcmspagePageComponent } from './addcmspage-page.component';

describe('AddcmspagePageComponent', () => {
  let component: AddcmspagePageComponent;
  let fixture: ComponentFixture<AddcmspagePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddcmspagePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddcmspagePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
