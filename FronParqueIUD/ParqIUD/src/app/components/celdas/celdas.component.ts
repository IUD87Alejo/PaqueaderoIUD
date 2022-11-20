import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../services/common.service';
import { YesNoPipe } from '../pipes/yes-no.pipe';

import {CeldaModel } from '../../models/celda.model';
import { CeldaService } from '../../services/celda.service';

@Component({
  selector: 'app-celdas',
  templateUrl: './celdas.component.html',
  styleUrls: ['./celdas.component.css']
})
export class CeldasComponent implements OnInit {

  regs: CeldaModel[] = [];
  title = 'Celdas';
  cargando = false;

  constructor( private celdaService: CeldaService,
               private common: CommonService ) { }

  ngOnInit(): void {
    console.log('Ingreso de Celdas');
    this.cargando = true;

    this.celdaService.getCeldas()
    .subscribe( resp => {
      console.log(resp);
      this.regs = resp;
      this.cargando = false;
    });
  }

  deleteCelda( celda:CeldaModel, i: number ){
    console.log('Eliminar registro');
  }

}
