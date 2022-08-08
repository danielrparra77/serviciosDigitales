import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiciosDigitalesComponent } from './serviciosDigitales.component';

describe('ServiciosDigitalesComponent', () => {
  let component: ServiciosDigitalesComponent;
  let fixture: ComponentFixture<ServiciosDigitalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiciosDigitalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiciosDigitalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
