import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddusergroupPageComponent } from './addusergroup-page.component';

describe('AddusergroupPageComponent', () => {
  let component: AddusergroupPageComponent;
  let fixture: ComponentFixture<AddusergroupPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddusergroupPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddusergroupPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
