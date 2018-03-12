import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleMapJsComponent } from './google-map-js.component';

describe('GoogleMapJsComponent', () => {
  let component: GoogleMapJsComponent;
  let fixture: ComponentFixture<GoogleMapJsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoogleMapJsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoogleMapJsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
