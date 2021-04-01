import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewusergroupPageComponent } from './viewusergroup-page.component';

describe('ViewusergroupPageComponent', () => {
  let component: ViewusergroupPageComponent;
  let fixture: ComponentFixture<ViewusergroupPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewusergroupPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewusergroupPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
