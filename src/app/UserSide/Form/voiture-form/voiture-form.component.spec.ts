import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoitureFormComponent } from './voiture-form.component';

describe('VoitureFormComponent', () => {
  let component: VoitureFormComponent;
  let fixture: ComponentFixture<VoitureFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoitureFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoitureFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
