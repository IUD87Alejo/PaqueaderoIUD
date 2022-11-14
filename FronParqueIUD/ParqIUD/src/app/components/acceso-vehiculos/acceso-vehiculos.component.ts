import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../services/common.service';
import { AccesoVehiculoModel } from '../../models/accesoVehiculos.model';
import { VistaAccesosModel } from '../../models/v_acceso.model';
import { AccesoVehiculoService } from '../../services/acceso-vehiculo.service';

@Component({
  selector: 'app-acceso-vehiculos',
  templateUrl: './acceso-vehiculos.component.html',
  styleUrls: ['./acceso-vehiculos.component.css']
})
export class AccesoVehiculosComponent implements OnInit {

  regs: VistaAccesosModel[] = [];
  title = 'Acceso Vehículos';
  cargando = false;

  constructor( private accesoVehiculoService:AccesoVehiculoService, 
               public common: CommonService ) { }

  ngOnInit(): void {
    console.log('Ingreso a Vehiculos');
    this.cargando = true;

    this.accesoVehiculoService.getVistaAccesos()
    .subscribe( resp => {
      console.log(resp);
      this.regs = resp;
      this.cargando = false;
    });
  }

  deleteVehiculo( accesoVehiculoService:AccesoVehiculoService, i: number ){
    console.log('Eliminar registro');
  }

}
