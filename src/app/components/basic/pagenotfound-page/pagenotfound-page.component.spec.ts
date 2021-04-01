import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagenotfoundPageComponent } from './pagenotfound-page.component';

describe('PagenotfoundPageComponent', () => {
  let component: PagenotfoundPageComponent;
  let fixture: ComponentFixture<PagenotfoundPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagenotfoundPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagenotfoundPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
