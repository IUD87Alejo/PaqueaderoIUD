import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonService } from './common.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { AccesoVehiculoModel } from '../models/accesoVehiculos.model';
import { VistaAccesosModel } from '../models/v_acceso.model';

@Injectable({
  providedIn: 'root'
})
export class AccesoVehiculoService {

  accesoVehiculo: AccesoVehiculoModel = new AccesoVehiculoModel();

  constructor( private http: HttpClient,
               private commond: CommonService ) { }

  getAccesos() {
    return this.http.get(`${ this.commond.getUrl() }/accesoVehiculo`)
    .pipe(
      map ( this.crearArreglo )
    );
  }

  getVistaAccesos() {
    return this.http.get(`${ this.commond.getUrl() }/accesoVehiculo/VistaAcceso`)
    .pipe(
      map ( this.crearArregloVista )
    );
  }

  getAcceso( id: string ): Observable<any>{
    return this.http.get(`${ this.commond.getUrl() }/accesoVehiculo/${ id }`);
  }

  crearAcceso( acceso: AccesoVehiculoModel) {
    return this.http.post(`${ this.commond.getUrl() }/accesoVehiculo`, acceso);
  }

  actualizarAcceso( acceso: AccesoVehiculoModel) {
    return this.http.put( `${ this.commond.getUrl() }/accesoVehiculo/${ acceso.idAcceso }`, acceso );
  }

  //Modulos de apoyo
  private crearArreglo( accesoObj: object ) {

    const accesos: AccesoVehiculoModel[] = [];

    if (accesoObj === null ) { return []; }

    Object.keys ( accesoObj ).forEach ( key => {
      const acceso: AccesoVehiculoModel = accesoObj [key];

      accesos.push( acceso );
    });

    return accesos;
  }

  private crearArregloVista( accesoObj: object ) {

    const vaccesos: VistaAccesosModel[] = [];

    if (accesoObj === null ) { return []; }

    Object.keys ( accesoObj ).forEach ( key => {
      const vacceso: VistaAccesosModel = accesoObj [key];

      vaccesos.push( vacceso );
    });

    return vaccesos;
  }


}
