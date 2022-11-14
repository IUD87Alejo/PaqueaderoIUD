import { TestBed } from '@angular/core/testing';

import { AccesoVehiculoService } from './acceso-vehiculo.service';

describe('AccesoVehiculoService', () => {
  let service: AccesoVehiculoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccesoVehiculoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
