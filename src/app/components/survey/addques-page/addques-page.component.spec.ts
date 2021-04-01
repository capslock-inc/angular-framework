import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddquesPageComponent } from './addques-page.component';

describe('AddquesPageComponent', () => {
  let component: AddquesPageComponent;
  let fixture: ComponentFixture<AddquesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddquesPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddquesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
