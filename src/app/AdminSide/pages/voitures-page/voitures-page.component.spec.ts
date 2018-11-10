import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoituresPageComponent } from './voitures-page.component';

describe('VoituresPageComponent', () => {
  let component: VoituresPageComponent;
  let fixture: ComponentFixture<VoituresPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoituresPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoituresPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
