import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonService } from './common.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { MensualidadModel } from '../models/mensualidad.model';
import { VistaRentasModel } from '../models/v_renta.model';

@Injectable({
  providedIn: 'root'
})
export class MensualidadService {

  mensualidad: MensualidadModel = new MensualidadModel();

  constructor( private http: HttpClient,
               private commond: CommonService) { }

  getMensualidades() {
    return this.http.get(`${ this.commond.getUrl() }/mensualidad`)
    .pipe(
      map ( this.crearArreglo )
    );
  }

  getVistaRentas() {
    return this.http.get(`${ this.commond.getUrl() }/mensualidad/VistaRenta`)
    .pipe(
      map ( this.crearArregloVista )
    );
  }

  getMensualidad( id: string ): Observable<any>{
    return this.http.get(`${ this.commond.getUrl() }/mensualidad/${ id }`);
  }

  creaMensualidad( mensualidad: MensualidadModel) {
    console.log('MensualidadPost', mensualidad);
    return this.http.post(`${ this.commond.getUrl() }/mensualidad`, mensualidad);
  }

  actualizarMensualidad( mensualidad: MensualidadModel) {
    return this.http.put( `${ this.commond.getUrl() }/accesoVehiculo/${ mensualidad.idMensualidad }`, mensualidad );
  }

  //Modulos de apoyo
  private crearArreglo( mensualidadObj: object ) {

    const mensualidades: MensualidadModel[] = [];

    if (mensualidadObj === null ) { return []; }

    Object.keys ( mensualidadObj ).forEach ( key => {
      const mensualidad: MensualidadModel = mensualidadObj [key];

      mensualidades.push( mensualidad );
    });

    return mensualidades;
  }

  private crearArregloVista( rentasObj: object ) {

    const vrentas: VistaRentasModel[] = [];

    if (rentasObj === null ) { return []; }

    Object.keys ( rentasObj ).forEach ( key => {
      const vrenta: VistaRentasModel = rentasObj [key];

      vrentas.push( vrenta );
    });

    return vrentas;
  }
}
