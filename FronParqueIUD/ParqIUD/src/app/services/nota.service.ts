import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonService } from './common.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { NotaModel } from '../models/nota.model';
import { VistaAccesosModel } from '../models/v_acceso.model';

@Injectable({
  providedIn: 'root'
})
export class NotaService {

  nota: NotaModel = new NotaModel();

  constructor( private http: HttpClient,
               private commond: CommonService ) { }
  
  getAccesos() {
    return this.http.get(`${ this.commond.getUrl() }/Nota`)
    .pipe(
      map ( this.crearArreglo )
    );
  }

  //Modulos de apoyo
  private crearArreglo( notaObj: object ) {

    const notas: NotaModel[] = [];

    if (notaObj === null ) { return []; }

    Object.keys ( notaObj ).forEach ( key => {
      const nota: NotaModel = notaObj [key];

      notas.push( nota );
    });

    return notas;
  }
}
