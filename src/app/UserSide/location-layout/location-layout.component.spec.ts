import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationLayoutComponent } from './location-layout.component';

describe('LocationLayoutComponent', () => {
  let component: LocationLayoutComponent;
  let fixture: ComponentFixture<LocationLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocationLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
