import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonService } from './common.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { VehiculoModel } from '../models/vehiculo.model';

@Injectable({
  providedIn: 'root'
})

export class VehiculoService {

  vehiculo: VehiculoModel = new VehiculoModel();

  constructor( private http: HttpClient,
               private commond: CommonService ) { }

    getVehiculos() {
    //console.log('Get de vehículo');
    return this.http.get(`${ this.commond.getUrl() }/Vehiculo`)
    .pipe(
      map ( this.crearArreglo )
      // map ( this.crearArreglo, (resp: any) => {
      //   console.log(resp);
      //   return;
      // })
    );
  }

  getVehiculo( id: string ): Observable<any>{
    console.log(this.http.get(`${ this.commond.getUrl() }/Vehiculo/${ id }`)); // muestra el resultado de la consulta especifica
    return this.http.get(`${ this.commond.getUrl() }/Vehiculo/${ id }`);
  }

  getVehiculoPlaca( placa: string ): Observable<any>{
    console.log(this.http.get(`${ this.commond.getUrl() }/Vehiculo/vehiculoPlaca/${ placa }`)); // muestra el resultado de la consulta especifica
    return this.http.get(`${ this.commond.getUrl() }/Vehiculo/vehiculoPlaca/${ placa }`);
  }

  crearVehiculo( vehiculo: VehiculoModel) {
    console.log('Crecación de vehículo');
    console.log(this.http.post(`${ this.commond.getUrl() }/Vehiculo`, vehiculo)); // muestra el resultado de la consulta especifica
    return this.http.post(`${ this.commond.getUrl() }/Vehiculo`, vehiculo);
  }

  actualizarVehiculo( vehiculo: VehiculoModel ) {
    console.log(this.http.put(`${ this.commond.getUrl() }/Vehiculo/${ vehiculo.idVehiculo }`, vehiculo)); // muestra el resultado de la consulta especifica
    return this.http.put(`${ this.commond.getUrl() }/Vehiculo/${ vehiculo.idVehiculo }`, vehiculo);
  }

  //Modulos de apoyo
  private crearArreglo( vehiculoObj: object ) {

    const vehiculos: VehiculoModel[] = [];

    if (vehiculoObj === null ) { return []; }

    Object.keys ( vehiculoObj ).forEach ( key => {
      const vehiculo: VehiculoModel = vehiculoObj [key];

      vehiculos.push( vehiculo );
    });

    //console.log('Arreglo de vehículo', vehiculos);

    return vehiculos;
  }

}
