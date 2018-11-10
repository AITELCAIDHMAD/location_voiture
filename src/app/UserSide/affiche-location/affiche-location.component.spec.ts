import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficheLocationComponent } from './affiche-location.component';

describe('AfficheLocationComponent', () => {
  let component: AfficheLocationComponent;
  let fixture: ComponentFixture<AfficheLocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AfficheLocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AfficheLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
