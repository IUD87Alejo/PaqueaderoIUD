import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccesoVehiculosComponent } from './acceso-vehiculos.component';

describe('AccesoVehiculosComponent', () => {
  let component: AccesoVehiculosComponent;
  let fixture: ComponentFixture<AccesoVehiculosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccesoVehiculosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccesoVehiculosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
