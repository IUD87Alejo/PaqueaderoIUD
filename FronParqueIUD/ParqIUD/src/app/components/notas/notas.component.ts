import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../services/common.service';

import { VistaAccesosModel } from '../../models/v_acceso.model';
import { NotaService } from '../../services/nota.service';
import { AccesoVehiculoService } from '../../services/acceso-vehiculo.service';

@Component({
  selector: 'app-notas',
  templateUrl: './notas.component.html',
  styleUrls: ['./notas.component.css']
})
export class NotasComponent implements OnInit {

  regs: VistaAccesosModel[] = [];
  title = 'Notas';
  cargando = false;

  constructor( private notaService: NotaService,
               private accesoVehiculoService:AccesoVehiculoService,
               public common: CommonService ) { }

  ngOnInit(): void {
    console.log('Ingreso a Notas');
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
