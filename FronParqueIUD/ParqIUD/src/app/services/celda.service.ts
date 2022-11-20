import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonService } from './common.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { CeldaModel } from '../models/celda.model';

@Injectable({
  providedIn: 'root'
})

export class CeldaService {

  celda: CeldaModel = new CeldaModel();

  constructor( private http: HttpClient,
               private commond: CommonService ) { }

  getCeldas() {
    return this.http.get(`${ this.commond.getUrl() }/Celda`)
    .pipe(
      map ( this.crearArreglo )
    );
  }

  getCelda( id: string ): Observable<any>{
    return this.http.get(`${ this.commond.getUrl() }/Celda/${ id }`);
  }

  crearCelda( celda: CeldaModel ) {
    return this.http.post(`${ this.commond.getUrl() }/Celda`, celda);
  }

  actualizarCelda( celda: CeldaModel ) {
    return this.http.put(`${ this.commond.getUrl() }/Celda/${ celda.idCelda }`, celda);
  }
  
  //Modulos de apoyo
  private crearArreglo( celdaObj: object ) {

    const celdas: CeldaModel[] = [];

    if (celdaObj === null ) { return []; }

    Object.keys ( celdaObj ).forEach ( key => {
      const celda: CeldaModel = celdaObj [key];
      celdas.push( celda );
    });

    return celdas;
  }
}
