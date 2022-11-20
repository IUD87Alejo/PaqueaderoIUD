import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../services/common.service';

import { VehiculoModel } from '../../models/vehiculo.model';
import { VehiculoService } from '../../services/vehiculo.service';

@Component({
  selector: 'app-vehiculos',
  templateUrl: './vehiculos.component.html',
  styleUrls: ['./vehiculos.component.css']
})
export class VehiculosComponent implements OnInit {

  regs: VehiculoModel[] = [];
  title = 'Vehículos';
  cargando = false;

  constructor( private vehiculoService: VehiculoService,
               public common: CommonService ) { }

  ngOnInit(): void {
    console.log('Ingreso de Vehiculos');
    this.cargando = true;

    this.vehiculoService.getVehiculos()
    .subscribe( resp => {
      console.log(resp);
      this.regs = resp;
      this.cargando = false;
    });
  }

  deleteVehiculo( vehiculo:VehiculoModel, i: number ){
    console.log('Eliminar registro');
  }

}
