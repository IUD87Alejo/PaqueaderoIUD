import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../services/common.service';

import { MensualidadModel } from '../../models/mensualidad.model';
import { VistaRentasModel } from '../../models/v_renta.model';
import { MensualidadService } from '../../services/mensualidad.service';

@Component({
  selector: 'app-mensualidades',
  templateUrl: './mensualidades.component.html',
  styleUrls: ['./mensualidades.component.css']
})
export class MensualidadesComponent implements OnInit {

  //regs: MensualidadModel[] = [];
  regs: VistaRentasModel[] = [];
  title = "Pago Mensualidad";
  cargando = false;

  constructor( private mensualidadService: MensualidadService,
               public common: CommonService ) { }

  ngOnInit(): void {
    console.log('Ingreso a Mensualidades');
    this.cargando = true;

    this.mensualidadService.getVistaRentas()
    .subscribe( resp => {
      console.log(resp);
      this.regs = resp;
      this.cargando = false;
    })
  }

  deleteMensualidad( mensualidadService: MensualidadService, i: number) {
    console.log('Eliminar registro');
  }

}
