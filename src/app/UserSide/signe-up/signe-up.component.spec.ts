import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SigneUpComponent } from './signe-up.component';

describe('SigneUpComponent', () => {
  let component: SigneUpComponent;
  let fixture: ComponentFixture<SigneUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SigneUpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SigneUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
