import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MesLocationComponent } from './mes-location.component';

describe('MesLocationComponent', () => {
  let component: MesLocationComponent;
  let fixture: ComponentFixture<MesLocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MesLocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MesLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
