import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParametrePageComponent } from './parametre-page.component';

describe('ParametrePageComponent', () => {
  let component: ParametrePageComponent;
  let fixture: ComponentFixture<ParametrePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParametrePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParametrePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
