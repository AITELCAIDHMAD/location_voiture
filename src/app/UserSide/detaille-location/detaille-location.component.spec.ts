import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailleLocationComponent } from './detaille-location.component';

describe('DetailleLocationComponent', () => {
  let component: DetailleLocationComponent;
  let fixture: ComponentFixture<DetailleLocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailleLocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailleLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
